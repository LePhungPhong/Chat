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
exports.ensureRoom = ensureRoom;
exports.createGroupConversation = createGroupConversation;
exports.saveMessage = saveMessage;
exports.getMessages = getMessages;
exports.isUserInConversation = isUserInConversation;
exports.getUserConversations = getUserConversations;
exports.sendMessage = sendMessage;
exports.addAttachment = addAttachment;
exports.editMessage = editMessage;
exports.deleteMessage = deleteMessage;
exports.searchMessages = searchMessages;
exports.setTyping = setTyping;
exports.setRead = setRead;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Lấy hoặc tạo cuộc trò chuyện 1-1 giữa hai người
 */
function ensureRoom(userAId, userBId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Kiểm tra xem đã có cuộc trò chuyện giữa hai người chưa
        let conversation = yield prisma.conversation.findFirst({
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
            conversation = yield prisma.conversation.create({
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
    });
}
/**
 * Tạo nhóm chat mới
 */
function createGroupConversation(name, createdBy, memberIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const conversation = yield prisma.conversation.create({
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
    });
}
/**
 * Lưu tin nhắn mới
 */
function saveMessage(conversationId_1, senderId_1, message_1) {
    return __awaiter(this, arguments, void 0, function* (conversationId, senderId, message, messageType = "text") {
        return prisma.message.create({
            data: {
                conversation_id: conversationId,
                sender_id: senderId,
                message,
                message_type: messageType,
                status: prisma_1.MessageStatus.show,
            },
            include: {
                sender: true,
            },
        });
    });
}
/**
 * Lấy danh sách tin nhắn trong conversation
 */
function getMessages(conversationId_1) {
    return __awaiter(this, arguments, void 0, function* (conversationId, limit = 50) {
        return prisma.message.findMany({
            where: { conversation_id: conversationId },
            orderBy: { created_at: "asc" },
            take: limit,
            include: {
                sender: { select: { id: true, username: true, fullname: true, avatarUrl: true } },
            },
        });
    });
}
/**
 * Kiểm tra user có trong conversation không
 */
function isUserInConversation(conversationId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield prisma.conversationMember.count({
            where: { conversation_id: conversationId, user_id: userId },
        });
        return count > 0;
    });
}
/**
 * Lấy danh sách các conversation mà user tham gia
 */
function getUserConversations(userId) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
/**
 * Gửi tin nhắn
 */
function sendMessage(conversationId_1, senderId_1, message_1) {
    return __awaiter(this, arguments, void 0, function* (conversationId, senderId, message, messageType = prisma_1.MessageType.text) {
        if (!conversationId || !senderId || !(message === null || message === void 0 ? void 0 : message.trim())) {
            throw new Error('Thiếu conversationId, senderId hoặc message');
        }
        return yield prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
            // 1) Lưu message bằng quan hệ "connect"
            const msg = yield tx.message.create({
                data: {
                    message,
                    message_type: messageType,
                    status: prisma_1.MessageStatus.show,
                    conversation: { connect: { id: conversationId } },
                    sender: { connect: { id: senderId } },
                },
                include: { attachments: true, readReceipts: true },
            });
            // 2) Khởi tạo read receipts cho toàn bộ member
            const members = yield tx.conversationMember.findMany({
                where: { conversation_id: conversationId },
                select: { user_id: true },
            });
            // Người gửi: đánh dấu đã đọc ngay (read_at = now)
            // Người khác: để null
            const now = new Date();
            for (const m of members) {
                yield tx.readReceipt.upsert({
                    where: { message_id_user_id: { message_id: msg.id, user_id: m.user_id } },
                    create: {
                        message_id: msg.id,
                        user_id: m.user_id,
                        read_at: m.user_id === senderId ? now : null,
                    },
                    update: { /* giữ nguyên; không ghi đè read_at nếu đã có */},
                });
            }
            return msg;
        }));
    });
}
/**
 * Thêm đính kèm cho tin nhắn
 */
function addAttachment(messageId_1, fileUrl_1) {
    return __awaiter(this, arguments, void 0, function* (messageId, fileUrl, fileType = 'file') {
        return prisma.attachment.create({
            data: { message_id: messageId, file_url: fileUrl, file_type: fileType, created_at: new Date() }
        });
    });
}
/**
 * Sửa tin nhắn (chỉ chủ sở hữu)
 */
function editMessage(messageId, userId, newText) {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = yield prisma.message.findUnique({ where: { id: messageId } });
        if (!msg || msg.sender_id !== userId)
            throw new Error('not_allowed');
        return prisma.message.update({ where: { id: messageId }, data: { message: newText, updated_at: new Date(), status: prisma_1.MessageStatus.show } });
    });
}
/**
 * Xoá mềm tin nhắn
 */
function deleteMessage(messageId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = yield prisma.message.findUnique({ where: { id: messageId } });
        if (!msg || msg.sender_id !== userId)
            throw new Error('not_allowed');
        return prisma.message.update({ where: { id: messageId }, data: { status: prisma_1.MessageStatus.delete, updated_at: new Date() } });
    });
}
/**
 * Tìm kiếm tin nhắn theo text
 */
function searchMessages(conversationId_1, q_1) {
    return __awaiter(this, arguments, void 0, function* (conversationId, q, limit = 50) {
        return prisma.message.findMany({
            where: { conversation_id: conversationId, NOT: { status: 'delete' }, message: { contains: q, mode: 'insensitive' } },
            orderBy: { created_at: 'desc' },
            take: limit,
            include: { attachments: true }
        });
    });
}
/**
 * Đặt trạng thái đang nhập
 */
function setTyping(conversationId, userId, isTyping) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.typingStatus.upsert({
            where: { conversation_id_user_id: { conversation_id: conversationId, user_id: userId } },
            create: { conversation_id: conversationId, user_id: userId, is_typing: isTyping, updated_at: new Date() },
            update: { is_typing: isTyping, updated_at: new Date() }
        });
    });
}
/**
 * Đánh dấu đã đọc
 */
function setRead(messageId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.readReceipt.upsert({
            where: { message_id_user_id: { message_id: messageId, user_id: userId } },
            create: { message_id: messageId, user_id: userId, read_at: new Date() },
            update: { read_at: new Date() }
        });
    });
}
