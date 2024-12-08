import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import * as basket from '../../../../redux/selectors/basket.selectors'

import { Link } from 'react-router-dom'
import styles from './Bag.module.css' 
import useBasket from '../../../../hooks/basket.hook'
import { IMG_SRC } from '../../../../const'


function Bag() {
    const { open } = useBasket()

    const list = useSelector(basket.list)
    const isOpen = useSelector(basket.open)
    const price = useSelector(basket.price)

    return (
        <div className={styles.main}>
            {isOpen && (
                <div className={styles.window}>
                    <div className={styles.head}>shopping bag</div>     

                    <div className={styles.list}>
                        {list.map((item) => (
                            <div className={styles.item}>
                                <div className={styles.img}>
                                    <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
                                </div>
                                <div className={styles.data}>
                                    <div className={styles.title}>
                                        <span>{item.title}</span>
                                        <span>{item.price} ₴</span>
                                    </div>
                                    <div className={styles.color}>
                                        <span className={styles.bold}>Color</span> {item?.color} & {item?.design}
                                    </div>
                                    <div className={styles.size}>
                                        <span>SIZE</span> {Object.values(item?.parametrs).map((value) => <span key={value}>{value}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>               

                    <div className={styles.info}>
                        <span>Subtotal</span>
                        <span className={styles.price}>{price} ₴</span>
                    </div>
                    <Link className={styles.button} onClick={() => open(false)} to="/basket">go to bag</Link>
                </div>
            )}
            <div className={styles.label} onClick={() => open(!isOpen)}>Bag</div>
        </div>
    )
}

export default Bag