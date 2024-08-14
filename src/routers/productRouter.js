import express from 'express'
import createProduct from '../controllers/product/createProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import editPhotoProduct from '../controllers/product/editPhotoProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import listProduct from '../controllers/product/listProduct.js'

const router = express.Router()

router.get('/', listProduct)
router.post('/', createProduct)
router.put('/', editProduct)
router.patch('/', editPhotoProduct)
router.delete('/', deleteProduct)

export default router