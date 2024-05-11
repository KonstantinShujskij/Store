import { SET_CATEGORY, ADD_CATEGORY, DEL_CATEGORY, CLEAR } from '../types/static.types'


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

export function clear() {
    return {
        type: CLEAR
    }
}