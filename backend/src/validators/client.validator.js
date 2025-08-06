const { check } = require('express-validator')
const errors = require('../const/errors')


const base = (Label, Err) => (label=Label) => check(label, Err.key)

const email = base('email', errors.incorectValue)
const password = base('password', errors.incorectValue) 
const name = base('data.name', errors.incorectValue) 
const surname = base('data.surname', errors.incorectValue) 
const phone = base('data.phone', errors.incorectValue) 
const instagram = base('data.instagram', errors.incorectValue) 
const town = base('data.delivery.town', errors.incorectValue) 
const type = base('data.delivery.type', errors.incorectValue) 
const data = base('data.delivery.data', errors.incorectValue) 


const emailChane = (base) => base.isEmail()
const passwordChane = (base) => base.isString().isLength({ min: 6, max: 24 })
const nameChane = (base) => base.isString().isLength({ min: 3, max: 16 })
const surnameChane = (base) => base.isString().isLength({ min: 3, max: 16 })
const instagramChane = (base) => base.isString().isLength({ min: 3, max: 16 })
const phoneChane = (base) => base.isMobilePhone()
const townChane = (base) => base.isString().isLength({ min: 3, max: 16 })
const typeChane = (base) => base.isIn(['department', 'address', 'terminal'])
const dataChane = (base) => base.isString().isLength({ min: 1, max: 36 })


module.exports = {
    email: emailChane(email()),
    password: passwordChane(password('newPassword')),
    login: [
        emailChane(email()), 
        passwordChane(password())
    ],
    signup: [
        emailChane(email()),  
        passwordChane(password()),
        nameChane(name()), 
        surnameChane(surname())
    ],
    info: [
        nameChane(name().optional()), 
        surnameChane(surname().optional()),
        phoneChane(phone().optional()),
        instagramChane(instagram().optional()), 
        townChane(town().optional()),
        typeChane(type().optional()),
        dataChane(data().optional())
    ]
}