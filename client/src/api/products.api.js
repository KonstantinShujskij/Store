import useApi from '../hooks/api.hook'


export default function useProductsApi() {
    const { publicRequest, protectedRequest } = useApi()


    const categories = async () => {
        try { return await publicRequest('api/products/categories') }
        catch(error) { return [] } 
    } 

    return { 
        categories
    }
}