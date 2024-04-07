const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    client: {type: Types.ObjectId, ref: 'Client', default: null},
    delivery: {type: Object},
    contacts: {type: Object},
    products: [],
    price: {type: Number},
    status: {type: String, default: 'CREATE'},// CREATE/PAID/WORK/CONFIRM/REJECT
    
    createdAt: { type: Number },
    updatedAt: { type: Number }
}, {
    timestamps: { currentTime: () => Date.now() }
})

module.exports = model('Order', schema)