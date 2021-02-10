import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userControllers.js'

// /api/products je tam kde to volame
router.post('/login', authUser)

export default router