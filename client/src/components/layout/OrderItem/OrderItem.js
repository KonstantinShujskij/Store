import React from 'react'
import {IMG_SRC} from '../../constants'
import styles from './OrderItem.module.css' 
import { useNavigate } from 'react-router-dom'


function OrderItem({item}) {
    const navigate = useNavigate()

    const navigateHandler = () => navigate(`/product/${item.productId}`)

    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
            </div>
            <h4 className={styles.title} onClick={navigateHandler}>{item?.title}</h4>
            <div className={styles.price}>{item.price} ₴</div>
            <div className={styles.color}>
                <span className={styles.bold}>Color</span> {item?.color} & {item?.design}
            </div>
            <div className={styles.size}>
                <span>SIZE</span> {Object.values(item?.parametrs).map((value) => <span key={value}>{value}</span>)}
            </div>
        </div>
    )
}

export default OrderItem