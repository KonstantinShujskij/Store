function client(client) {
    return {
        id: client._id,
        email: client.email,
        name: client.name,
        surname: client.surname,
        
        phone: client.phone,
        instagram: client.instagram,
        town: client.town,
    }
} 


module.exports = {
    client
}