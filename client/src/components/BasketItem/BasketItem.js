import React from 'react'
import useBasket from '../../hooks/basket.hook'
import styles from './BasketItem.module.css' 


function BasketItem({item}) {
    const { remove } = useBasket()

    return (
        <div className={styles.item}>
            <h4>{item?.title}</h4>
            <p>price: {item.price}</p>

            <br />

            <div>
                {Object.keys(item?.parametrs).map((param) => (
                    <div key={param}>
                        {param}: {item?.parametrs[param]} 
                    </div>
                ))}
            </div>

            <br />

            <div className="d-flex">
                <div className={styles.color} style={{backgroundColor: item.mainColor}}></div>
                <div className={styles.color} style={{backgroundColor: item.styleColor}}></div>
            </div>

            <br />
            <button onClick={() => remove(item.id)}>Remove</button>
        </div>
    )
}

export default BasketItem