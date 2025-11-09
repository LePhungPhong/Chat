import { PrismaClient, MessageType, MessageStatus } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Lấy hoặc tạo cuộc trò chuyện 1-1 giữa hai người
 */
export async function ensureRoom(userAId: string, userBId: string) {
  // Kiểm tra xem đã có cuộc trò chuyện giữa hai người chưa
  let conversation = await prisma.conversation.findFirst({
    where: {
      is_group: false,
      members: {
        every: {
          user_id: { in: [userAId, userBId] },
        },
      },
    },
    include: { members: true },
  });

  // Nếu chưa có → tạo mới
  if (!conversation) {
    conversation = await prisma.conversation.create({
      data: {
        is_group: false,
        created_by: userAId,
        members: {
          create: [
            { user_id: userAId },
            { user_id: userBId },
          ],
        },
      },
      include: { members: true },
    });
  }

  return conversation;
}

/**
 * Tạo nhóm chat mới
 */
export async function createGroupConversation(name: string, createdBy: string, memberIds: string[]) {
  const conversation = await prisma.conversation.create({
    data: {
      is_group: true,
      name,
      created_by: createdBy,
      members: {
        create: memberIds.map((id) => ({ user_id: id })),
      },
    },
    include: { members: true },
  });
  return conversation;
}

/**
 * Lưu tin nhắn mới
 */
export async function saveMessage(conversationId: string, senderId: string, message: string, messageType: MessageType = "text") {
  return prisma.message.create({
    data: {
      conversation_id: conversationId,
      sender_id: senderId,
      message,
      message_type: messageType,
      status: MessageStatus.show,
    },
    include: {
      sender: true,
    },
  });
}

/**
 * Lấy danh sách tin nhắn trong conversation
 */
export async function getMessages(conversationId: string, limit = 50) {
  return prisma.message.findMany({
    where: { conversation_id: conversationId },
    orderBy: { created_at: "asc" },
    take: limit,
    include: {
      sender: { select: { id: true, username: true, fullname: true, avatarUrl: true } },
    },
  });
}

/**
 * Kiểm tra user có trong conversation không
 */
export async function isUserInConversation(conversationId: string, userId: string) {
  const count = await prisma.conversationMember.count({
    where: { conversation_id: conversationId, user_id: userId },
  });
  return count > 0;
}

/**
 * Lấy danh sách các conversation mà user tham gia
 */
export async function getUserConversations(userId: string) {
  return prisma.conversation.findMany({
    where: { members: { some: { user_id: userId } } },
    include: {
      members: { include: { user: true } },
      messages: {
        orderBy: { created_at: "desc" },
        take: 1,
      },
    },
    orderBy: { created_at: "desc" },
  });
}

/**
 * Gửi tin nhắn
 */
export async function sendMessage(
  conversationId: string,
  senderId: string,
  message: string,
  messageType: MessageType = MessageType.text
) {
  if (!conversationId || !senderId || !message?.trim()) {
    throw new Error('Thiếu conversationId, senderId hoặc message')
  }

  return await prisma.$transaction(async (tx) => {
    // 1) Lưu message bằng quan hệ "connect"
    const msg = await tx.message.create({
      data: {
        message,
        message_type: messageType,
        status: MessageStatus.show,
        conversation: { connect: { id: conversationId } },
        sender: { connect: { id: senderId } },
      },
      include: { attachments: true, readReceipts: true },
    })

    // 2) Khởi tạo read receipts cho toàn bộ member
    const members = await tx.conversationMember.findMany({
      where: { conversation_id: conversationId },
      select: { user_id: true },
    })

    // Người gửi: đánh dấu đã đọc ngay (read_at = now)
    // Người khác: để null
    const now = new Date()
    for (const m of members) {
      await tx.readReceipt.upsert({
        where: { message_id_user_id: { message_id: msg.id, user_id: m.user_id } },
        create: {
          message_id: msg.id,
          user_id: m.user_id,
          read_at: m.user_id === senderId ? now : null,
        },
        update: { /* giữ nguyên; không ghi đè read_at nếu đã có */ },
      })
    }

    return msg
  })
}

/**
 * Thêm đính kèm cho tin nhắn
 */
export async function addAttachment(messageId: string, fileUrl: string, fileType: any = 'file') {
  return prisma.attachment.create({
    data: { message_id: messageId, file_url: fileUrl, file_type: fileType, created_at: new Date() }
  })
}

/**
 * Sửa tin nhắn (chỉ chủ sở hữu)
 */
export async function editMessage(messageId: string, userId: string, newText: string) {
  const msg = await prisma.message.findUnique({ where: { id: messageId } })
  if (!msg || msg.sender_id !== userId) throw new Error('not_allowed')
  return prisma.message.update({ where: { id: messageId }, data: { message: newText, updated_at: new Date(), status: MessageStatus.show } })
}

/**
 * Xoá mềm tin nhắn
 */
export async function deleteMessage(messageId: string, userId: string) {
  const msg = await prisma.message.findUnique({ where: { id: messageId } })
  if (!msg || msg.sender_id !== userId) throw new Error('not_allowed')
  return prisma.message.update({ where: { id: messageId }, data: { status: MessageStatus.delete, updated_at: new Date() } })
}

/**
 * Tìm kiếm tin nhắn theo text
 */
export async function searchMessages(conversationId: string, q: string, limit = 50) {
  return prisma.message.findMany({
    where: { conversation_id: conversationId, NOT: { status: 'delete' }, message: { contains: q, mode: 'insensitive' } },
    orderBy: { created_at: 'desc' },
    take: limit,
    include: { attachments: true }
  })
}

/**
 * Đặt trạng thái đang nhập
 */
export async function setTyping(conversationId: string, userId: string, isTyping: boolean) {
  await prisma.typingStatus.upsert({
    where: { conversation_id_user_id: { conversation_id: conversationId, user_id: userId } },
    create: { conversation_id: conversationId, user_id: userId, is_typing: isTyping, updated_at: new Date() },
    update: { is_typing: isTyping, updated_at: new Date() }
  })
}

/**
 * Đánh dấu đã đọc
 */
export async function setRead(messageId: string, userId: string) {
  await prisma.readReceipt.upsert({
    where: { message_id_user_id: { message_id: messageId, user_id: userId } },
    create: { message_id: messageId, user_id: userId, read_at: new Date() },
    update: { read_at: new Date() }
  })
}
