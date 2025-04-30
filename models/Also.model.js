const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    productId: {type: Types.ObjectId, ref: 'Product'},
    photo: {type: String},
    title: {type: String},
    color: {type: String},
    design: {type: String},

    createdAt: { type: Number },
    updatedAt: { type: Number },
    selected: { type: Boolean }
})

module.exports = model('Also', schema)