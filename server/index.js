
import express, { urlencoded } from 'express'
import connectDB from './dbConnection.js'

import userRouter from './routes/user.route.js'

const app = express()
const port = 4000

connectDB('mongodb://localhost:27017/realestate')

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Server Running')
})

app.use('/api/user', userRouter)

app.listen(port, () => console.log(`server running on ${port}`));
