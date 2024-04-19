import React from 'react'
import useInput from '../hooks/input.hook'
import useAdminApi from '../api/admin.api'
import useAuth from '../hooks/auth.hook'


function LoginAdmin() {
    const adminApi = useAdminApi()
    const { login } = useAuth()

    const email = useInput('')
    const password = useInput('')

    const loginHandler = async () => {
        const token = await adminApi.login(email.value, password.value)
        if(token) { login(token, true) }
    }

    return (
        <div>
            <h1>Admin</h1>
            <br />

            <input {...email.bind} placeholder="example@mail.com" />
            <br />
            <input {...password.bind} type="password" placeholder="Password"/>
            <br />
            <br />

            <button onClick={() => loginHandler()}>Login</button>
        </div>
    )
}

export default LoginAdmin