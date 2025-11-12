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
exports.getHistory = getHistory;
exports.createRoom = createRoom;
exports.sendMsg = sendMsg;
exports.attachFile = attachFile;
exports.editMsg = editMsg;
exports.deleteMsg = deleteMsg;
exports.searchMsg = searchMsg;
exports.typing = typing;
exports.read = read;
const chat_service_1 = require("../services/chat.service");
/**
 * Lấy lịch sử tin nhắn trong conversation
 */
function getHistory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { conversationId } = req.params;
            const messages = yield (0, chat_service_1.getMessages)(conversationId);
            return res.status(200).json(messages);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Tạo hoặc lấy phòng chat
 * - Chat 1-1: truyền { userAId, userBId }
 * - Chat nhóm: truyền { isGroup: true, name, memberIds }
 */
function createRoom(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userAId, userBId, isGroup, name, memberIds, createdBy } = req.body;
            let room;
            if (isGroup) {
                if (!name || !createdBy || !Array.isArray(memberIds))
                    return res.status(400).json({ message: "Thiếu dữ liệu nhóm" });
                room = yield (0, chat_service_1.createGroupConversation)(name, createdBy, memberIds);
            }
            else {
                if (!userAId || !userBId)
                    return res.status(400).json({ message: "Thiếu userAId hoặc userBId" });
                room = yield (0, chat_service_1.ensureRoom)(userAId, userBId);
            }
            return res.status(200).json(room);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Gửi tin nhắn
 */
function sendMsg(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conversationId = req.body.conversationId || req.body.conversation_id || req.query.conversationId;
            const message = req.body.message;
            const messageType = req.body.message_type || req.body.messageType || "text";
            const userId = req.body.senderId ||
                req.body.userId ||
                req.body.user_id ||
                req.headers["x-user-id"] ||
                req.query.userId;
            if (!conversationId || !userId || !message)
                return res
                    .status(400)
                    .json({ message: "Thiếu conversationId, senderId hoặc message" });
            const msg = yield (0, chat_service_1.sendMessage)(conversationId, userId, message, messageType);
            return res.status(200).json(msg);
        }
        catch (error) {
            console.error("sendMsg error:", error);
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Đính kèm file
 */
function attachFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { messageId, fileUrl, fileType } = req.body;
            if (!messageId || !fileUrl)
                return res.status(400).json({ message: 'Thiếu messageId hoặc fileUrl' });
            const att = yield (0, chat_service_1.addAttachment)(messageId, fileUrl, fileType || 'file');
            return res.status(200).json(att);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Sửa tin nhắn
 */
function editMsg(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        try {
            const { id } = req.params;
            // chuẩn hóa input
            const messageRaw = ((_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "").toString();
            const message = messageRaw.trim();
            const userId = ((_c = req.body) === null || _c === void 0 ? void 0 : _c.senderId) ||
                ((_d = req.body) === null || _d === void 0 ? void 0 : _d.userId) ||
                ((_e = req.body) === null || _e === void 0 ? void 0 : _e.user_id) ||
                req.headers["x-user-id"] ||
                req.query.userId;
            if (!id) {
                return res.status(400).json({ status: "fail", message: "Thiếu messageId (param :id)" });
            }
            if (!userId) {
                return res.status(400).json({ status: "fail", message: "Thiếu userId/senderId" });
            }
            if (!message) {
                return res.status(400).json({ status: "fail", message: "Thiếu hoặc rỗng trường message" });
            }
            const updated = yield (0, chat_service_1.editMessage)(id, userId, message);
            return res.status(200).json({ status: "success", data: updated });
        }
        catch (error) {
            console.error("editMsg error:", error);
            return res.status(500).json({ status: "error", message: error.message });
        }
    });
}
/**
 * Xoá mềm tin nhắn
 */
function deleteMsg(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const { id } = req.params;
            const userId = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.senderId) ||
                ((_b = req.body) === null || _b === void 0 ? void 0 : _b.userId) ||
                ((_c = req.body) === null || _c === void 0 ? void 0 : _c.user_id) ||
                req.headers["x-user-id"] ||
                req.query.userId;
            if (!id) {
                return res.status(400).json({ status: "fail", message: "Thiếu messageId (param :id)" });
            }
            if (!userId) {
                return res.status(400).json({ status: "fail", message: "Thiếu userId/senderId" });
            }
            const ok = yield (0, chat_service_1.deleteMessage)(id, userId);
            return res.status(200).json({ status: "success", data: ok });
        }
        catch (error) {
            console.error("deleteMsg error:", error);
            return res.status(500).json({ status: "error", message: error.message });
        }
    });
}
/**
 * Tìm kiếm tin nhắn
 */
function searchMsg(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { conversationId, q } = req.query;
            const rows = yield (0, chat_service_1.searchMessages)(conversationId, q || '', 50);
            return res.status(200).json(rows);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
/**
 * Typing & Read
 */
function typing(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { conversationId, isTyping } = req.body;
            const userId = req.headers['x-user-id'] || req.query.userId;
            yield (0, chat_service_1.setTyping)(conversationId, userId, !!isTyping);
            return res.status(200).json({ ok: true });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
function read(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { messageId } = req.body;
            const userId = req.headers['x-user-id'] || req.query.userId;
            yield (0, chat_service_1.setRead)(messageId, userId);
            return res.status(200).json({ ok: true });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
