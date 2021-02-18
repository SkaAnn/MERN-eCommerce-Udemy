import express from 'express'
const router = express.Router()
import { getProductById, getProducts, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// /api/products je tam kde to volame
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)
router.get('/top', getTopProducts)  // POZOR NA ZORADENIE!!!
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)


export default router