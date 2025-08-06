import React, { useState } from 'react'
import styles from './Item.module.css'
import { FRONT_URL, IMG_SRC } from '../../../../constants'
import { Link } from 'react-router-dom'
import Status from '../Status/Status'
import useOrdersApi from '../../../../services/orders.api'
import useInput from '../../../../hooks/input.hook'


function Item({order, load}) {    
    const Order = useOrdersApi()

    const tth = useInput(order.delivery.tth)
    const [open, setOpen] = useState(false)

    const tthHandler = async () => {
        const newOrder = await Order.setTTH(order._id, tth.value)
        if(!newOrder) { return }

        load()
    }
    

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.label}>
                    <div className={styles.open} open={open? 1 : 0} onClick={() => setOpen((prew) => !prew)}>
                        <img src={`${FRONT_URL}/images/down.svg`} alt="^" />
                    </div>
                    <div className={styles.name}>{order?.contacts?.name} {order.contacts?.surname}</div>
                </div>
                <div className={styles.label}>{order?._id}</div>
                <div className={styles.label}>{order?.contacts?.phone}</div>
                <div className={styles.label}>{order?.createdAt}</div>
                <div className={styles.label}></div>
                <div className={styles.label}>
                    <Status order={order} callback={load}/>
                </div>
            </div>
            {open && (
                <div className={styles.window}>
                    {order?.list.map((item) => (
                        <div className={styles.order}>
                            <div className={styles.data}>
                                <div className={styles.photo}>
                                    <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
                                </div>
                                <div className={styles.info}>
                                    <Link to={`/product/${item?.productId}`}>{item?.title}</Link>
                                    <div className={styles.title} ></div>
                                    <div className={styles.line}>
                                        <div>Колір: {item?.color} & {item?.design}</div>
                                        <div>{order?.contacts?.name}</div>
                                    </div>
                                    <div className={styles.line}>
                                        <div>Розмір: {Object.values(item?.parametrs).map((value) => <span key={value}>{value} </span>)}</div>
                                        <div>{order?.contacts?.surname}</div>
                                    </div>
                                    <div className={styles.line}>
                                        <div>Матеріал: {item.material}</div>
                                        <div>{order?.contacts?.phone}</div>
                                    </div>
                                    <div className={styles.line}>
                                        {order?.delivery?.type === 'department' && <div>Відділення</div>}
                                        {order?.delivery?.type === 'terminal' && <div>Поштомат</div>}
                                        {order?.delivery?.type === 'address' && <div>Aдреса</div>}
                                        <div>{order?.delivery?.data} {order?.delivery?.town}</div>
                                    </div>
                                    <div className={styles.note}>note{order?.delivery?.note}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.bottom}>
                        <div className={styles.subtitle}>subtotal</div>
                        <div className={styles.pay}>
                            {order?.status !== 'SEND' && <div className={styles.tth}>ТТН: {order?.delivery?.tth}</div>}
                            {order?.status === 'SEND' && (
                                <div className={styles.tth}>
                                    <input {...tth.bind} placeholder="TTH" />
                                    <div className={styles.btn} onClick={() => tthHandler()}>Зберегти</div>
                                </div>
                            )}
                            <div className={styles.price}>2300 ₴</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item