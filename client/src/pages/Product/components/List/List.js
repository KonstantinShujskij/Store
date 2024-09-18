import React, { useState } from 'react'
import styles from './List.module.css'
import { FRONT_URL } from '../../../../const'


function List({values=[], callback=()=>{}}) {
    const [value, setValue] = useState(values[0])
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen((prew) => !prew)
    const cangeValue = (item) => {
        setValue(item)
        callback(item)
    }


    return (
        <div className={styles.main}>
            <div className={styles.control}>
                <div>{value}cm</div>
                <div className={`${styles.button} ${open? styles.open : null}`} onClick={toggleOpen}>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^" />
                </div>
            </div>
            <div className={`${styles.list} ${open? styles.open : null}`}>
                {values.map((item) => (
                    <div className={styles.item} onClick={() => cangeValue(item)}>
                        <div className={styles.title}>{item}cm</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List