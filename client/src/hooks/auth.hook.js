import { useDispatch } from 'react-redux'

import * as auth from '../redux/actions/auth.actions'
import useBasket from './basket.hook'

export default function useAuth() {
    const dispath = useDispatch()
    const Basket = useBasket()

    const login = (userToken, isAdmin=false) => { dispath(auth.login(userToken, isAdmin)) }
    const logout = () => { 
        dispath(auth.logout()) 
        Basket.clear()
    }

    return { login, logout }
}