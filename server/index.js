
import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
    return res.send('Server Running')
})

app.listen(port, () => console.log(`server running on ${port}`));
