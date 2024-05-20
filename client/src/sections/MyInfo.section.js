import React from 'react'
import { useSelector } from 'react-redux'
import useInput from '../hooks/input.hook'

import * as userSelectors from '../redux/selectors/user.selectors'
import useUser from '../hooks/user.hook'
import useClientApi from '../api/client.api'

import styles from '../styles/Account.module.css' 


function MyInfo() {
    const clientApi = useClientApi()

    const User = useUser()
    const user = useSelector(userSelectors.user)

    const name = useInput(user.name)
    const surname = useInput(user.surname)
    const phone = useInput(user.phone)
    const town = useInput(user.town)
    const instagram = useInput(user.instagram)

    const dataSaveHandler = async () => {
        let info = {}
        if(name.value && name.value !== user.name) { info = {...info, name: name.value} }
        if(surname.value && surname.value !== user.surname) { info = {...info, surname: surname.value} }
        if(phone.value && phone.value !== user.phone) { info = {...info, phone: phone.value} }
        if(instagram.value && instagram.value !== user.instagram) { info = {...info, instagram: instagram.value} }
        if(town.value && town.value !== user.town) { info = {...info, town: town.value} }

        const res = await clientApi.changeInfo(info)
        if(res) { User.load() }
    }

    return (
        <div className={styles.form}>
            <h3 className={styles.label}>My data</h3>

            <input className={styles.input} {...name.bind} placeholder="Name" />
            <input className={styles.input} {...surname.bind} placeholder="Surname" />
            <input className={styles.input} {...phone.bind} placeholder="+380" />
            <input className={styles.input} {...town.bind} placeholder="Town" />
            <input className={styles.input} {...instagram.bind} placeholder="Instagram" />

            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => dataSaveHandler()}>Save</button>
            </div>
        </div>
    )
}

export default MyInfo