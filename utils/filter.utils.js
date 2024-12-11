const { Types } = require("mongoose")
const errors = require("../const/errors")

function get(filterData, forse) {
    const filter = {...filterData, ...forse}
    let options = {}

    if(filter?.id) { options = {...options, _id: filter.id} }
    if(filter?.category) { options = {...options, category: new Types.ObjectId(filter.category)} }
    if(filter?.collection) { options = {...options, collection: new Types.ObjectId(filter.collection)} }

    return options
}

function client(filter) { return get(filter) }

function order(filter) {
    try {
        let options = {}

        if(filter?.id) { options = {...options, _id: new Types.ObjectId(filter.id)} }
        if(filter?.phone) { options = {...options, "contacts.phone": filter.phone} }
        if(filter?.status && ['CREATE', 'PAID', 'WORK', 'SEND', 'DONE', 'CANCEL'].includes(filter?.status)) { 
            options = {...options, status: filter.status} 
        }
        
        return options
    }
    catch(err) { return {} }
}

module.exports = {
    client,
    order
}