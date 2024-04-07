const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String},
    password: {type: String}
})

module.exports = model('Client', schema)