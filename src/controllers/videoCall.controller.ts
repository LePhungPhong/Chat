import { Request, Response } from "express";
import * as service from "../services/videocall.service";

// ==================================================
// 1. INITIATE CALL
// ==================================================
export async function initiateCall(req: Request, res: Response) {
  try {
    const { conversationId, hostId } = req.body;
    const userId = (req.headers["x-user-id"] as string) || hostId;

    if (!conversationId) return res.status(400).json({ message: "Thiếu conversationId" });

    const data = await service.initiateCallService(conversationId, hostId, userId);
    return res.status(200).json(data);

  } catch (error: any) {
    console.error("Initiate Call Error:", error);
    if (error.message.startsWith("FORBIDDEN")) return res.status(403).json({ message: error.message });
    return res.status(500).json({ message: "Lỗi server" });
  }
}

// ==================================================
// 2. JOIN CALL
// ==================================================
export async function joinCall(req: Request, res: Response) {
  try {
    const { roomCode } = req.body;
    const userId = req.headers["x-user-id"] as string;

    const data = await service.joinCallService(roomCode, userId);
    return res.status(200).json(data);

  } catch (error: any) {
    if (error.message.startsWith("NOT_FOUND")) return res.status(404).json({ message: error.message });
    if (error.message.startsWith("FORBIDDEN")) return res.status(403).json({ message: error.message });
    return res.status(500).json({ message: "Lỗi server" });
  }
}

// ==================================================
// 3. GET ROOM INFO
// ==================================================
export async function getRoomInfo(req: Request, res: Response) {
  try {
    const { roomCode } = req.params;
    const data = await service.getRoomInfoService(roomCode);
    return res.status(200).json(data);
  } catch (error: any) {
    if (error.message.startsWith("NOT_FOUND")) return res.status(404).json({ message: error.message });
    return res.status(500).json({ message: "Internal Error" });
  }
}