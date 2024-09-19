import React from 'react'
import useBasket from '../../hooks/basket.hook'
import styles from './BasketItem.module.css' 
import {IMG_SRC} from '../../const'

function BasketItem({item}) {
    const { remove } = useBasket()

    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
            </div>
            <h4 className={styles.title}>{item?.title}</h4>
            <div className={styles.price}>{item.price} ₴</div>
            <div className={styles.color}>
                <span className={styles.bold}>Color</span> {item?.color} & {item?.design}
            </div>
            <div className={styles.size}>
                <span>SIZE</span> {Object.values(item?.parametrs).map((value) => <span key={value}>{value}</span>)}
            </div>

            <button onClick={() => remove(item.id)} className={styles.remove}>
                <img src="./images/close.svg" alt="remove" />
            </button>
        </div>
    )
}

export default BasketItem