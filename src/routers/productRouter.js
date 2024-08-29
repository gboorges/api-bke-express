import express from 'express'
import createProduct from '../controllers/product/createProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import editPhotoProduct from '../controllers/product/editPhotoProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import listProduct from '../controllers/product/listProduct.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/list', listProduct)
router.put('/:id', editProduct)
router.patch('/:id', editPhotoProduct)
router.delete('/:id', deleteProduct)

export default router