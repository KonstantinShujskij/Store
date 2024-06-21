function client(product) {
    return {
        id: product._id,
        title: product.title,
        desc: product.desc,
        price: product.price,
        category: product.category,
        categoryTitle: product.categoryTitle,
        collection: product.collection,
        collectionTitle: product.collectionTitle,

        photos: product.photos,
        photo: product.photos.length? product.photos[0] : null,
        
        createdAt: product.createdAt
    }
} 

function admin(product) {
    return {
        id: product._id,
        title: product.title,
        desc: product.desc,
        price: product.price,
        category: product.category,
        categoryTitle: product.categoryTitle,
        collection: product.collection,
        collectionTitle: product.collectionTitle,

        photos: product.photos,
        photo: product.photos.length? product.photos[0] : null,
    
        createdAt: product.createdAt
    }
} 


module.exports = {
    client,
    admin
}