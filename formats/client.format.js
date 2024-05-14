function client(client) {
    return {
        id: client._id,
        email: client.email
    }
} 


module.exports = {
    client
}