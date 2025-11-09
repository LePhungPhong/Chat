import { Router } from 'express'
import { getHistory, createRoom, sendMsg, attachFile, editMsg, deleteMsg, searchMsg, typing, read } from '../controllers/chat.controller'
import { asyncHandler } from '../middlewares/asyncHandler'
const router = Router()

// Conversations
router.get('/:conversationId/history', asyncHandler(getHistory))
router.post('/create', asyncHandler(createRoom))

// Messages
router.post('/send', asyncHandler(sendMsg))
router.post('/attach', asyncHandler(attachFile))
router.post('/message/:id/edit', asyncHandler(editMsg))
router.post('/message/:id/delete', asyncHandler(deleteMsg))

// Search / typing / read
router.get('/search', asyncHandler(searchMsg))
router.post('/typing', asyncHandler(typing))
router.post('/read', asyncHandler(read))

export default router
