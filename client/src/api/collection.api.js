import useApi from '../hooks/api.hook'


export default function useCollectionApi() {
    const { publicRequest, protectedRequest } = useApi()

    const create = async (title) => {
        try { return await protectedRequest('api/collection/create', {title}) }
        catch(error) { return null } 
    }

    const remove = async (ids) => {
        try { return await protectedRequest('api/collection/remove', {ids}) }
        catch(error) { return false } 
    }

    const list = async () => {
        try { return await publicRequest('api/collection/list') }
        catch(error) { return [] } 
    } 

    return { 
        create,
        remove,

        list
    }
}