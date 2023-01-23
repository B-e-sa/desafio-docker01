const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const corsOptions = {
    orgim: '/',
    optionsSuccessStatus: 200
}

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.get('/', (_req, res) => res.status(200).send({ Hello: "world!" }))

app.post('/', (req, res) => {

    try { res.status(200).send(req.body) }

    catch (e) { res.sendStatus(500) }

})

