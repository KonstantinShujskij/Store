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

    return { 
        categories,
        collections
    }
}