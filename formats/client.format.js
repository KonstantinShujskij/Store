function client(client) {
    return {
        id: client._id,
        email: client.email,
        name: client.name,
        surname: client.surname
    }
} 


module.exports = {
    client
}