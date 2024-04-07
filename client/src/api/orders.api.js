import useApi from '../hooks/api.hook'


export default function useOrdersApi() {
    const { publicRequest, protectedRequest } = useApi()

    const create = async (delivery, contacts, products) => {
        try { return await publicRequest('api/orders/create', {delivery, contacts, products}) }
        catch(error) { return null } 
    } 

    return { 
        create
    }
}