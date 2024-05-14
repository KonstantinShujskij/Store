const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    login: [
        check('email', errors.incorectValue.key).isEmail(),
        check('password', errors.incorectValue.key).isString().isLength({ min: 6, max: 24 }),
        check('data.name', errors.incorectValue.key).isString().isLength({ min: 3, max: 16 }),
        check('data.surname', errors.incorectValue.key).isString().isLength({ min: 3, max: 16 }),
    ]
}