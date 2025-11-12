"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = require("../controllers/chat.controller");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const router = (0, express_1.Router)();
// Conversations
router.get('/:conversationId/history', (0, asyncHandler_1.asyncHandler)(chat_controller_1.getHistory));
router.post('/create', (0, asyncHandler_1.asyncHandler)(chat_controller_1.createRoom));
// Messages
router.post('/send', (0, asyncHandler_1.asyncHandler)(chat_controller_1.sendMsg));
router.post('/attach', (0, asyncHandler_1.asyncHandler)(chat_controller_1.attachFile));
router.post('/message/:id/edit', (0, asyncHandler_1.asyncHandler)(chat_controller_1.editMsg));
router.post('/message/:id/delete', (0, asyncHandler_1.asyncHandler)(chat_controller_1.deleteMsg));
// Search / typing / read
router.get('/search', (0, asyncHandler_1.asyncHandler)(chat_controller_1.searchMsg));
router.post('/typing', (0, asyncHandler_1.asyncHandler)(chat_controller_1.typing));
router.post('/read', (0, asyncHandler_1.asyncHandler)(chat_controller_1.read));
exports.default = router;
