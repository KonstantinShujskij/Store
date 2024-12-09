import React, { useState } from 'react'
import styles from './Paginate.module.css'
import { FRONT_URL } from '../../const'

function Paginate() {
    const page = useState()
    
    return (
        <div className={styles.main}>
            <div className={styles.label}>Page</div>
            <div className={styles.conroller}>
                <div className={styles.left}>
                    <img src={`${FRONT_URL}/images/left.svg`} alt="back" />
                </div>
                <div className={styles.page}>1</div>
                <div className={styles.right}>
                    <img src={`${FRONT_URL}/images/right.svg`} alt="next" />
                </div>
            </div>
            <div className={styles.count}>
                <div className={styles.list}>List</div>
                <div className={styles.count}>
                    <span className={styles.value}>30</span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Paginate