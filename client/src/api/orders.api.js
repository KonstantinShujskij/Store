import { useSelector } from 'react-redux'
import useApi from '../hooks/api.hook'
import * as basket from '../redux/selectors/basket.selectors'
import * as user from '../redux/selectors/user.selectors'


export default function useOrdersApi() {
    const { publicRequest, protectedRequest } = useApi()

    const list = useSelector(basket.list)
    const isUserLoad = useSelector(user.isUserLoad)

    const create = async (delivery, contacts) => {     
        try { 
            if(isUserLoad) { return protectedRequest('api/orders/create', {delivery, contacts, products: list}) }
            else { return publicRequest('api/orders/create-public', {delivery, contacts, products: list}) }
        }
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

    const listByClient = async () => {
        try { return await protectedRequest('api/orders/list') }
        catch(error) { return [] } 
    } 

    const listAll = async (page=1, limit=10, filter={}) => {
        try { return await protectedRequest('api/orders/list-all', {page, limit, filter}) }
        catch(error) { return { list: [], count: 0 } } 
    } 

    return { 
        create,
        pay,
        get,
        listByClient,
        listAll
    }
}