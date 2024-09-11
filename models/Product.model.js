const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String},
    desc: {type: String},
    price: {type: Number, default: 0},
    category: {type: Types.ObjectId, ref: 'Category', default: undefined},
    categoryTitle: {type: String, default: ''},
    collection: {type: Types.ObjectId, ref: 'Collection', default: undefined},
    collectionTitle: {type: String, default: ''},
    photos: [{type: String}],
    prop: [{
        id: {type: String},
        type: {type: String, default: 'range'},
        title: {type: String},
        min: {type: Number, default: 0},
        max: {type: Number, default: 0},
        list: [{type: String}]
    }],
    materials: [{
        id: {type: String},
        title: {type: String},
    }],
    colors: [{
        title: {type: String},
        src: {type: String},
        design: [{
            title: {type: String},
            src: {type: String},
        }]
    }],
    createdAt: { type: Number },
    updatedAt: { type: Number }
}, {
    timestamps: { currentTime: () => Date.now() }
})

module.exports = model('Product', schema)