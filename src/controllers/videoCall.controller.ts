import { Request, Response } from "express";
import { PrismaClient } from '../generated/prisma';

import crypto from "crypto";

const prisma = new PrismaClient();

/**
 * Tạo phòng video call mới (1-1 hoặc nhóm)
 */
export async function createRoom(req: Request, res: Response) {
  try {
    const { hostId, isGroup, participantIds = [] } = req.body;

    if (!hostId) {
      return res.status(400).json({ message: "Thiếu hostId" });
    }


    const roomCode = crypto.randomBytes(4).toString("hex");


    const token = crypto.randomBytes(16).toString("hex");

    const room = await prisma.videoCallRoom.create({
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
  } catch (error: any) {
    console.error("❌ Lỗi tạo phòng gọi:", error);
    return res.status(500).json({ message: error.message });
  }
}

/**
 * Tham gia phòng video call
 */
export async function joinRoom(req: Request, res: Response) {
  try {
    const { roomCode, userId } = req.body;

    if (!roomCode || !userId) {
      return res.status(400).json({ message: "Thiếu roomCode hoặc userId" });
    }

    // Kiểm tra phòng có tồn tại không
    const room = await prisma.videoCallRoom.findUnique({
      where: { room_code: roomCode },
    });

    if (!room) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }

    // Tạo token mới cho user (không check participants vì schema không hỗ trợ)
    const token = crypto.randomBytes(16).toString("hex");

    // Trả về thông tin cho client signaling (socket)
    // Tracking participants có thể làm qua socket.join(roomCode) thay vì DB
    return res.status(200).json({
      message: "Tham gia phòng thành công",
      roomCode,
      token,
      userId,
    });
  } catch (error: any) {
    console.error("❌ Lỗi tham gia phòng:", error);
    return res.status(500).json({ message: error.message });
  }
}

/**
 * Lấy thông tin phòng (dùng để hiển thị trước khi join)
 */
export async function getRoomInfo(req: Request, res: Response) {
  try {
    const { roomCode } = req.params;

    const room = await prisma.videoCallRoom.findUnique({
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
      status: "active",  // Hardcode vì schema không có ended_at
    });
  } catch (error: any) {
    console.error("❌ Lỗi lấy thông tin phòng:", error);
    return res.status(500).json({ message: error.message });
  }
}