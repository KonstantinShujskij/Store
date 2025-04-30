import useApi from '../hooks/api.hook'


export default function useAlsoApi() {
    const { publicRequest, protectedRequest } = useApi()

    const set = async (id, selected) => {
        try { return await protectedRequest('api/also/set', { id, selected }) }
        catch(error) { return null } 
    } 

    const get = async (count=3) => {
        try { return await publicRequest('api/also/get', { count }) }
        catch(error) { return [] } 
    } 

    const recomends = async (id, productId) => {
        try { return await protectedRequest('api/products/recomends', { id, productId }) }
        catch(error) { return [] } 
    }

    return { 
        set,
        get,
        recomends
    }
}