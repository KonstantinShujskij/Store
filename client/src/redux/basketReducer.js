import { ADD, REMOVE, CLEAR, OPEN } from './types/basket.types'

const initialState = {
    list: [],
    open: false
}

export default function basketReducer(state=initialState, action) {
    switch(action.type) {
    case OPEN:
        return {...state, open: action.payload}
    case ADD:
        return {...state, list: [...state.list, action.payload]}
    case REMOVE:
        return {...state, list: state.list.filter((item) => (item.id !== action.payload))}
    case CLEAR: 
        return initialState
    default:
        return state
    }
}