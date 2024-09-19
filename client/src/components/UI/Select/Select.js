import React, { useState } from 'react'
import { FRONT_URL } from '../../../const'
import styles from './Select.module.css'


function Select({list, current, handler=()=>{}, placeholder=''}) {
    const [open, setOpen] = useState(false)

    const clickHandler = (item) => {
        setOpen(false)
        handler(item)
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.select}>
                <div className={styles.value}>{current || placeholder}</div>
                <div className={`${styles.icon} ${open? styles.open : null}`} onClick={() => setOpen((prew) => !prew)}>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^" />
                </div>
            </div>
            {open && <div className={styles.list}>
                {list.map((item) => (
                    <div key={item.id} className={styles.item} onClick={() => clickHandler(item)}>
                        {item.title}
                    </div>
                ))}
            </div>}
            
        </div>
    )
}

export default Select