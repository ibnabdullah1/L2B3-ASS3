import express from 'express'
import { validateRequest } from '../../middleware/validateRequest'
import { UserControllers } from './user.controller'
import { UserValidations } from './user.validation'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidations.signUpValidationSchema),
  UserControllers.createUser,
)

router.post(
  '/login',
  validateRequest(UserValidations.loginValidationSchema),
  UserControllers.loginUser,
)

export const UserRoutes = router
