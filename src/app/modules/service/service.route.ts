import express from 'express'
import { auth } from '../../middleware/auth'
import { validateRequest } from '../../middleware/validateRequest'
import { USER_ROLE } from '../auth/auth.constant'
import { ServiceControllers } from './service.controller'
import { ServiceValidations } from './service.validation'

const router = express.Router()

router.post(
  '',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.createServiceValidationSchema),
  ServiceControllers.createService,
)
router.post(
  '/slots',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.slotValidationSchema),
  ServiceControllers.createSlot,
)
router.put('/service-review/:id', ServiceControllers.addReviewInThisService)
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.updateServiceValidationSchema),
  ServiceControllers.updateService,
)
router.delete('/:id', auth(USER_ROLE.admin), ServiceControllers.deleteService)

router.get('', ServiceControllers.getAllService)
router.get('/:id', ServiceControllers.getSingleService)

export const ServiceRoutes = router
