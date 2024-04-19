import { LOGIN, LOGOUT } from '../types/auth.types'

export function login(token, isAdmin=false) {
    return {
        type: LOGIN,
        payload: { token, isAdmin }
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
