
function get(filterData, forse) {
    const filter = {...filterData, ...forse}
    let options = {}

    if(filter?.id) { options = {...options, _id: filter.id} }
    if(filter?.category) { options = {...options, category: filter.category} }
    if(filter?.collection) { options = {...options, collection: filter.collection} }

    return options
}

function client(filter) { return get(filter) }


module.exports = {
    client
}