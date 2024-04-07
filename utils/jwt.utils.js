const jwt = require('jsonwebtoken')
const config = require('config')

const errors = require('../consts/errors')


const loginToken = (_id, expiresIn='24h') => { 
    const secret = config.get('jwtSecret')

    return jwt.sign({ _id }, secret, { expiresIn }) 
}

const verifeLoginToken = (token) => {
    try {
        const secret = config.get('jwtSecret')
        const decoded = jwt.verify(token, secret)

        const id = decoded?._id
        if(!id) { throw errors.notFind }

        return id
    }
    catch(error) { throw errors.notFind }
}

module.exports = { 
    loginToken,
    verifeLoginToken
}
