import express from 'express'
const router = express.Router()
import { getProductById, getProducts } from '../controllers/productController.js'

// /api/products je tam kde to volame
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router