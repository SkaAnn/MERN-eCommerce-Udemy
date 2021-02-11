import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

// /api/products je tam kde to volame
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)   // use middleware as first argument

export default router