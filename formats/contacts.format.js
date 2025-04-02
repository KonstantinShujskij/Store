function client(contacts) {
    return {
        id: contacts._id,
        title: contacts.title
    }
} 


module.exports = {
    client
}