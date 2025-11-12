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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = createRoom;
exports.joinRoom = joinRoom;
exports.getRoomInfo = getRoomInfo;
const prisma_1 = require("../generated/prisma");
const crypto_1 = __importDefault(require("crypto"));
const prisma = new prisma_1.PrismaClient();
/**
 * Tạo phòng video call mới (1-1 hoặc nhóm)
 */
function createRoom(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { hostId, isGroup, participantIds = [] } = req.body;
            if (!hostId) {
                return res.status(400).json({ message: "Thiếu hostId" });
            }
            const roomCode = crypto_1.default.randomBytes(4).toString("hex");
            const token = crypto_1.default.randomBytes(16).toString("hex");
            const room = yield prisma.videoCallRoom.create({
                data: {
                    room_code: roomCode,
                    token,
                    host_id: hostId,
                },
            });
            return res.status(201).json({
                message: "Tạo phòng gọi video thành công",
                room,
            });
        }
        catch (error) {
            console.error("❌ Lỗi tạo phòng gọi:", error);
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Tham gia phòng video call
 */
function joinRoom(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { roomCode, userId } = req.body;
            if (!roomCode || !userId) {
                return res.status(400).json({ message: "Thiếu roomCode hoặc userId" });
            }
            // Kiểm tra phòng có tồn tại không
            const room = yield prisma.videoCallRoom.findUnique({
                where: { room_code: roomCode },
            });
            if (!room) {
                return res.status(404).json({ message: "Phòng không tồn tại" });
            }
            // Tạo token mới cho user (không check participants vì schema không hỗ trợ)
            const token = crypto_1.default.randomBytes(16).toString("hex");
            // Trả về thông tin cho client signaling (socket)
            // Tracking participants có thể làm qua socket.join(roomCode) thay vì DB
            return res.status(200).json({
                message: "Tham gia phòng thành công",
                roomCode,
                token,
                userId,
            });
        }
        catch (error) {
            console.error("❌ Lỗi tham gia phòng:", error);
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Lấy thông tin phòng (dùng để hiển thị trước khi join)
 */
function getRoomInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { roomCode } = req.params;
            const room = yield prisma.videoCallRoom.findUnique({
                where: { room_code: roomCode },
                include: { host: true },
            });
            if (!room) {
                return res.status(404).json({ message: "Phòng không tồn tại" });
            }
            return res.status(200).json({
                roomCode: room.room_code,
                host: room.host,
                created_at: room.created_at,
                status: "active", // Hardcode vì schema không có ended_at
            });
        }
        catch (error) {
            console.error("❌ Lỗi lấy thông tin phòng:", error);
            return res.status(500).json({ message: error.message });
        }
    });
}
