function client(product) {
    return {
        id: product._id,
        soldOut: product.soldOut,
        title: product.title,
        desc: product.desc,
        price: product.price,
        category: product.category,
        categoryTitle: product.categoryTitle,
        collection: product.collection,
        collectionTitle: product.collectionTitle,

        photos: product.photos,
        photo: product.photos.length? product.photos[0] : null,

        prop: product.prop,
        materials: product.materials,
        
        createdAt: product.createdAt
    }
} 

function admin(product) {
    return {
        id: product._id,
        soldOut: product.soldOut,
        title: product.title,
        desc: product.desc,
        price: product.price,
        category: product.category,
        categoryTitle: product.categoryTitle,
        collection: product.collection,
        collectionTitle: product.collectionTitle,

        photos: product.photos,
        photo: product.photos.length? product.photos[0] : null,

        prop: product.prop,
        materials: product.materials,
        colors: product.colors,
    
        createdAt: product.createdAt
    }
} 


module.exports = {
    client,
    admin
}