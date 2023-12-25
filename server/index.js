
import express from 'express'
import connectDB from './dbConnection'

const app = express()
const port = 4000

connectDB('mongodb://localhost:27017/realestate')

app.get('/', (req, res) => {
    return res.send('Server Running')
})

app.listen(port, () => console.log(`server running on ${port}`));
