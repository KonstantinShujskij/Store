import React from 'react'
import useAuth from '../hooks/auth.hook'
import { useSelector } from 'react-redux'
import useInput from '../hooks/input.hook'

import * as userSelectors from '../redux/selectors/user.selectors'
import useUser from '../hooks/user.hook'

import styles from '../styles/Account.module.css' 



function MyInfo() {
    const User = useUser()
    const user = useSelector(userSelectors.user)

    const name = useInput(user.name)
    const surname = useInput(user.surname)
    const phone = useInput('')
    const town = useInput('')
    const instagram = useInput('')

    return (
        <div className={styles.form}>
            <h3 className={styles.label}>My data</h3>

            <input className={styles.input} {...name.bind} placeholder="Name" />
            <input className={styles.input} {...surname.bind} placeholder="Surname" />
            <input className={styles.input} {...phone.bind} placeholder="+380" />
            <input className={styles.input} {...town.bind} placeholder="Town" />
            <input className={styles.input} {...instagram.bind} placeholder="Instagram" />

            <h3 className={styles.label}>My parametrs</h3>

            <div className={styles.buttons}>
                <button className={styles.button}>Save</button>
            </div>
        </div>
    )
}

export default MyInfo