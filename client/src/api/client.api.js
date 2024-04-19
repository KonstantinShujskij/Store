import useApi from '../hooks/api.hook'


export default function useClientApi() {
    const { publicRequest, protectedRequest } = useApi()

    const signup = async (email, password) => {
        try { return await publicRequest('api/client/signup', {email, password}) }
        catch(error) { return null } 
    } 

    const login = async (email, password) => {
        try { return await publicRequest('api/client/login', {email, password}) }
        catch(error) { return null } 
    } 

    return { 
        login,
        signup
    }
}