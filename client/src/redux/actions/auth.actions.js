import { LOGIN, LOGOUT } from '../types/auth.types'

export function login(token, userId, isAdmin=false) {
    return {
        type: LOGIN,
        payload: { token, userId, isAdmin }
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
