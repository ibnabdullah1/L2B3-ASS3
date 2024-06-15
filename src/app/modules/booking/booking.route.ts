import express from 'express'
import { auth } from '../../middleware/auth'
import { validateRequest } from '../../middleware/validateRequest'
import { USER_ROLE } from '../user/user.constant'
import { BookingControllers } from './booking.controller'
import { BookingValidations } from './booking.validation'

const router = express.Router()

router.post(
  '',
  auth(USER_ROLE.user),
  validateRequest(BookingValidations.createBookingValidationSchema),
  BookingControllers.createBooking,
)

router.get('', auth(USER_ROLE.admin), BookingControllers.getAllBooking)

export const BookingRoutes = router
