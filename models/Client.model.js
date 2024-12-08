const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String},
    password: {type: String},
    name: {type: String},
    surname: {type: String},
    phone: {type: String},
    instagram: {type: String},
    delivery: {
        town: {type: String},
        type: {type: String, default: 'department'},
        data: {type: String}
    }
})

module.exports = model('Client', schema)