import useApi from '../hooks/api.hook'


export default function useProductsApi() {
    const { publicRequest, protectedRequest } = useApi()


    const categories = async () => {
        try { return await publicRequest('api/products/categories') }
        catch(error) { return [] } 
    } 

    const collections = async () => {
        try { return await publicRequest('api/products/collections') }
        catch(error) { return [] } 
    } 

    const products = async (filter) => {
        try { return await publicRequest('api/products/products', {filter}) }
        catch(error) { return [] } 
    } 

    const create = async (title, desc, price, category, collection, prop, colors) => {
        try { return await publicRequest('api/products/create', {title, desc, price, category, collection, prop, colors}) }
        catch(error) { return null } 
    } 

    const get = async (id) => {
        try { return await publicRequest('api/products/get', {id}) }
        catch(error) { return null } 
    } 

    // admins

    const remove = async (id) => {
        try { return await protectedRequest('api/products/remove', {id}) }
        catch(error) { return null } 
    }

    return { 
        categories,
        collections,
        products,

        create,
        get,

        remove
    }
}