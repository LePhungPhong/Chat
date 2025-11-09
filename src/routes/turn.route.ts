import { Router } from 'express'
import { getTurnCredentials } from '../controllers/turn.controller'
import { asyncHandler } from '../middlewares/asyncHandler'

const router = Router()
router.get('/credentials', asyncHandler(getTurnCredentials))
export default router