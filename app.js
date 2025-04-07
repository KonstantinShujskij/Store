const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const config = require('config')
const path = require('path')


const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use('/api/category', require('./routes/caterory.routes'))
app.use('/api/collection', require('./routes/collection.routes'))
app.use('/api/contacts', require('./routes/contacts.routes'))

app.use('/api/products', require('./routes/products.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/client', require('./routes/client.routes'))
app.use('/api/admin', require('./routes/admin.routes'))
app.use('/api/also', require('./routes/also.routes'))



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
