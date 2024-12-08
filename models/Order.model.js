const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    client: {type: Types.ObjectId, ref: 'Client', default: null},
    status: {type: String, default: 'CREATE'}, // CREATE/PAID/WORK/CONFIRM/REJECT
    delivery: {
        town: {type: String},
        type: {type: String, default: 'department'}, // department/address/terminal
        data: {type: String},
        note: {type: String}
    },
    contacts: {
        name: {type: String},
        surname: {type: String},
        email: {type: String},
        phone: {type: String},
        instagram: {type: String}
    },
    list: [{
        productId: {type: Types.ObjectId, ref: 'Product'},
        photo: {type: String},
        title: {type: String},
        price: {type: Number},
        color: {type: String},
        design: {type: String},
        material: {type: String},
        parametrs: {type: Object}
    }],
    price: {type: Number},
    count: {type: Number},
    
    createdAt: { type: Number },
    updatedAt: { type: Number }
}, {
    timestamps: { currentTime: () => Date.now() }
})

module.exports = model('Order', schema)