import useApi from '../hooks/api.hook'


export default function useProductsApi() {
    const { publicRequest, protectedRequest } = useApi()

    const list = async (filter={}) => {
        try { return await publicRequest('api/products/list', {filter}) }
        catch(error) { return [] } 
    } 

    const get = async (id) => {
        try { return await publicRequest('api/products/get', {id}) }
        catch(error) { return null } 
    } 

    const create = async ({title, desc, price, category, collection, prop}, photos) => {
        const data = {title, desc, price, category, collection, prop: JSON.stringify(prop)}
        const form = new FormData()
        photos.forEach((item) => form.append('photos', item.file))
        for(let key in data) { form.append(key, data[key]) }

        try { return await protectedRequest('api/products/create', form, 'form') }
        catch(error) { return null } 
    } 
    
    const update = async (id, {title, desc, price, category, collection, prop}, photos=[], existPhotos=[]) => {
        const data = {title, desc, price, category, collection, prop: JSON.stringify(prop)}
        const form = new FormData()
        form.append('id', id)
        for(let key in data) { form.append(key, data[key]) }
        photos.forEach((item) => form.append('photos', item.file))
        existPhotos.forEach((item) => form.append('existPhotos', item.file.name))
        
        try { return await protectedRequest('api/products/update', form, 'form') }
        catch(error) { return null } 
    } 

    const remove = async (id) => {
        try { return await protectedRequest('api/products/remove', {id}) }
        catch(error) { return false } 
    }

    return { 
        create,
        remove,
        update,
        get,
        list
    }
}