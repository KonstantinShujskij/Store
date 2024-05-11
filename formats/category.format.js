function client(category) {
    return {
        id: category._id,
        title: category.title
    }
} 


module.exports = {
    client
}