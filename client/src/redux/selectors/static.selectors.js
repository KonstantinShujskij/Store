export const categories = (state) => state.static.categories
export const collections = (state) => state.static.collections
export const getCatalog = (id) => (state) => {
    const list = [
        ...state.static.categories.filter((item) => (item.id === id)),
        ...state.static.collections.filter((item) => (item.id === id))
    ]

    if(!list.length) { return null }
    
    return list[0].title
}

