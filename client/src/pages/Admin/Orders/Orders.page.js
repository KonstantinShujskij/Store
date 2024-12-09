import React from 'react'
import styles from './Orders.module.css'
import Paginate from '../../../components/Paginate/Paginate'

function Orders() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}></div>
            <div className={styles.head}>
                <div className={styles.find}>
                    <input className={styles.input} placeholder="Пошук" />
                </div>
                <div></div>
            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.title}>Замовлення</div>
                    <div className={styles.price}>50000</div>
                </div>
                <div>
                    <div className={styles.label}>1233 total</div>
                    <div className={styles.label}>Income</div>
                </div>
            </div>
            <div className={styles.table}>
                <div className={styles.nav}>
                    <div>Имя фамилия</div>
                    <div>Модель</div>
                    <div>Номер телефона</div>
                    <div>Число</div>
                    <div>Колір</div>
                    <div>Статус</div>
                </div>
                <div className={styles.list}></div>
            </div>
            <Paginate />
        </div>
    )
}

export default Orders