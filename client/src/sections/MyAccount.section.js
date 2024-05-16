import React from 'react'
import useAuth from '../hooks/auth.hook'
import { useSelector } from 'react-redux'
import useInput from '../hooks/input.hook'

import * as userSelectors from '../redux/selectors/user.selectors'
import useUser from '../hooks/user.hook'

import styles from '../styles/Account.module.css' 



function MyAccount() {
    const User = useUser()
    const user = useSelector(userSelectors.user)
    const { logout } = useAuth()

    const email = useInput(user.email)

    const password = useInput('')
    const newPassword = useInput('')
    const rePassword = useInput('')

    return (
        <div className={styles.form}>
            <h3 className={styles.label}>Main information</h3>

            <input className={styles.input} {...email.bind} placeholder="Email" />

            <h3 className={styles.label}>Change password</h3>

            <input className={styles.input} {...password.bind} type="password" placeholder="******" />
            <input className={styles.input} {...newPassword.bind} type="password" placeholder="New password" />
            <input className={styles.input} {...rePassword.bind} type="password" placeholder="Confirm new password" />

            <div className={styles.buttons}>
                <button className={styles.button} onClick={logout}>Logout</button>
                <button className={styles.button}>Save</button>
            </div>
        </div>
    )
}

export default MyAccount