import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import useInput from '../../hooks/input.hook'
import * as userSelectors from '../../redux/selectors/user.selectors'
import * as basket from '../../redux/selectors/basket.selectors'

import BasketItem from '../../components/layout/BasketItem/BasketItem'
import Select from '../../components/ui/Select/Select'

import styles from './Basket.module.css'
import useOrdersApi from '../../services/orders.api'
import useBasket from '../../hooks/basket.hook'
import { deliveryOptions } from '../../constants'


function Basket() {
    const Order = useOrdersApi()
    const navigate = useNavigate()
    const { clear } = useBasket()

    const list = useSelector(basket.list)
    const count = useSelector(basket.count)
    const price = useSelector(basket.price)

    const user = useSelector(userSelectors.user)
    
    const name = useInput(user?.name)
    const surname = useInput(user?.surname)
    const phone = useInput(user?.phone)
    const email = useInput(user?.email)
    const town = useInput(user?.delivery?.town)
    const instagram = useInput(user?.instagram)
    const note = useInput()
    
    const options = deliveryOptions.filter((item) => (user?.delivery?.type === item.id))

    const [delivery, setDelivery] = useState(options.length? options[0] : deliveryOptions[0])
    const address = useInput(user?.delivery?.type === 'address'? user?.delivery?.data : '')
    const department = useInput(user?.delivery?.type === 'department'? user?.delivery?.data : '')
    const terminal = useInput(user?.delivery?.type === 'terminal'? user?.delivery?.data : '')


    const deliveryHandler = (item) => setDelivery(item)

    const bayHandler = async () => {
        const deliveryItem = { type: delivery?.id }
        
        if(delivery?.id === 'terminal') { deliveryItem.data = terminal.value }
        if(delivery?.id === 'department') { deliveryItem.data = department.value }
        if(delivery?.id === 'address') { deliveryItem.data = address.value }

        deliveryItem.town = town.value
        deliveryItem.note = note.value

        const contacts = {
            name: name.value,
            surname: surname.value,
            phone: phone.value,
            email: email.value,
            instagram: instagram.value
        }

        const order = await Order.create(deliveryItem, contacts)
        if(!order) { return }

        clear()
        navigate(`/order/${order._id}`)
    }

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h3 className={styles.path}>shoppping Bag</h3>
                <div className={styles.items}>
                    {list.map((item) => <BasketItem item={item} key={item.id} /> )}
                </div>
            </div>
            <div className={styles.order}>
                <div className={styles.title}>Інформація про доставку</div>
                <div className={styles.form}>
                    <input {...name.bind} className={styles.input} placeholder="Ім'я" />
                    <input {...surname.bind} className={styles.input} placeholder="Прізвище" />
                    <input {...phone.bind} className={styles.input} placeholder="Телефон" />
                    <input {...town.bind} className={styles.input} placeholder="Місто" />

                    <Select list={deliveryOptions} current={delivery.title} handler={deliveryHandler} />
                    {delivery?.id === 'terminal' && <input {...terminal.bind} className={styles.input} placeholder="Поштомат" />}
                    {delivery?.id === 'department' && <input {...department.bind} className={styles.input} placeholder="Відділення"  />}
                    {delivery?.id === 'address' && <input {...address.bind} className={styles.input} placeholder="Адреса"  />}

                    <input {...email.bind} className={styles.input} placeholder="Електронна пошта" />
                    <input {...instagram.bind} className={styles.input} placeholder="Instagram" />
                    <textarea {...note.bind} className={styles.textarea} placeholder="Нотатки для замовлення(не обовязково)" />
                </div>
                <div className={styles.control}>
                    <p className={styles.count}>items: {count}</p>
                    <p className={styles.price}>Total: {price}</p>

                    <Link className={styles.button} onClick={() => bayHandler()}>BUY</Link>  
                </div>
            </div>
        </div>
    )
}

export default Basket