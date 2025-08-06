const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    productId: {type: String, default: null },
    photo: {type: String},
    title: {type: String},
    color: {type: String},
    design: {type: String},

    createdAt: { type: Number },
    updatedAt: { type: Number }
}, {
    timestamps: { currentTime: () => Date.now() }
})

module.exports = model('Also', schema)