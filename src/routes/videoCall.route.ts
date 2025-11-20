import { Router } from 'express';
import {
    initiateCall, // <--- Import đúng tên hàm trong controller của bạn
    joinCall,
    getRoomInfo
} from '../controllers/videoCall.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

// POST /api/v1/video/create -> Gọi hàm initiateCall
router.post('/create', asyncHandler(initiateCall));

// POST /api/v1/video/join -> Gọi hàm joinCall
router.post('/join', asyncHandler(joinCall));

// GET /api/v1/video/:roomCode -> Gọi hàm getRoomInfo
router.get('/:roomCode', asyncHandler(getRoomInfo));

export default router;