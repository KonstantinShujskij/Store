function client(contacts) {
    return {
        id: contacts._id,
        title: contacts.title,
        link: contacts.link
    }
} 


module.exports = {
    client
}