import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import useClientApi from '../api/client.api'
import useInput from '../hooks/input.hook'
import useUser from '../hooks/user.hook'
import * as userSelectors from '../redux/selectors/user.selectors'

import styles from '../styles/Account.module.css' 
import Select from '../components/UI/Select/Select'

import { deliveryOptions } from '../const'
import useAlert from '../hooks/alert.hook'


function MyInfo() {
    const clientApi = useClientApi()
    const Alert = useAlert()

    const User = useUser()
    const user = useSelector(userSelectors.user)

    const name = useInput(user?.name)
    const surname = useInput(user?.surname)
    const phone = useInput(user?.phone)
    const town = useInput(user?.delivery?.town)
    const instagram = useInput(user?.instagram)

    const options = deliveryOptions.filter((item) => (user?.delivery?.type === item.id))

    const [delivery, setDelivery] = useState(options.length? options[0] : deliveryOptions[0])
    const address = useInput(user?.delivery?.type === 'address'? user?.delivery?.data : '')
    const department = useInput(user?.delivery?.type === 'department'? user?.delivery?.data : '')
    const terminal = useInput(user?.delivery?.type === 'terminal'? user?.delivery?.data : '')

    const deliveryHandler = (item) => setDelivery(item)

    const dataSaveHandler = async () => {
        let info = {delivery: {}}

        if(name.value && name.value !== user.name) { info = {...info, name: name.value} }
        if(surname.value && surname.value !== user.surname) { info = {...info, surname: surname.value} }
        if(phone.value && phone.value !== user.phone) { info = {...info, phone: phone.value} }
        if(instagram.value && instagram.value !== user.instagram) { info = {...info, instagram: instagram.value} }
        if(town.value && town.value !== user.town) { info.delivery.town = town.value }
        if(delivery?.id) { info.delivery.type = delivery.id }
        
        if(delivery?.id === 'terminal') { info.delivery.data = terminal.value }
        if(delivery?.id === 'department') { info.delivery.data = department.value }
        if(delivery?.id === 'address') { info.delivery.data = address.value }

        const res = await clientApi.changeInfo(info)
        if(!res) { return }

        User.load() 
        Alert.pushMess('Success')
    }

    return (
        <div className={styles.form}>
            <h3 className={styles.label}>My data</h3>

            <input className={styles.input} {...name.bind} placeholder="Name" />
            <input className={styles.input} {...surname.bind} placeholder="Surname" />
            <input className={styles.input} {...phone.bind} placeholder="+380" />
            <input className={styles.input} {...town.bind} placeholder="Town" />

            <div className={styles.hr}></div>
            <Select list={deliveryOptions} current={delivery.title} handler={deliveryHandler} />
            {delivery?.id === 'terminal' && <input {...terminal.bind} className={styles.input} placeholder="Поштомат" />}
            {delivery?.id === 'department' && <input {...department.bind} className={styles.input} placeholder="Відділення"  />}
            {delivery?.id === 'address' && <input {...address.bind} className={styles.input} placeholder="Адреса"  />}

            <input className={styles.input} {...instagram.bind} placeholder="Instagram" />

            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => dataSaveHandler()}>Save</button>
            </div>
        </div>
    )
}

export default MyInfo