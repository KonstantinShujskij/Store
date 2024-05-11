import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useCategoryApi from '../api/category.api'

import {setCategory, addCategory, removeCategory} from '../redux/actions/static.actions'


export default function useCategory() {
    const categoryApi = useCategoryApi()
    const dispath = useDispatch()

    useEffect(() => { load().then()}, [])
        
    const load = async () => { dispath(setCategory(await categoryApi.list())) }

    const add = async (title) => { 
        if(!title) { return false }

        const category = await categoryApi.create(title)
        if(category) { dispath(addCategory(category)) }    
        
        return !!category
    }

    const remove = async (id) => await removeList([id])
    const removeList = async (ids) => { 
        if(await categoryApi.remove(ids)) { 
            dispath(removeCategory(ids)) 
            return true
        } 

        return false
    }

    
    return { load, add, remove, removeList }
}