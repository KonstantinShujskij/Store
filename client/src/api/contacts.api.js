import useApi from '../hooks/api.hook'


export default function useContactsApi() {
    const { publicRequest, protectedRequest } = useApi()

    const create = async (title, link) => {
        try { return await protectedRequest('api/contacts/create', {title, link}) }
        catch(error) { return null } 
    }

    const remove = async (ids) => {
        try { return await protectedRequest('api/contacts/remove', {ids}) }
        catch(error) { return false } 
    }

    const list = async () => {
        try { return await publicRequest('api/contacts/list') }
        catch(error) { return [] } 
    } 

    return { 
        create,
        remove,

        list
    }
}