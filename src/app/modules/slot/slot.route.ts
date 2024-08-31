import express from 'express'
import { auth } from '../../middleware/auth'
import { USER_ROLE } from '../auth/auth.constant'
import { SlotControllers } from './slot.controller'

const router = express.Router()
router.get('/availability', SlotControllers.getAvailableAllSlot)
router.get('', auth(USER_ROLE.admin), SlotControllers.getAllSlots)
router.delete('/:id', auth(USER_ROLE.admin), SlotControllers.DeleteSlot)

export const SlotRoutes = router
