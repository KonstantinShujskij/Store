import React from 'react'
import useInput from '../hooks/input.hook'
import useClientApi from '../api/client.api'
import useAuth from '../hooks/auth.hook'


function Login() {
    const clientApi = useClientApi()
    const { login } = useAuth()

    const email = useInput('')
    const password = useInput('')

    const loginHandler = async () => {
        const token = await clientApi.login(email.value, password.value)
        login(token)
    }

    return (
        <div>
            <h1>Login</h1>
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

export default Login