import { createUser, deleteUser, getUser, updateUser, getAllUser } from '../controllers/users.js'
import express from 'express'
const router = express.Router()


router.post('/create', createUser)

router.get('/get', getAllUser)

router.get('/get/:id', getUser)

router.delete("/delete/:id", deleteUser)

router.put('/update', updateUser)


export default router