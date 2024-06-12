import express from 'express'
import { auth } from '../../middleware/auth'
import { validateRequest } from '../../middleware/validateRequest'
import { USER_ROLE } from '../user/user.constant'
import { ServiceControllers } from './service.controller'
import { ServiceValidations } from './service.validation'

const router = express.Router()

router.post(
  '',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.ServiceValidationSchema),
  ServiceControllers.createService,
)

export const ServiceRoutes = router
