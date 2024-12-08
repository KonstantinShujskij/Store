import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import useOrdersApi from '../../api/orders.api'
import useLoad from '../../hooks/load.hook'
import styles from './Order.module.css'
import OrderItem from '../../components/OrderItem/OrderItem'


function Order() {
    const { id } = useParams()
    const ordersApi = useOrdersApi()

    const [order, setOrder] = useState() 
    const [step, setStep] = useState(0) 

    const load = async () => {
        const order = await ordersApi.get(id)
        if(!order) { return }
        setOrder(order)

        // CREATE/PAID/WORK/CONFIRM/REJECT
        if(['PAID', 'WORK', 'CONFIRM'].includes(order.status)) { setStep(1) }
        if(['WORK', 'CONFIRM'].includes(order.status)) { setStep(2) }
        if(['CONFIRM'].includes(order.status)) { setStep(3) }
    }

    useLoad(load)

    const payHandler = async () => {
        const newOrder = await ordersApi.pay(order._id)
        if(!newOrder) { return }
        
        setOrder(newOrder)
        load().then()
    }

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h3 className={styles.path}>order</h3>
                <div className={styles.items}>
                    {order?.list.map((item) => <OrderItem item={item} isRemove={false} key={item.productId} /> )}
                </div>
            </div>
            <div className={styles.order}>
                <div className={styles.title}>Інформація про доставку</div>
                <div className={styles.status}>
                    <div className={styles.points}>
                        <div className={styles.point} active={step > 0? 'active' : null}>1</div>
                        <div className={styles.line}></div>
                        <div className={styles.point} active={step > 1? 'active' : null}>2</div>
                        <div className={styles.line}></div>
                        <div className={styles.point} active={step > 2? 'active' : null}>3</div>
                    </div>
                    <div className={styles.labels}>
                        <div className={styles.label}>Оплачено</div>
                        <div className={styles.label}>Відправленно</div>
                        <div className={styles.label}>Доставлено</div>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.input}>{order?.contacts?.name}</div>
                    <div className={styles.input}>{order?.contacts?.surname}</div>
                    <div className={styles.input}>{order?.contacts?.email}</div>
                    <div className={styles.input}>{order?.contacts?.phone}</div>

                    <div className={styles.input}>{order?.delivery?.town}</div>
                    <div className={styles.input}>
                        {order?.delivery?.type === 'department' && <span>Відділення {order?.delivery?.data}</span>}
                        {order?.delivery?.type === 'terminal' && <span>Поштомат {order?.delivery?.data}</span>}
                        {order?.delivery?.type === 'address' && <span>{order?.delivery?.data}</span>}
                    </div>
                    
                    <div className={styles.input}>{order?.contacts?.instagram}</div>
                    {order?.delivery?.note && <div className={styles.note}>{order?.delivery?.note}</div>}
                </div>
                <div className={styles.control}>
                    <p className={styles.count}>items: {order?.count | 0}</p>
                    <p className={styles.price}>Total: {order?.price | 0}</p>

                    {step === 0 && <Link className={styles.button} onClick={() => payHandler()}>PAY</Link>  }
                </div>
            </div>
        </div>
    )
}

export default Order