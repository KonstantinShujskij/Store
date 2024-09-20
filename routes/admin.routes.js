const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const jwt = require('../utils/jwt.utils')

const Admin = require('../controllers/Admin.controller')


const router = Router()

// router.post('/signup', trappiner(async (req, res) => {
//     const { email, password } = req.body

//     const admin = await Admin.signup(email, password)
//     const token = jwt.loginToken(admin._id)

//     res.status(201).json(token)
// })) 

router.post('/login', trappiner(async (req, res) => {
    const { email, password } = req.body

    const admin = await Admin.login(email, password)
    const token = jwt.loginToken(admin._id)

    res.status(200).json(token)
})) 

module.exports = router