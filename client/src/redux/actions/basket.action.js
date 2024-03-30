import { ADD, REMOVE, CLEAR } from '../types/basket.types'

export function addProduct(product) {
    return {
        type: ADD,
        payload: {
            id: `${Date.now()}-${parseInt(Math.random() * 1000)}`,
            ...product
        }
    }
}

export function removeProduct(id) {
    return {
        type: REMOVE,
        payload: id
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}