import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useInput from '../hooks/input.hook'
import * as userSelectors from '../redux/selectors/user.selectors'
import * as basket from '../redux/selectors/basket.selectors'

import BasketItem from '../components/BasketItem/BasketItem'

import styles from '../styles/Basket.module.css'


function Basket() {
    const list = useSelector(basket.list)
    const count = useSelector(basket.count)
    const price = useSelector(basket.price)

    const user = useSelector(userSelectors.user)
    
    const name = useInput(user?.name)
    const surname = useInput(user?.surname)
    const phone = useInput(user?.phone)
    const email = useInput(user?.email)
    const town = useInput(user?.town)
    const instagram = useInput(user?.instagram)
    

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
                    <input {...name} className={styles.input} placeholder="Ім'я" />
                    <input {...surname} className={styles.input} placeholder="Прізвище" />
                    <input {...phone} className={styles.input} placeholder="Телефон" />
                    <input {...town} className={styles.input} placeholder="Місто" />

                    <input className={styles.input} placeholder="Номер відділення" />
                    <input {...email} className={styles.input} placeholder="Електронна пошта" />
                    <input {...instagram} className={styles.input} placeholder="Instagram" />
                    <textarea className={styles.textarea} placeholder="Нотатки для замовлення(не обовязково)" />
                </div>
                <div className={styles.control}>
                    <p className={styles.count}>items: {count}</p>
                    <p className={styles.price}>Total: {price}</p>

                    <Link className={styles.button} to="/make-order">BUY</Link>  
                </div>
            </div>
        </div>
    )
}

export default Basket