const express = require('express')
const cors = require('cors')
const path = require('path')

const config = require('./config')
const connectDB = require('./config/database')


const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/static', express.static(path.join(__dirname, '../static')))

app.use('/api/v1/category', require('./routes/v1/category.routes'))
app.use('/api/v1/collection', require('./routes/v1/collection.routes'))
app.use('/api/v1/contacts', require('./routes/v1/contacts.routes'))

app.use('/api/v1/products', require('./routes/v1/products.routes'))
app.use('/api/v1/orders', require('./routes/v1/orders.routes'))
app.use('/api/v1/client', require('./routes/v1/client.routes'))
app.use('/api/v1/admin', require('./routes/v1/admin.routes'))
app.use('/api/v1/also', require('./routes/v1/also.routes'))



const PORT = config.port || 3001

async function start() {
    try {
        // Connect to database
        await connectDB()

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch(error) {
        console.log("Server error: ", error.message)
        process.exit(1)
    }
}

start()

module.exports = app
