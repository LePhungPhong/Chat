"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = initSocket;
const socket_io_1 = require("socket.io");
const mediasoup_service_1 = require("../services/mediasoup.service");
const peers = new Map();
let mediasoup;
function initSocket(server) {
    return __awaiter(this, void 0, void 0, function* () {
        const io = new socket_io_1.Server(server, {
            path: "/socket.io",
            cors: {
                origin: ["http://localhost:8080", "http://localhost:8081"],
                methods: ["GET", "POST"],
                allowedHeaders: ["X-User-Id"],
                credentials: true,
            },
        });
        // Khởi tạo mediasoup service
        mediasoup = new mediasoup_service_1.MediasoupService();
        yield mediasoup.init();
        // Relay active speaker events
        mediasoup.on("activeSpeaker", (producerId) => {
            io.emit("activeSpeaker", { producerId });
        });
        io.on("connection", (socket) => {
            const userId = String(socket.handshake.query.userId || "");
            if (!userId) {
                socket.disconnect(true);
                return;
            }
            console.log(`User ${userId} connected`);
            peers.set(userId, {
                id: userId,
                socketId: socket.id,
                transports: [],
                producers: [],
                consumers: [],
            });
            socket.emit("connection-success", { socketId: socket.id });
            socket.on("join-room", (roomId) => {
                socket.join(roomId);
                const peer = peers.get(userId);
                if (peer)
                    peer.roomId = roomId;
                socket.to(roomId).emit("user-joined", { userId });
                // Optional: Emit current participants (track qua socket rooms)
                const roomSockets = io.sockets.adapter.rooms.get(roomId);
                if (roomSockets) {
                    const participants = Array.from(roomSockets)
                        .map((sid) => {
                        const p = [...peers.entries()].find(([_, peer]) => peer.socketId === sid);
                        return p ? p[0] : null;
                    })
                        .filter(Boolean);
                    socket.to(roomId).emit("room-participants", { participants });
                }
            });
            socket.on("get-rtp-capabilities", (callback) => {
                callback(mediasoup.getRtpCapabilities());
            });
            socket.on("create-transport", (_, callback) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const transport = yield mediasoup.createTransport();
                    const params = {
                        id: transport.id,
                        iceParameters: transport.iceParameters,
                        iceCandidates: transport.iceCandidates,
                        dtlsParameters: transport.dtlsParameters,
                    };
                    const peer = peers.get(userId);
                    if (peer)
                        peer.transports.push(transport.id);
                    callback(params);
                }
                catch (error) {
                    const errMsg = error instanceof Error ? error.message : String(error);
                    callback({ error: errMsg });
                }
            }));
            socket.on("connect-transport", (_a, callback_1) => __awaiter(this, [_a, callback_1], void 0, function* ({ transportId, dtlsParameters }, callback) {
                try {
                    yield mediasoup.connectTransport(transportId, dtlsParameters);
                    callback("connected");
                }
                catch (error) {
                    const errMsg = error instanceof Error ? error.message : String(error);
                    callback({ error: errMsg });
                }
            }));
            socket.on("produce", (_a, callback_1) => __awaiter(this, [_a, callback_1], void 0, function* ({ transportId, kind, rtpParameters, appData }, callback) {
                var _b;
                try {
                    const producer = yield mediasoup.produce(transportId, kind, rtpParameters, appData);
                    const peer = peers.get(userId);
                    if (peer)
                        peer.producers.push(producer.id);
                    // Thông báo tới các peer khác trong room
                    const peerRoom = (_b = peers.get(userId)) === null || _b === void 0 ? void 0 : _b.roomId;
                    if (peerRoom) {
                        socket
                            .to(peerRoom)
                            .emit("new-producer", { producerId: producer.id, kind });
                    }
                    else {
                        socket.broadcast.emit("new-producer", {
                            producerId: producer.id,
                            kind,
                        });
                    }
                    callback({ id: producer.id });
                }
                catch (error) {
                    const errMsg = error instanceof Error ? error.message : String(error);
                    callback({ error: errMsg });
                }
            }));
            socket.on("consume", (_a, callback_1) => __awaiter(this, [_a, callback_1], void 0, function* ({ transportId, producerId, rtpCapabilities }, callback) {
                try {
                    const consumer = yield mediasoup.consume(transportId, producerId, rtpCapabilities);
                    const peer = peers.get(userId);
                    if (peer)
                        peer.consumers.push(consumer.id);
                    callback({
                        id: consumer.id,
                        producerId,
                        kind: consumer.kind,
                        rtpParameters: consumer.rtpParameters,
                    });
                }
                catch (error) {
                    const errMsg = error instanceof Error ? error.message : String(error);
                    callback({ error: errMsg });
                }
            }));
            socket.on("disconnect", () => {
                console.log(`User ${userId} disconnected`);
                const peer = peers.get(userId);
                if (peer) {
                    // Cleanup resources
                    mediasoup.cleanupUser(peer.transports, peer.producers, peer.consumers);
                    // Notify room
                    if (peer.roomId) {
                        socket.to(peer.roomId).emit("user-left", { userId });
                    }
                }
                peers.delete(userId);
            });
        });
        console.log("Socket + Mediasoup initialized");
    });
}
