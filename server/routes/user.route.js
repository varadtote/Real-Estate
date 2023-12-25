
import express from 'express'

const router = express.Router()

router.get('/test', (req, res, next) => {
    res.status(200).send({ message: "Hello World" })
})


export default router