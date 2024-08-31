import express from 'express'
import { auth } from '../../middleware/auth'
import { USER_ROLE } from '../auth/auth.constant'
import { UserControllers } from './user.controller'

const router = express.Router()

router.get('', auth(USER_ROLE.admin), UserControllers.getAllUsers)
router.get('/:email', UserControllers.getSingleUser)
router.put('', auth(USER_ROLE.admin), UserControllers.updateUserRole)
router.delete('/:id', auth(USER_ROLE.admin), UserControllers.deleteUser)

export const UserRoutes = router
