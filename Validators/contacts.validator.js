const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectValue.key).isString().isLength({ min: 3, max: 28 }),
        check('link', errors.incorectValue.key).isString().isLength({ min: 3, max: 64 })
    ]
}