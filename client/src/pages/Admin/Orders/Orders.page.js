import React, { useEffect, useMemo, useState } from 'react'
import styles from './Orders.module.css'
import Paginate from '../../../components/Paginate/Paginate'
import usePaginate from '../../../hooks/paginate.hook'
import useInput from '../../../hooks/input.hook'
import useOrdersApi from '../../../api/orders.api'
import Item from './Item/Item'
import { FRONT_URL } from '../../../const'


function Orders() {
    const paginate = usePaginate(100, 1, 10, () => load())
    const Order = useOrdersApi()

    const [list, setList] = useState([])
    const price = useMemo(() => list.reduce((total, order) => total + order.price, 0), [list])

    const [filter, setFiler] = useState({
        options: {},
        trigger: false
    })

    const setFilterHandler = (options) => {
        setFiler((prew) => {
            return {
                options: {...prew.options, ...options},
                trigger: !prew.trigger
            }    
        })
    }

    const id = useInput('', (value) => setFilterHandler({ id: value }))
    const phone = useInput('', (value) => setFilterHandler({ phone: value }))
    
    const load = async () => {
        const {list, count} = await Order.listAll(paginate.page, paginate.limit, filter.options)
        paginate.setCount(count)
        setList(list)
    } 

    useEffect(() => { load().then() }, [paginate.page, paginate.limit])
    useEffect(() => { load().then() }, [filter.trigger])

    const [phoneOpen, setPhoneOpen] = useState(false)
    const [statusOpen, setStatusOpen] = useState(false)
    const [statusListOpen, setStatusListOpen] = useState(false)

    const setStatus = (status) => { 
        setFilterHandler({ status }) 
        setStatusListOpen(false)
    }

    return (
        <div className={styles.main}>
            <div className={styles.logo}></div>
            <div className={styles.head}>
                <div className={styles.find}>
                    <input {...id.bind} className={styles.input} placeholder="Пошук" />
                    <div className={styles.icon}>
                        <img src={`${FRONT_URL}/images/find.svg`} alt="find" />
                    </div>
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
                    <div className={styles.phone}>
                        <div className={styles.column} onClick={() => setPhoneOpen((prew) => !prew)}>
                            <div className={styles.icon} open={phoneOpen? 1 : 0}>
                                <img src={`${FRONT_URL}/images/up.svg`} alt="more" />
                            </div>
                            <div>Номер телефона</div>
                        </div>
                        {phoneOpen && (
                            <div className={styles.input}>
                                <input {...phone.bind} placeholder="Пошук" />
                                <div className={styles.icon}>
                                    <img src={`${FRONT_URL}/images/find.svg`} alt="find" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>Число</div>
                    <div>Колір</div>
                    <div>
                        <div className={styles.column} onClick={() => setStatusOpen((prew) => !prew)}>
                            <div className={styles.icon} open={phoneOpen? 1 : 0}>
                                <img src={`${FRONT_URL}/images/up.svg`} alt="more" />
                            </div>
                            <div>Статус</div>
                        </div>
                        {statusOpen && (
                            <div className={styles.status}>
                                <div className={styles.value} onClick={() => setStatusListOpen((prew) => !prew)}>
                                    <div className={styles.icon} open={statusListOpen? 1 : 0}>
                                        <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^" />
                                    </div>
                                    {filter?.options?.status === 'CREATE' && <div>не оплачено</div>}
                                    {filter?.options?.status === 'PAID' && <div>нове замовлення</div>}
                                    {filter?.options?.status === 'SEND' && <div>відправлено</div>}
                                    {filter?.options?.status === 'WORK' && <div>в процессе</div>}
                                    {filter?.options?.status === 'DONE' && <div>завершено</div>}
                                    {filter?.options?.status === 'CANCEL' && <div>скасовано</div>}
                                    {!filter?.options?.status && <div>всі</div>}
                                </div>
                                {statusListOpen && (
                                    <div className={styles.statusList}>
                                        <div onClick={() => setStatus('CANCEL')}>скасовано</div>
                                        <div onClick={() => setStatus('CREATE')}>не оплачено</div>
                                        <div onClick={() => setStatus('PAID')}>нове замовлення</div>
                                        <div onClick={() => setStatus('WORK')}>в процессе</div>
                                        <div onClick={() => setStatus('SEND')}>відправлено</div>
                                        <div onClick={() => setStatus('DONE')}>завершено</div>
                                        <div onClick={() => setStatus('')}>всі</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.list}>
                    {list.map((order) => <Item order={order} load={() => load()} key={order._id} />)}
                </div>
            </div>
            <Paginate {...paginate.bind} />
        </div>
    )
}

export default Orders