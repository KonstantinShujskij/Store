import React from 'react'
import { Link } from 'react-router-dom'

import { FRONT_URL } from '../const'
import useAdminApi from '../api/admin.api'
import useInput from '../hooks/input.hook'
import useAuth from '../hooks/auth.hook'

import styles from '../styles/Login.module.css' 


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
        <div className={styles.wrap}>
            <div className={styles.image}>
                <img src={`${FRONT_URL}/images/people.svg`} alt="people" />
            </div>
            <div className={styles.form}>
                <div className={styles.links}>
                    <Link to="/admin" className={styles.active}>Admin</Link>
                </div>

                <input className={styles.input} {...email.bind} placeholder="Email" />
                <input className={styles.input} {...password.bind} type="password" placeholder="Password"/>

                <button className={styles.button} onClick={() => loginHandler()}>Login</button>
            </div>
        </div>
    )
}

export default LoginAdmin