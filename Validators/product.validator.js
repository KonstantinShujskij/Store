const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectValue.key).isString().isLength({ min: 3, max: 16 }),
        check('desc', errors.incorectValue.key).isString().isLength({ min: 10, max: 1600 }),
        check('price', errors.incorectValue.key).isFloat({min: 0, max: 10000000})
    ]
}