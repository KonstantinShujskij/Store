const {check} = require('express-validator')

const errors = require('../const/errors')


const email = (label='email') => check(label, errors.incorectValue.key).isEmail()
const password = (label='password') => check(label, errors.incorectValue.key).isString().isLength({ min: 6, max: 24 })
const name = (label='name') => check(label, errors.incorectValue.key).isString().isLength({ min: 3, max: 16 })
const surname = (label='surname') => check(label, errors.incorectValue.key).isString().isLength({ min: 3, max: 16 })


module.exports = {
    email: email(),
    password: password('newPassword'),
    login: [
        email(), 
        password()
    ],
    signup: [
        email(), 
        password(), 
        name('data.name'), 
        surname('data.surname')
    ]
}