import { Request, Response } from "express";
import * as service from "../services/chat.service";

// ==============================
// 1. Lấy danh sách cuộc trò chuyện (đã lọc những cái đã xóa)
// ==============================
export const getConversations = async (req: Request, res: Response) => {
  const userId = req.query.user_id as string;
  const data = await service.getUserConversations(userId);
  return res.json(data);
};

// ==============================
// 2. Lịch sử tin nhắn (CHỈ LẤY TIN TỪ LÚC "JOIN/RESET" GẦN NHẤT)
// ==============================
export const getHistory = async (req: Request, res: Response) => {
  const conversationId = req.params.conversationId;
  // Cần userId để biết mốc thời gian xóa chat của người này
  const userId =
    (req.headers["x-user-id"] as string) || (req.query.userId as string);

  const cursor =
    typeof req.query.cursor === "string" && req.query.cursor.length > 0
      ? req.query.cursor
      : undefined;

  const limit =
    typeof req.query.limit === "string" && req.query.limit.length > 0
      ? Number(req.query.limit)
      : 30;

  // Truyền userId vào service
  const data = await service.getMessages(conversationId, userId, cursor, limit);
  return res.json(data);
};

// ==============================
// Xóa đoạn chat (Soft Delete: Chỉ ẩn phía user này)
// ==============================
export const deleteConversation = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { conversationId } = req.params;

  // Hàm service đã đổi tên và logic
  const result = await service.softDeleteConversation(conversationId, userId);
  return res.json(result);
};

export const createRoom = async (req: Request, res: Response) => {
  const {
    userAId,
    userBId,
    isGroup,
    name,
    memberIds = [],
    createdBy,
  } = req.body;
  if (isGroup) {
    const members = Array.from(new Set([...memberIds, createdBy]));
    const group = await service.createGroupConversation(
      name,
      createdBy,
      members
    );
    return res.json(group);
  }
  const room = await service.ensureRoom(userAId, userBId);
  return res.json(room);
};
export const sendMsg = async (req: Request, res: Response) => {
  const { conversationId, message, messageType, senderId, replyToId } =
    req.body;
  const userId = senderId || (req.headers["x-user-id"] as string);
  const msg = await service.sendMessage(
    conversationId,
    String(userId),
    message,
    messageType,
    replyToId
  );
  return res.json(msg);
};
export const deleteMsg = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const msg = await service.deleteMessage(req.params.id, userId);
  return res.json(msg);
};
export const read = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { messageId } = req.body;
  await service.setRead(messageId, userId);
  return res.json({ ok: true });
};
export const readAll = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { conversationId } = req.params;
  await service.markAllAsRead(conversationId, userId);
  return res.json({ success: true });
};
export const attachFile = async (req: Request, res: Response) => {
  const { messageId, fileUrl, fileType } = req.body;
  const data = await service.addAttachment(messageId, fileUrl, fileType);
  return res.json(data);
};
export const editMsg = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { message } = req.body;
  const data = await service.editMessage(req.params.id, userId, message);
  return res.json(data);
};
export const searchMsg = async (req: Request, res: Response) => {
  const conversationId = String(req.query.conversationId);
  const q = String(req.query.q || "");
  const data = await service.searchMessages(conversationId, q);
  return res.json(data);
};
export const typing = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { conversationId, isTyping } = req.body;
  const data = await service.setTyping(conversationId, userId, isTyping);
  return res.json(data);
};
export const addMembers = async (req: Request, res: Response) => {
  const { conversationId, memberIds } = req.body;
  const data = await service.addMembers(conversationId, memberIds);
  return res.json(data);
};
export const removeMember = async (req: Request, res: Response) => {
  const { conversationId, userId } = req.body;
  const data = await service.removeMember(conversationId, userId);
  return res.json(data);
};
export const leaveGroup = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { conversationId } = req.body;
  const data = await service.leaveGroup(conversationId, userId);
  return res.json(data);
};
export const transferOwner = async (req: Request, res: Response) => {
  const currentUserId = req.headers["x-user-id"] as string;
  const { conversationId, newOwnerId } = req.body;
  const data = await service.transferOwnership(
    conversationId,
    currentUserId,
    newOwnerId
  );
  return res.json(data);
};
export const disbandGroup = async (req: Request, res: Response) => {
  const currentUserId = req.headers["x-user-id"] as string;
  const { conversationId } = req.body;
  const data = await service.disbandGroup(conversationId, currentUserId);
  return res.json(data);
};
export const renameGroup = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"] as string;
  const { conversationId, newName } = req.body;

  if (!conversationId || !newName) {
    return res.status(400).json({ message: "Thiếu conversationId hoặc tên nhóm mới." });
  }

  try {
    const data = await service.renameGroup(conversationId, userId, newName);
    return res.json({ success: true, newName: data.name });
  } catch (e: any) {
    if (e.message.startsWith("UNAUTHORIZED")) {
      return res.status(403).json({ message: "Bạn không có quyền đổi tên nhóm này." });
    }
    return res.status(500).json({ message: "Lỗi server khi đổi tên nhóm." });
  }
};