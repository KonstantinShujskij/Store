import { ADD, REMOVE, CLEAR } from './types/basket.types'

const initialState = []

export default function basketReducer(state=initialState, action) {
    switch(action.type) {
    case ADD:
        return [...state, action.payload]
    case REMOVE:
        return state.filter((item) => (item.id !== action.payload))
    case CLEAR: 
        return initialState
    default:
        return state
    }
}