import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

// /api/users je tam kde to volame
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)   // use middleware as first argument

export default router