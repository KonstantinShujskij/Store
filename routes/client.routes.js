const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const { auth, isUser } = require('../middleware/auth.middleware')
const Validator = require('../Validators/client.validator')

const jwt = require('../utils/jwt.utils')

const Client = require('../controllers/Client.controller')
const Format = require('../formats/client.format')


const router = Router()


router.post('/signup', Validator.signup, trappiner(async (req, res) => {
    const { email, password, data } = req.body

    const user = await Client.signup(email, password, data)
    const token = jwt.loginToken(user._id)

    res.status(201).json(token)
})) 

router.post('/login', Validator.login, trappiner(async (req, res) => {
    const { email, password } = req.body

    const user = await Client.login(email, password)
    const token = jwt.loginToken(user._id)

    res.status(200).json(token)
})) 

router.post('/load', auth, isUser, trappiner(async (req, res) => {
    res.status(200).json(Format.client(req.user))
})) 

router.post('/set-email', auth, isUser, Validator.email, trappiner(async (req, res) => {
    const { email } = req.body

    await Client.changeEmail(req.user._id, email)

    res.status(200).json(true)
})) 

router.post('/set-password', auth, isUser, Validator.password, trappiner(async (req, res) => {
    const { password, newPassword } = req.body

    await Client.changePassword(req.user._id, password, newPassword)

    res.status(200).json(true)
})) 

router.post('/set-info', auth, isUser, Validator.info, trappiner(async (req, res) => {
    const { data } = req.body

    await Client.changeInfo(req.user._id, data)

    res.status(200).json(true)
})) 

module.exports = router