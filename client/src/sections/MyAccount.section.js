import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useClientApi from '../services/client.api'
import useAuth from '../hooks/auth.hook'
import useInput from '../hooks/input.hook'
import useUser from '../hooks/user.hook'
import * as userSelectors from '../redux/selectors/user.selectors'

import styles from '../styles/Account.module.css' 
import useAlert from '../hooks/alert.hook'


function MyAccount() {
    const clientApi = useClientApi()
    const Alert = useAlert()

    const { logout } = useAuth()

    const navigate = useNavigate('navigate')

    const User = useUser()
    const user = useSelector(userSelectors.user) 

    const email = useInput(user.email)
    const password = useInput('')
    const newPassword = useInput('')
    const rePassword = useInput('')

    const saveEmail = async () => {
        const res = await clientApi.changeEmail(email.value)
        if(res) { User.load() }
    }

    const savePassword = async () => {
        if(!password.value) { return }
        if(!newPassword.value) { return }
        if(rePassword.value !== newPassword.value) { return }

        const res = await clientApi.changePassword(password.value, newPassword.value)
        if(!res) { return }
        
        password.clear()
        newPassword.clear()
        rePassword.clear()
        
        Alert.pushMess('Success')
    }

    const saveHandler = () => {
        if(email.value !== user.email) { saveEmail().then() }
        if(newPassword.value) { savePassword().then() }
    }

    const logoutHandler = () => {
        logout()
        navigate('/')
    }

    return (
        <div className={styles.form}>
            <h3 className={styles.label}>Main information</h3>

            <input className={styles.input} {...email.bind} placeholder="Email" />

            <h3 className={styles.label}>Change password</h3>

            <input className={styles.input} {...password.bind} type="password" placeholder="******" />
            <input className={styles.input} {...newPassword.bind} type="password" placeholder="New password" />
            <input className={styles.input} {...rePassword.bind} type="password" placeholder="Confirm new password" />

            <div className={styles.buttons}>
                <button className={styles.button} onClick={logoutHandler}>Logout</button>
                <button className={styles.button} onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default MyAccount
