import React, { useState } from 'react'
import styles from './Paginate.module.css'
import { FRONT_URL } from '../../const'

function Paginate({ page, limit, next, back, setLimit }) {   
    const [open, setOpen] = useState(false)

    const limitHandler = (limit) => {
        setLimit(limit)
        setOpen(false)
    }

    return (
        <div className={styles.main}>
            <div className={styles.label}>Page</div>
            <div className={styles.conroller}>
                <div className={styles.left} onClick={back}>
                    <img src={`${FRONT_URL}/images/left.svg`} alt="back" />
                </div>
                <div className={styles.page}>{page}</div>
                <div className={styles.right} onClick={next}>
                    <img src={`${FRONT_URL}/images/right.svg`} alt="next" />
                </div>
            </div>
            <div className={styles.count}>
                <div className={styles.value}>
                    <div>{limit}</div>
                    <div className={styles.icon} onClick={() => setOpen((prew) => !prew)} open={open? 1 : 0}>
                        <img src={`${FRONT_URL}/images/chevron.svg`} alt="next" />
                    </div>
                </div>
                {open && (
                    <div className={styles.list}>
                        <div onClick={() => limitHandler(10)}>10</div>
                        <div onClick={() => limitHandler(20)}>20</div>
                        <div onClick={() => limitHandler(30)}>30</div>
                        <div onClick={() => limitHandler(50)}>50</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Paginate