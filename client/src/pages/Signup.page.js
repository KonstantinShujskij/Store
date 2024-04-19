import React from 'react'
import useInput from '../hooks/input.hook'
import useClientApi from '../api/client.api'
import useAuth from '../hooks/auth.hook'


function Signup() {
    const clientApi = useClientApi()
    const { signup } = useAuth()

    const email = useInput('')
    const password = useInput('')

    const signupHandler = async () => {
        const token = await clientApi.signup(email.value, password.value)
        if(token) { signup(token) }
    }

    return (
        <div>
            <h1>Signup</h1>
            <br />
            
            <input {...email.bind} placeholder="example@mail.com" />
            <br />
            <input {...password.bind} placeholder="Password"/>
            <br />
            <br />

            <button onClick={() => signupHandler()}>Login</button>
        </div>
    )
}

export default Signup