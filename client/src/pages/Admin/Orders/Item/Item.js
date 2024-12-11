import React from 'react'
import styles from './Item.module.css'
import { IMG_SRC } from '../../../../const'
import { Link } from 'react-router-dom'
import Status from '../Status/Status'


function Item({order}) {    
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.label}>
                    <div className={styles.btn}>+</div>
                    <div className={styles.name}>{order?.contacts?.name} {order.contacts?.surname}</div>
                </div>
                <div className={styles.label}>{order?._id}</div>
                <div className={styles.label}>{order?.contacts?.phone}</div>
                <div className={styles.label}>{order?.createdAt}</div>
                <div className={styles.label}></div>
                <div className={styles.label}>
                    <Status order={order} />
                </div>
            </div>
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
                                    <div>Колір дизайну: white</div>
                                    <div>{order?.contacts?.surname}</div>
                                </div>
                                <div className={styles.line}>
                                    <div>Розмір: 90/60/90  163</div>
                                    <div>{order?.contacts?.phone}</div>
                                </div>
                                <div className={styles.line}>
                                    <div>Матеріал: {item.material}</div>
                                    <div>{order?.delivery?.town}</div>
                                </div>
                                <div className={styles.note}>note{order?.delivery?.note}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.bottom}>
                    <div className={styles.subtitle}>subtotal</div>
                    <div className={styles.pay}>
                        <div className={styles.tth}>ТТН: </div>
                        <div className={styles.price}>2300 ₴</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item