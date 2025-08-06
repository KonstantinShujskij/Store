const jwt = require('jsonwebtoken')
const config = require('config')

const errors = require('../const/errors')

const orderToken = (id) => { 
    const secret = config.get('jwtSecret')

    return jwt.sign({ id }, secret, { expiresIn: '3d' }) 
}

const verifeOrderToken = (token) => {
    try {
        const secret = config.get('jwtSecret')
        const decoded = jwt.verify(token, secret)

        return decoded?.id
    }
    catch(error) { 
        return null
    }
}


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
    verifeLoginToken,
    orderToken,
    verifeOrderToken
}
