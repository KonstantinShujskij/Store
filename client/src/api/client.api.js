import useApi from '../hooks/api.hook'


export default function useClientApi() {
    const { publicRequest, protectedRequest } = useApi()

    const signup = async (email, password, data) => {
        try { return await publicRequest('api/client/signup', {email, password, data}) }
        catch(error) { return null } 
    } 

    const login = async (email, password) => {
        try { return await publicRequest('api/client/login', {email, password}) }
        catch(error) { return null } 
    } 

    const load = async () => {
        try { return await protectedRequest('api/client/load') }
        catch(error) { return null } 
    } 

    const changeEmail = async (email) => {
        try { return await protectedRequest('api/client/set-email', {email}) }
        catch(error) { return null } 
    } 

    const changePassword = async (password, newPassword) => {
        try { return await protectedRequest('api/client/set-password', {password, newPassword}) }
        catch(error) { return null } 
    } 

    return { 
        login,
        signup,

        load,

        changeEmail,
        changePassword
    }
}