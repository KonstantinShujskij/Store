const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectValue.key).isString().isLength({ min: 0, max: 5 }),
    ]
}