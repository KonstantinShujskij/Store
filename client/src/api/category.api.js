import useApi from '../hooks/api.hook'


export default function useCategoryApi() {
    const { publicRequest, protectedRequest } = useApi()

    const create = async (title) => {
        try { return await protectedRequest('api/category/create', {title}) }
        catch(error) { return null } 
    }

    const remove = async (ids) => {
        try { return await protectedRequest('api/category/remove', {ids}) }
        catch(error) { return false } 
    }

    const list = async () => {
        try { return await publicRequest('api/products/categories') }
        catch(error) { return [] } 
    } 

    return { 
        create,
        remove,

        list
    }
}