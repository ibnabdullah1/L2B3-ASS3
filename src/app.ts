import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { auth } from './app/middleware/auth'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFound'
import { BookingControllers } from './app/modules/booking/booking.controller'
import { USER_ROLE } from './app/modules/user/user.constant'
import router from './app/routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

// Application Routes
app.use('/api', router)

app.use(
  '/api/my-bookings',
  auth(USER_ROLE.user),
  BookingControllers.getSingleBooking,
)

app.get('/', (req: Request, res: Response) => {
  res.send('Car Washing System backend server is running')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
