const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String},
    desc: {type: String},
    category: {type: Types.ObjectId, ref: 'Category'},
    collection: {type: Types.ObjectId, ref: 'Collection', default: undefined},
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