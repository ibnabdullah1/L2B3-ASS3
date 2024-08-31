import express from 'express'
import { validateRequest } from '../../middleware/validateRequest'
import { AuthControllers } from './auth.controller'
import { UserValidations } from './auth.validation'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidations.signUpValidationSchema),
  AuthControllers.createUser,
)

router.post(
  '/login',
  validateRequest(UserValidations.loginValidationSchema),
  AuthControllers.loginUser,
)

export const AuthRoutes = router
