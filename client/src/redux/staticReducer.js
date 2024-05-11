import { SET_CATEGORY, ADD_CATEGORY, DEL_CATEGORY, CLEAR } from './types/static.types'

const initialState = {
    categories: []
}

export default function staticReducer(state=initialState, action) {
    switch(action.type) {
    case SET_CATEGORY:
        return {...state, categories: action.payload}
    case ADD_CATEGORY:
        return {...state, categories: [...state.categories, action.payload]}
    case DEL_CATEGORY:
        return {...state, categories: state.categories.filter((item) => (!action.payload.includes(item.id)))}
    case CLEAR: 
        return initialState
    default:
        return state
    }
}