import React from 'react'
import styles from './Range.module.css'


function Range({min, max}) {
    return (
        <div className={styles.main}>
            <input className={styles.input} {...min} placeholder="from" />
            <input className={styles.input} {...max} placeholder="to" />
        </div>
    )
}

export default Range