const jwt = require('../utils/jwt.utils')

const errors = require('../const/errors')

const middleware = require('./middleware')

const Client = require('../controllers/Client.controller')
const Admin = require('../controllers/Admin.controller')


const auth = middleware((req, res) => {   
    const token = req.headers.authorization.split(' ')[1]
    if(!token) { return res.status(401).json(errors.notAuth.answer) }

    try { req.user = { _id: jwt.verifeLoginToken(token) } } 
    catch(error) { throw errors.notAuth }
})

const isUser = middleware(async (req, res) => { req.user = await Client.get(req.user._id) })
const isAdmin = middleware(async (req, res) => { req.user = await Admin.get(req.user._id) })


module.exports = { auth, isUser, isAdmin }
