import { Router } from 'express';
import {
    getHistory,
    createRoom,
    sendMsg,
    attachFile,
    editMsg,
    deleteMsg,
    searchMsg,
    typing,
    read,
    readAll,
    getConversations,
    addMembers,
    removeMember,
    leaveGroup,
    transferOwner,
    disbandGroup,
    deleteConversation,
    renameGroup
} from '../controllers/chat.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

router.get('/conversations', asyncHandler(getConversations));
router.get('/:conversationId/history', asyncHandler(getHistory));
router.post('/create', asyncHandler(createRoom));
router.post('/send', asyncHandler(sendMsg));
router.post('/attach', asyncHandler(attachFile));
router.post('/message/:id/edit', asyncHandler(editMsg));
router.post('/message/:id/delete', asyncHandler(deleteMsg));

// Group
router.post('/group/add', asyncHandler(addMembers));
router.post('/group/remove', asyncHandler(removeMember));
router.post('/group/leave', asyncHandler(leaveGroup));

// Misc
router.get('/search', asyncHandler(searchMsg));
router.post('/typing', asyncHandler(typing));
router.post('/read', asyncHandler(read));
router.post('/:conversationId/read-all', asyncHandler(readAll));
router.post('/group/transfer', asyncHandler(transferOwner));
router.post('/group/disband', asyncHandler(disbandGroup));
router.post('/:conversationId/delete', asyncHandler(deleteConversation));
router.post('/group/rename', asyncHandler(renameGroup));
export default router;