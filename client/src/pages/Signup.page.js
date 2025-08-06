import React from 'react'
import { Link } from 'react-router-dom'

import { FRONT_URL } from '../constants'
import useClientApi from '../services/client.api'
import useAuth from '../hooks/auth.hook'
import useInput from '../hooks/input.hook'

import styles from '../styles/Signup.module.css' 


function Signup() {
    const clientApi = useClientApi()
    const { login } = useAuth()

    const name = useInput('')
    const surname = useInput('')
    const email = useInput('')
    const password = useInput('')

    const signupHandler = async () => {
        const token = await clientApi.signup(email.value, password.value, { name: name.value, surname: surname.value })
        if(token) { login(token) }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.image}>
                <img src={`${FRONT_URL}/images/account.svg`} alt="people" />
            </div>
            <div className={styles.form}>
                <div className={styles.links}>
                    <Link to="/login">Sign in</Link>
                    <Link to="/signup" className={styles.active}>Create</Link>
                </div>

                <input className={styles.input} {...name.bind} placeholder="Name" />
                <input className={styles.input} {...surname.bind} placeholder="Surname" />
                <input className={styles.input} {...email.bind} placeholder="Email" />
                <input className={styles.input} {...password.bind} type="password" placeholder="Password"/>

                <button className={styles.button} onClick={() => signupHandler()}>Create</button>
            </div>
        </div>
    )
}

export default Signup