import React, { useState } from 'react'
import styles from './Status.module.css'
import { FRONT_URL } from '../../../../const'
import useOrdersApi from '../../../../api/orders.api'


function Status({order, callback=()=>{}}) {
    const Order = useOrdersApi()
    const [open, setOpen] = useState(false)

    const next = async () => {      
        const newOrder = await Order.next(order?._id)
        if(!newOrder) { return }
        
        setOpen(false)
        callback(newOrder) 
    }
    const setStatus = async (status='CANCEL') => {
        const newOrder = await Order.setStatus(order?._id, status)
        if(!newOrder) { return }
        
        setOpen(false)
        callback(newOrder) 
    }

    
    
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
                        <div onClick={() => setStatus()}>скасувати</div>
                    </>)}
                    {order?.status === 'PAID' && (<>
                        <div onClick={() => setStatus()}>скасувати</div>
                        <div onClick={() => next()}>прийняти</div>
                    </>)}
                    {order?.status === 'WORK' && (<>
                        <div onClick={() => setStatus()}>скасувати</div>
                        <div onClick={() => next()}>відправлено</div>
                    </>)}
                    {order?.status === 'SEND' && (<>
                        <div onClick={() => setStatus()}>скасувати</div>
                        <div onClick={() => next()}>завершити</div>
                    </>)}
                    {order?.status === 'DONE' && (<>
                        <div onClick={() => setStatus()}>скасувати</div>
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