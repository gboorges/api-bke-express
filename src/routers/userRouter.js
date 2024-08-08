import express from 'express'
import userList from '../controllers/user/userList.js'
import userById from '../controllers/user/userById.js'
import createUser from '../controllers/user/createUser.js'
import editUser from '../controllers/user/editUser.js'
import editNameUser from '../controllers/user/editNameUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', userById) // end-point que traz apenas 1 usuário
router.get('/list', userList) // end-point que traz todos os usuários
router.post('/', createUser) // end-point que cria um novo usuário
router.put('/', editUser) // end-point que edita várias informações de um usuário
router.patch('/', editNameUser) // end-point que edita o nome do usuário
router.delete('/', deleteUser) // end-point que remove um usuário

export default router