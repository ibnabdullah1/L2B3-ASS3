import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { BookingRoutes } from '../modules/booking/booking.route'
import { PaymentRoutes } from '../modules/payment/payment.route'
import { ReviewRoutes } from '../modules/review/review.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { SlotRoutes } from '../modules/slot/slot.route'
import { UserRoutes } from '../modules/user/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },

  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '',
    route: PaymentRoutes,
  },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
