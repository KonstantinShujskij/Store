import React, { useState } from 'react'
import useOrdersApi from '../api/orders.api'
import useLoad from '../hooks/load.hook'
import styles from '../styles/Orders.module.css' 
import { IMG_SRC } from '../const'
import { Link } from 'react-router-dom'
import useProductsApi from '../api/products.api'


function MyOrders() {
    const Order = useOrdersApi()
    const Product = useProductsApi()

    const [waitList, setWaitList] = useState([]) 
    const [doneList, setDoneList] = useState([]) 
    const [recomend, setRecomend] = useState([])

    useLoad(async () => {
        const list = await Order.listByClient()
        const progresse = list.filter((item) => ['CREATE', 'PAID', 'WORK'].includes(item.status))
        const done = list.filter((item) => ['CONFIRM', 'REJECT'].includes(item.status))

        const recomend = await Product.recomends()
        setRecomend(recomend)

        setWaitList(progresse)
        setDoneList(done)
    })

    return (
        <div className={styles.main}>
            {!!waitList.length && (<>
                <div className={styles.label}>IN THE PROCESS</div>
                <div className={styles.list}>
                    {waitList.map((order) => (<>
                        {order.list.map((item) => (
                            <div className={styles.item} key={order._id}>
                                <div className={styles.photo}>
                                    <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
                                </div>
                                <Link className={styles.title} to={`/order/${order._id}`}>{item?.title}</Link>
                                <div className={styles.color}>
                                    <span className={styles.bold}>Color</span> {item?.color} & {item?.design}
                                </div>
                                <div className={styles.size}>
                                    <span>SIZE</span> {Object.values(item?.parametrs).map((value) => <span key={value}>{value}</span>)}
                                </div>
                            </div>
                        ))}
                    </>))}
                </div>
            </>)}

            {!!doneList.length && (<>
                <div className={styles.label}>DONE</div>
                <div className={styles.list}>
                    {doneList.map((order) => (<>
                        {order.list.map((item) => (
                            <div className={styles.item} key={order._id}>
                                <div className={styles.photo}>
                                    <img src={`${IMG_SRC}${item.photo}`} alt={item.photo} />
                                </div>
                                <Link className={styles.title} to={`/order/${order._id}`}>{item?.title}</Link>
                                <div className={styles.size}>
                                    <span>SIZE</span> {Object.values(item?.parametrs).map((value) => <span key={value}>{value}</span>)}
                                </div>                            
                                <div className={styles.color}>
                                    <span className={styles.bold}>Color</span> {item?.color} & {item?.design}
                                </div>
                            </div>
                        ))}
                    </>))}
                </div>
            </>)}

            {!waitList.length && !doneList.length && <div className={styles.empty}>ваш кошик порожній</div>}

            <div className={styles.label}>рекомендації для вас</div>
            <div className={styles.list}>
                {recomend.map((item) => (<>
                    <div className={styles.item} key={item._id}>
                        <div className={styles.photo}>
                            <img src={`${IMG_SRC}${item.photos[0]}`} alt={item.photos[0]} />
                        </div>
                        <Link className={styles.title} to={`/product/${item.id}`}>{item?.title}</Link>
                    </div>
                </>))}
            </div>
        </div>
    )
}

export default MyOrders