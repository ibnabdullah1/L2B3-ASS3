import express from 'express'
import { auth } from '../../middleware/auth'
import { validateRequest } from '../../middleware/validateRequest'
import { USER_ROLE } from '../auth/auth.constant'
import { ReviewControllers } from './review.controller'
import { ReviewValidations } from './review.validation'

const router = express.Router()

router.post(
  '',
  auth(USER_ROLE.user),
  validateRequest(ReviewValidations.createReviewValidationSchema),
  ReviewControllers.createReview,
)

router.get('', ReviewControllers.getAllReviews)

export const ReviewRoutes = router
