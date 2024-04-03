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

    const create = async (title, desc, price, category, collection, prop) => {
        try { return await publicRequest('api/products/create', {title, desc, price, category, collection, prop}) }
        catch(error) { return null } 
    } 

    return { 
        categories,
        collections,
        products,

        create
    }
}