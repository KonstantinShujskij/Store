import React from 'react'
import useInput from '../hooks/input.hook'
import useClientApi from '../api/client.api'
import useAuth from '../hooks/auth.hook'
import { Link } from 'react-router-dom'


import styles from '../styles/Login.module.css' 


function Login() {
    const clientApi = useClientApi()
    const { login } = useAuth()

    const email = useInput('')
    const password = useInput('')

    const loginHandler = async () => {
        const token = await clientApi.login(email.value, password.value)
        if(token) { login(token) }
    }CLIE

    return (
        <div className={styles.wrap}>
            <div className={styles.image}>
                <img src="./images/people.svg" alt="people" />
            </div>
            <div className={styles.form}>
                <div className={styles.links}>
                    <Link to="/login" className={styles.active}>Sign in</Link>
                    <Link to="/signup">Create</Link>
                </div>

                <input className={styles.input} {...email.bind} placeholder="Email" />
                <input className={styles.input} {...password.bind} type="password" placeholder="Password"/>
                <Link to="/" className={styles.forget}>Forgot password?</Link>

                <button className={styles.button} onClick={() => loginHandler()}>Sign in</button>
            </div>
        </div>
    )
}

export default Login