const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const { auth, isUser } = require('../middleware/auth.middleware')
const { login } = require('../Validators/client.validator')

const jwt = require('../utils/jwt.utils')

const Client = require('../controllers/Client.controller')
const Format = require('../formats/client.format')


const router = Router()


router.post('/signup', login, trappiner(async (req, res) => {
    const { email, password } = req.body

    const user = await Client.signup(email, password)
    const token = jwt.loginToken(user._id)

    res.status(201).json(token)
})) 

router.post('/login', login, trappiner(async (req, res) => {
    const { email, password } = req.body

    const user = await Client.login(email, password)
    const token = jwt.loginToken(user._id)

    res.status(200).json(token)
})) 

router.post('/load', auth, isUser, trappiner(async (req, res) => {
    res.status(200).json(Format.client(req.user))
})) 

module.exports = router