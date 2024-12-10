import React, { useEffect, useMemo, useState } from 'react'
import styles from './Orders.module.css'
import Paginate from '../../../components/Paginate/Paginate'
import usePaginate from '../../../hooks/paginate.hook'
import useOrdersApi from '../../../api/orders.api'
import Item from './Item/Item'


function Orders() {
    const paginate = usePaginate(100, 1, 1, () => load())
    const Order = useOrdersApi()

    const [list, setList] = useState([])
    const price = useMemo(() => list.reduce((total, order) => total + order.price, 0), [list])

    
    const load = async () => {
        const {list, count} = await Order.listAll(paginate.page, paginate.limit)
        paginate.setCount(count)
        setList(list)
    } 

    useEffect(() => { load().then() }, [paginate.page, paginate.limit])


    return (
        <div className={styles.main}>
            <div className={styles.logo}></div>
            <div className={styles.head}>
                <div className={styles.find}>
                    <input className={styles.input} placeholder="Пошук" />
                </div>
                <div></div>
            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.title}>Замовлення</div>
                    <div className={styles.count}>{list?.length} total</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.label}>Income</div>
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.table}>
                <div className={styles.nav}>
                    <div>Имя фамилия</div>
                    <div>Модель</div>
                    <div>Номер телефона</div>
                    <div>Число</div>
                    <div>Колір</div>
                    <div>Статус</div>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.list}>
                    {list.map((order) => <Item order={order} key={order._id} />)}
                </div>
            </div>
            <Paginate {...paginate.bind} />
        </div>
    )
}

export default Orders