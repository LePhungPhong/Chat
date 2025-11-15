import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { MediasoupService } from "./mediasoup.service";

interface Peer {
  id: string;
  socketId: string;
  transports: string[]; // transport ids
  producers: string[]; // producer ids
  consumers: string[]; // consumer ids
  roomId?: string; // for per-room broadcasting
}

const peers = new Map<string, Peer>();
let mediasoup: MediasoupService;

export async function initSocket(server: HttpServer) {
  const io = new Server(server, {
    path: "/socket.io",
    cors: {
      origin: ["http://localhost:8080", "http://localhost:8081"],
      methods: ["GET", "POST"],
      allowedHeaders: ["X-User-Id"],
      credentials: true,
    },
  });

  // Khởi tạo mediasoup service
  mediasoup = new MediasoupService();
  await mediasoup.init();

  // Relay active speaker events
  mediasoup.on("activeSpeaker", (producerId: string) => {
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

    socket.on("join-room", (roomId: string) => {
      socket.join(roomId);
      const peer = peers.get(userId);
      if (peer) peer.roomId = roomId;
      socket.to(roomId).emit("user-joined", { userId });
      // Optional: Emit current participants (track qua socket rooms)
      const roomSockets = io.sockets.adapter.rooms.get(roomId);
      if (roomSockets) {
        const participants = Array.from(roomSockets)
          .map((sid) => {
            const p = [...peers.entries()].find(
              ([_, peer]) => peer.socketId === sid
            );
            return p ? p[0] : null;
          })
          .filter(Boolean);
        socket.to(roomId).emit("room-participants", { participants });
      }
    });

    socket.on("get-rtp-capabilities", (callback) => {
      callback(mediasoup.getRtpCapabilities());
    });

    socket.on("create-transport", async (_, callback) => {
      try {
        const transport = await mediasoup.createTransport();
        const params = {
          id: transport.id,
          iceParameters: transport.iceParameters,
          iceCandidates: transport.iceCandidates,
          dtlsParameters: transport.dtlsParameters,
        };

        const peer = peers.get(userId);
        if (peer) peer.transports.push(transport.id);
        callback(params);
      } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        callback({ error: errMsg });
      }
    });

    socket.on(
      "connect-transport",
      async ({ transportId, dtlsParameters }, callback) => {
        try {
          await mediasoup.connectTransport(transportId, dtlsParameters);
          callback("connected");
        } catch (error: unknown) {
          const errMsg = error instanceof Error ? error.message : String(error);
          callback({ error: errMsg });
        }
      }
    );

    socket.on(
      "produce",
      async ({ transportId, kind, rtpParameters, appData }, callback) => {
        try {
          const producer = await mediasoup.produce(
            transportId,
            kind,
            rtpParameters,
            appData
          );
          const peer = peers.get(userId);
          if (peer) peer.producers.push(producer.id);

          // Thông báo tới các peer khác trong room
          const peerRoom = peers.get(userId)?.roomId;
          if (peerRoom) {
            socket
              .to(peerRoom)
              .emit("new-producer", { producerId: producer.id, kind });
          } else {
            socket.broadcast.emit("new-producer", {
              producerId: producer.id,
              kind,
            });
          }
          callback({ id: producer.id });
        } catch (error: unknown) {
          const errMsg = error instanceof Error ? error.message : String(error);
          callback({ error: errMsg });
        }
      }
    );

    socket.on(
      "consume",
      async ({ transportId, producerId, rtpCapabilities }, callback) => {
        try {
          const consumer = await mediasoup.consume(
            transportId,
            producerId,
            rtpCapabilities
          );
          const peer = peers.get(userId);
          if (peer) peer.consumers.push(consumer.id);

          callback({
            id: consumer.id,
            producerId,
            kind: consumer.kind,
            rtpParameters: consumer.rtpParameters,
          });
        } catch (error: unknown) {
          const errMsg = error instanceof Error ? error.message : String(error);
          callback({ error: errMsg });
        }
      }
    );

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
}
