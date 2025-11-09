import { Router } from 'express'
import { createRoom, getRoomInfo, joinRoom } from '../controllers/videoCall.controller'
import { asyncHandler } from '../middlewares/asyncHandler'
const router = Router()
router.post('/create', asyncHandler(createRoom))
router.post('/join', asyncHandler(joinRoom))
router.get('/:roomCode', asyncHandler(getRoomInfo))
export default router