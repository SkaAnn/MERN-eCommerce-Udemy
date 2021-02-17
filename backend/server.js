import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json()) // accept json data in body

app.get('/', (req, res) => {
    res.send('Hello, API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

// make static folder /uploads, aby nebol pristupny zvonku
const __dirname = path.resolve()    //__dirname nemozno pouzivat s Module interpretaciou, iba s ESx
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))   


// Not routing sites
app.use(notFound)

// Error Middleware - overwrite default handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))