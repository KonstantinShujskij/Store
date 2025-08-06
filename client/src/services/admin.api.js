import useApi from '../hooks/api.hook'


export default function useAdminApi() {
    const { publicRequest, protectedRequest } = useApi()

    const login = async (email, password) => {
        try { return await publicRequest('api/admin/login', {email, password}) }
        catch(error) { return null } 
    } 

    return { 
        login
    }
}