import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// /api/users je tam kde to volame
router.route('/')
    .post(registerUser)
    .get(protect, admin, getUsers)  // middleware protect and admin
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)   // use middleware as first argument
    .put(protect, updateUserProfile)

export default router