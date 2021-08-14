import express from 'express';
import { sum } from 'react-clone'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(sum(6, 2))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})