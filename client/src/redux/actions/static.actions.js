import { SET_CATEGORY, ADD_CATEGORY, DEL_CATEGORY } from '../types/static.types'
import { SET_COLLECTION, ADD_COLLECTION, DEL_COLLECTION } from '../types/static.types'
import { SET_CONTACTS, ADD_CONTACTS, DEL_CONTACTS } from '../types/static.types'
import { CLEAR } from '../types/static.types'


export function setCategory(list) {
    return {
        type: SET_CATEGORY,
        payload: list
    }
}

export function addCategory(category) {   
    return {
        type: ADD_CATEGORY,
        payload: category
    }
}

export function removeCategory(ids) {
    return {
        type: DEL_CATEGORY,
        payload: ids
    }
}

export function setCollection(list) {
    return {
        type: SET_COLLECTION,
        payload: list
    }
}

export function addCollection(collection) {   
    return {
        type: ADD_COLLECTION,
        payload: collection
    }
}

export function removeCollection(ids) {
    return {
        type: DEL_COLLECTION,
        payload: ids
    }
}

export function setContacts(list) {
    return {
        type: SET_CONTACTS,
        payload: list
    }
}

export function addContacts(contacts) {   
    return {
        type: ADD_CONTACTS,
        payload: contacts
    }
}

export function removeContacts(ids) {
    return {
        type: DEL_CONTACTS,
        payload: ids
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}