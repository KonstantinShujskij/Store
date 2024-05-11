import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useCollectionApi from '../api/collection.api'

import {setCollection, addCollection, removeCollection} from '../redux/actions/static.actions'


export default function useCollection() {
    const collectionApi = useCollectionApi()
    const dispath = useDispatch()

    useEffect(() => { load().then()}, [])
        
    const load = async () => { dispath(setCollection(await collectionApi.list())) }

    const add = async (title) => { 
        if(!title) { return false }

        const category = await collectionApi.create(title)
        if(category) { dispath(addCollection(category)) }    
        
        return !!category
    }

    const remove = async (id) => await removeList([id])
    const removeList = async (ids) => { 
        if(await collectionApi.remove(ids)) { 
            dispath(removeCollection(ids)) 
            return true
        } 

        return false
    }

    
    return { load, add, remove, removeList }
}