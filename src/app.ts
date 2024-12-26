import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFound'

import router from './app/routes'

const app: Application = express()

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
)

// Application Routes
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('backend server is running')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
