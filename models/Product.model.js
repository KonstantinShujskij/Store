const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String},
    desc: {type: String},
    category: {type: String, default: ''},
    collection: {type: String, default: ''},
    price: {type: Number, default: 0},
    parametrs: [
        {
            title: {type: String},
            min: {type: Number},
            max: {type: Number}
        }
    ],
    colorSchema: [
        {
            main: {type: String},
            styles: [ {type: String} ]
        }
    ]
})

module.exports = model('Product', schema)