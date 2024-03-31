const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const config = require('config')
const path = require('path')


const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/store', express.static(path.join(__dirname, 'store')))

app.use('/api/products', require('./routes/products.routes'))


const PORT = config.get('port')
const SLL_PORT = config.get('sslPort')


async function start() {
    try {
        const mongoUri = config.get('mongoUri')
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch(error) {
        console.log("Server error: ", error.message)
        process.exit(1)
    }
}

start()