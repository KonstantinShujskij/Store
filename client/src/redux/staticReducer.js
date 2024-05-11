import { SET_CATEGORY, ADD_CATEGORY, DEL_CATEGORY } from './types/static.types'
import { SET_COLLECTION, ADD_COLLECTION, DEL_COLLECTION } from './types/static.types'
import { CLEAR } from './types/static.types'

const initialState = {
    categories: [],
    collections: []
}

export default function staticReducer(state=initialState, action) {
    switch(action.type) {
    case SET_CATEGORY:
        return {...state, categories: action.payload}
    case ADD_CATEGORY:
        return {...state, categories: [...state.categories, action.payload]}
    case DEL_CATEGORY:
        return {...state, categories: state.categories.filter((item) => (!action.payload.includes(item.id)))}
    case SET_COLLECTION:
        return {...state, collections: action.payload}
    case ADD_COLLECTION:
        return {...state, collections: [...state.collections, action.payload]}
    case DEL_COLLECTION:
        return {...state, collections: state.collections.filter((item) => (!action.payload.includes(item.id)))}
    case CLEAR: 
        return initialState
    default:
        return state
    }
}