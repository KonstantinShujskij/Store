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
            if(isUserLoad) { return await protectedRequest('api/orders/create', {delivery, contacts, products: list}) }
            else { return await publicRequest('api/orders/create-public', {delivery, contacts, products: list}) }
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

    const next = async (id) => {        
        try { return await protectedRequest('api/orders/next', {id}) }
        catch(error) { return null } 
    } 

    const setStatus = async (id, status) => {       
        try { return await protectedRequest('api/orders/set-status', {id, status}) }
        catch(error) { return null } 
    } 

    const setTTH = async (id, tth) => {       
        try { return await protectedRequest('api/orders/set-tth', {id, tth}) }
        catch(error) { return null } 
    } 

    return { 
        create,
        pay,
        get,
        listByClient,
        listAll,
        next,
        setStatus,
        setTTH
    }
}