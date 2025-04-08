const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String}
    //link: {type: String}
})

module.exports = model('Contacts', schema)