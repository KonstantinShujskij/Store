import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useCategoryApi from '../api/category.api'

import * as Category from '../redux/actions/static.actions'


export default function useCategory() {
    const categoryApi = useCategoryApi()
    const dispath = useDispatch()

    useEffect(() => { load().then()}, [])
        
    const load = async () => { dispath(Category.setCategory(await categoryApi.list())) }

    const add = async (title) => { 
        if(!title) { return false }

        const category = await categoryApi.create(title)
        if(category) { dispath(Category.addCategory(category)) }    
        
        return true
    }

    const remove = (id) => { dispath(Category.removeCategory([id])) }
    const removeList = async (ids) => { if(await categoryApi.remove(ids)) { dispath(Category.removeCategory(ids)) } }

    return { load, add, remove, removeList }
}