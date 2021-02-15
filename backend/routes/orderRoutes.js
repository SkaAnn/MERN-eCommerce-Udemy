import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

// /api/orders je tam kde to volame
router.route('/').post(protect, addOrderItems)

export default router