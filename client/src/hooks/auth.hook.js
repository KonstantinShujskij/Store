import { useDispatch } from 'react-redux'

import * as auth from '../redux/actions/auth.actions'


export default function useAuth() {
    const dispath = useDispatch()

    const login = (userToken, isAdmin=false) => { dispath(auth.login(userToken, isAdmin)) }
    const logout = () => { dispath(auth.logout()) }

    return { login, logout }
}