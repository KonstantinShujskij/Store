import { useSelector } from 'react-redux'
import useApi from '../hooks/api.hook'
import * as basket from '../redux/selectors/basket.selectors'


export default function useOrdersApi() {
    const { publicRequest, protectedRequest } = useApi()

    const list = useSelector(basket.list)

    const create = async (delivery, contacts) => {        
        try { return await publicRequest('api/orders/create', {delivery, contacts, products: list}) }
        catch(error) { return null } 
    } 

    const pay = async (id) => {
        try { return await publicRequest('api/orders/pay', {id}) }
        catch(error) { return null } 
    } 

    const get = async (id) => {
        try { return await publicRequest('api/orders/get', {id}) }
        catch(error) { return null } 
    } 

    return { 
        create,
        pay,
        get
    }
}