function client(client) {
    return {
        id: client._id,
        email: client.email,
        name: client.name,
        surname: client.surname,
        
        phone: client.phone,
        instagram: client.instagram,
        delivery: {
            town: client.delivery.town,
            type: client.delivery.type,
            data: client.delivery.data
        }
    }
} 


module.exports = {
    client
}