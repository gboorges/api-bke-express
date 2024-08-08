import express from 'express'
import createProduct from '../controllers/product/createProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import editNameProduct from '../controllers/product/editNameProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import productById from '../controllers/product/productById.js'
import productList from '../controllers/product/productList.js'

const router = express.Router()

router.get('/', productById)
router.get('/list', productList)
router.post('/', createProduct)
router.put('/', editProduct)
router.patch('/', editNameProduct)
router.delete('/', deleteProduct)

export default router