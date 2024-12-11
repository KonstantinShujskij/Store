import React, { useState } from 'react'
import styles from './Status.module.css'
import { FRONT_URL } from '../../../../const'


function Status({order, next=()=>{}, cancel=()=>{}, setStatus=()=>{}}) {
    const [open, setOpen] = useState(false)
    
    return (
        <div className={styles.status}>
            <div className={styles.value} onClick={() => setOpen((prew) => !prew)}>
                <div className={styles.icon}>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^" />
                </div>
                {order?.status === 'CREATE' && <div>не оплачено</div>}
                {order?.status === 'PAID' && <div>нове замовлення</div>}
                {order?.status === 'WORK' && <div>в процессе</div>}
                {order?.status === 'SEND' && <div>відправлено</div>}
                {order?.status === 'DONE' && <div>завершено</div>}
                {order?.status === 'CANCEL' && <div>скасовано</div>}
            </div>
            {open && (
                <div className={styles.list}>
                    {order?.status === 'CREATE' && (<>
                        <div onClick={cancel}>скасувати</div>
                    </>)}
                    {order?.status === 'PAID' && (<>
                        <div onClick={cancel}>скасувати</div>
                        <div onClick={next}>прийняти</div>
                    </>)}
                    {order?.status === 'WORK' && (<>
                        <div onClick={cancel}>скасувати</div>
                        <div onClick={next}>відправлено</div>
                    </>)}
                    {order?.status === 'SEND' && (<>
                        <div onClick={cancel}>скасувати</div>
                        <div onClick={next}>завершити</div>
                    </>)}
                    {order?.status === 'DONE' && (<>
                        <div onClick={cancel}>скасувати</div>
                    </>)}
                    {order?.status === 'CANCEL' && (<>
                        <div onClick={() => setStatus('PAID')}>оплачено</div>
                        <div onClick={() => setStatus('WORK')}>в процессе</div>
                        <div onClick={() => setStatus('SEND')}>відправлено</div>
                        <div onClick={() => setStatus('DONE')}>завершено</div>
                    </>)}
                </div>
            )}
        </div>
    )
}

export default Status