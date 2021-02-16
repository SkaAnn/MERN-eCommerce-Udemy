import express from 'express'
const router = express.Router()
import {
    authUser, registerUser, getUserProfile, updateUserProfile,
    getUsers, deleteUser, getUserById, updateUser
} from '../controllers/userController.js'
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
router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router