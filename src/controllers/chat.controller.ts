import { Request, Response } from "express";
import {
  getMessages,
  ensureRoom,
  createGroupConversation,
  sendMessage,
  addAttachment,
  editMessage,
  deleteMessage,
  searchMessages,
  setTyping,
  setRead
} from "../services/chat.service";

/**
 * Lấy lịch sử tin nhắn trong conversation
 */
export async function getHistory(req: Request, res: Response) {
  try {
    const { conversationId } = req.params;
    const messages = await getMessages(conversationId);
    return res.status(200).json(messages);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

/**
 * Tạo hoặc lấy phòng chat
 * - Chat 1-1: truyền { userAId, userBId }
 * - Chat nhóm: truyền { isGroup: true, name, memberIds }
 */
export async function createRoom(req: Request, res: Response) {
  try {
    const { userAId, userBId, isGroup, name, memberIds, createdBy } = req.body;

    let room;

    if (isGroup) {
      if (!name || !createdBy || !Array.isArray(memberIds))
        return res.status(400).json({ message: "Thiếu dữ liệu nhóm" });

      room = await createGroupConversation(name, createdBy, memberIds);
    } else {
      if (!userAId || !userBId)
        return res.status(400).json({ message: "Thiếu userAId hoặc userBId" });

      room = await ensureRoom(userAId, userBId);
    }

    return res.status(200).json(room);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

/**
 * Gửi tin nhắn
 */
export async function sendMsg(req: Request, res: Response) {
  try {
    const conversationId =
      req.body.conversationId || req.body.conversation_id || req.query.conversationId;
    const message = req.body.message;
    const messageType = req.body.message_type || req.body.messageType || "text";

    const userId =
      req.body.senderId ||
      req.body.userId ||
      req.body.user_id ||
      (req.headers["x-user-id"] as string) ||
      (req.query.userId as string);

    if (!conversationId || !userId || !message)
      return res
        .status(400)
        .json({ message: "Thiếu conversationId, senderId hoặc message" });

    const msg = await sendMessage(conversationId, userId, message, messageType);
    return res.status(200).json(msg);
  } catch (error: any) {
    console.error("sendMsg error:", error);
    return res.status(500).json({ message: error.message });
  }
}


/**
 * Đính kèm file
 */
export async function attachFile(req: Request, res: Response) {
  try {
    const { messageId, fileUrl, fileType } = req.body
    if (!messageId || !fileUrl) return res.status(400).json({ message: 'Thiếu messageId hoặc fileUrl' })
    const att = await addAttachment(messageId, fileUrl, fileType || 'file')
    return res.status(200).json(att)
  } catch (error: any) { return res.status(500).json({ message: error.message }) }
}

/**
 * Sửa tin nhắn
 */
export async function editMsg(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // chuẩn hóa input
    const messageRaw = (req.body?.message ?? "").toString();
    const message = messageRaw.trim();

    const userId =
      req.body?.senderId ||
      req.body?.userId ||
      req.body?.user_id ||
      (req.headers["x-user-id"] as string) ||
      (req.query.userId as string);

    if (!id) {
      return res.status(400).json({ status: "fail", message: "Thiếu messageId (param :id)" });
    }
    if (!userId) {
      return res.status(400).json({ status: "fail", message: "Thiếu userId/senderId" });
    }
    if (!message) {
      return res.status(400).json({ status: "fail", message: "Thiếu hoặc rỗng trường message" });
    }

    const updated = await editMessage(id, userId, message);
    return res.status(200).json({ status: "success", data: updated });
  } catch (error: any) {
    console.error("editMsg error:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
}

/**
 * Xoá mềm tin nhắn
 */
export async function deleteMsg(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const userId =
      req.body?.senderId ||
      req.body?.userId ||
      req.body?.user_id ||
      (req.headers["x-user-id"] as string) ||
      (req.query.userId as string);

    if (!id) {
      return res.status(400).json({ status: "fail", message: "Thiếu messageId (param :id)" });
    }
    if (!userId) {
      return res.status(400).json({ status: "fail", message: "Thiếu userId/senderId" });
    }

    const ok = await deleteMessage(id, userId);
    return res.status(200).json({ status: "success", data: ok });
  } catch (error: any) {
    console.error("deleteMsg error:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
}

/**
 * Tìm kiếm tin nhắn
 */
export async function searchMsg(req: Request, res: Response) {
  try {
    const { conversationId, q } = req.query as any
    const rows = await searchMessages(conversationId, q || '', 50)
    return res.status(200).json(rows)
  } catch (error: any) { return res.status(500).json({ message: error.message }) }
}

/**
 * Typing & Read
 */
export async function typing(req: Request, res: Response) {
  try {
    const { conversationId, isTyping } = req.body
    const userId = (req.headers['x-user-id'] as string) || (req.query.userId as string)
    await setTyping(conversationId, userId!, !!isTyping)
    return res.status(200).json({ ok: true })
  } catch (error: any) { return res.status(500).json({ message: error.message }) }
}

export async function read(req: Request, res: Response) {
  try {
    const { messageId } = req.body
    const userId = (req.headers['x-user-id'] as string) || (req.query.userId as string)
    await setRead(messageId, userId!)
    return res.status(200).json({ ok: true })
  } catch (error: any) { return res.status(500).json({ message: error.message }) }
}
