const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String},
    password: {type: String},
    name: {type: String},
    surname: {type: String},
    phone: {type: String},
    town: {type: String},
    instagram: {type: String},
})

module.exports = model('Client', schema)