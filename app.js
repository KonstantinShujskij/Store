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

app.use('/api/products', require('./routes/products.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/client', require('./routes/client.routes'))
app.use('/api/admin', require('./routes/admin.routes'))


const PORT = config.get('port')
const SLL_PORT = config.get('sslPort')


if(process.env.NODE_ENV === 'production') {
    // const privateKey = fs.readFileSync('/etc/letsencrypt/live/ncpay.tech/privkey.pem', 'utf8');
    // const certificate = fs.readFileSync('/etc/letsencrypt/live/ncpay.tech/cert.pem', 'utf8');
    // const ca = fs.readFileSync('/etc/letsencrypt/live/ncpay.tech/chain.pem', 'utf8');

    // const credentials = { key: privateKey, cert: certificate, ca: ca }

    const httpServer = http.createServer(app)
    // const httpsServer = https.createServer(credentials, app)
    
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) })


    async function start() {
        try {
            const mongoUri = config.get('mongoUri')
            await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        
            httpServer.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
            // httpsServer.listen(SLL_PORT, () => console.log(`App has been started with ssl on port ${SLL_PORT}`))
        } catch(error) {
            console.log("Server error: ", error.message)
            process.exit(1)
        }
    }
    
    start()
}
else {
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
}


