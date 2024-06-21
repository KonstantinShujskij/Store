import React from 'react'
import useBasket from '../../hooks/basket.hook'
import styles from './BasketItem.module.css' 


function BasketItem({item}) {
    const { remove } = useBasket()

    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img src={`http://127.0.0.1:5000/static/images/${item.photo}`} alt={item.photo} />
            </div>
            <h4 className={styles.title}>{item?.title}</h4>
            <p className={styles.price}>price: {item.price} ₴</p>

            <button onClick={() => remove(item.id)} className={styles.remove}>
                <img src="./images/close.svg" alt="remove" />
            </button>
        </div>
    )
}

export default BasketItem