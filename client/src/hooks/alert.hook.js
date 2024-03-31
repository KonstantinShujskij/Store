import { useDispatch } from 'react-redux'
import { setMess, clearMess } from '../redux/actions/alert.actions'


export default function useAlert() {
    const dispatch = useDispatch()

    const push = (type, text) => {
        dispatch(setMess({ type, text }))
        
        setTimeout(() => dispatch(clearMess()), 1500)  
    }
    
    const pushMess = (text) => push('message', text)
    const pushError = (text) => push('error', text)

    return { 
        pushMess,
        pushError
    }
}