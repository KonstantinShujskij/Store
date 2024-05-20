import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as authSelectors from '../redux/selectors/auth.selectors'
import * as userSelectors from '../redux/selectors/user.selectors'

import useUser from './user.hook'


export default function useData() {
    const token = useSelector(authSelectors.token)
    const isAdmin = useSelector(authSelectors.isAdmin)
    const isUserLoad = useSelector(userSelectors.isUserLoad)

    const User = useUser()
    
    useEffect(() => {        
        if(token) { 
            if(isAdmin) { 
                // load admin data
            }
            else {
                User.load() 
            }
        }
        else {
            User.clear() 
        }
    }, [token, isUserLoad, isAdmin])
}