import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as basket from '../redux/selectors/basket.selectors'
import BasketItem from '../components/BasketItem/BasketItem'
import styles from '../styles/Basket.module.css'


function Basket() {
    const list = useSelector(basket.list)
    const count = useSelector(basket.count)
    const price = useSelector(basket.price)
    
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h3 className={styles.path}>shoppping Bag</h3>
                <div className={styles.items}>
                    {list.map((item) => <BasketItem item={item} key={item.id} /> )}
                </div>
            </div>
            <div className={styles.order}>
                <div className={styles.title}>Info about delivery</div>
                <p className={styles.count}>Count: {count}</p>
                <p className={styles.price}>Price: {price}</p>

                <Link className={styles.button} to="/make-order">BUY</Link>
            </div>
        </div>
    )
}

export default Basket