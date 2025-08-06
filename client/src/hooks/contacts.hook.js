import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useContactsApi from '../services/contacts.api'

import {setContacts, addContacts, removeContacts} from '../redux/actions/static.actions'

export default function useContacts() {
    const contactsApi = useContactsApi()
    const dispath = useDispatch()

    useEffect(() => { load().then()}, [])
        
    const load = async () => { dispath(setContacts(await contactsApi.list())) }

    const add = async (title, link) => { 
        if(!title || !link) { return false }

        const contacts = await contactsApi.create(title, link)
        if(contacts) { dispath(addContacts(contacts)) }    
        
        return !!contacts
    }

    const remove = async (id) => await removeList([id])
    const removeList = async (ids) => { 
        if(await contactsApi.remove(ids)) { 
            dispath(removeContacts(ids)) 
            return true
        } 

        return false
    }

    
    return { load, add, remove, removeList }
}