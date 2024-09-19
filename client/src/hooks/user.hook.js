import { useDispatch } from 'react-redux'
import useClientApi from '../api/client.api'
import * as User from '../redux/actions/user.actions'


export default function useUser() {
    const clientApi = useClientApi()
    const dispatch = useDispatch()
    
    const load = async () => {
        const user = await clientApi.load()
        if(user) { dispatch(User.load(user)) }
    }

    const clear = () => { dispatch(User.clear())  }

    return { 
        load,
        clear
    }
}