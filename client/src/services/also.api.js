import useApi from '../hooks/api.hook'


export default function useAlsoApi() {
    const { publicRequest, protectedRequest } = useApi()

    const set = async (id, productId) => {
        try { return await protectedRequest('api/also/set', { id, productId }) }
        catch(error) { return null } 
    } 

    const get = async (count=3) => {
        try { return await publicRequest('api/also/get', { count }) }
        catch(error) { return [] } 
    } 

    return { 
        set,
        get
    }
}