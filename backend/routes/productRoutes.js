import e from 'express'
import express from 'express'
const router = express.Router()
import { getProductById, getProducts } from '../controllers/productControllers.js'

// /api/products je tam kde to volame

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router