import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useOrdersApi from '../services/orders.api'
import * as authSelectors from '../redux/selectors/auth.selectors'
import Loading from '../components/ui/Loading'
import Error from '../components/ui/Error'
import EmptyState from '../components/ui/EmptyState'

import styles from '../styles/Orders.module.css'

function Orders() {
    const ordersApi = useOrdersApi()
    const isAdmin = useSelector(authSelectors.isAdmin)
    
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadOrders = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = isAdmin ? await ordersApi.list() : await ordersApi.myOrders()
            setOrders(data)
        } catch (error) {
            console.error('Error loading orders:', error)
            setError('Failed to load orders. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadOrders()
    }, [])

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return styles.pending
            case 'processing': return styles.processing
            case 'shipped': return styles.shipped
            case 'delivered': return styles.delivered
            case 'cancelled': return styles.cancelled
            default: return styles.pending
        }
    }

    if (loading) {
        return (
            <div className={styles.wrap}>
                <Loading text="Loading orders..." />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.wrap}>
                <Error message={error} onRetry={loadOrders} />
            </div>
        )
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    {isAdmin ? 'All Orders' : 'My Orders'}
                </h1>
            </div>
            
            {orders.length === 0 ? (
                <EmptyState 
                    title="No orders found"
                    message={isAdmin ? 'There are no orders in the system yet.' : 'You haven`t placed any orders yet.'}
                    actionText={isAdmin ? 'View Dashboard' : 'Start Shopping'}
                    actionLink={isAdmin ? '/' : '/catalog'}
                    icon="orders"
                />
            ) : (
                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <div key={order.id} className={styles.orderCard}>
                            <div className={styles.orderHeader}>
                                <div className={styles.orderInfo}>
                                    <h3 className={styles.orderNumber}>
                                        Order #{order.orderNumber}
                                    </h3>
                                    <p className={styles.orderDate}>
                                        {formatDate(order.createdAt)}
                                    </p>
                                </div>
                                <div className={styles.orderStatus}>
                                    <span className={`${styles.status} ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className={styles.orderDetails}>
                                <div className={styles.itemsCount}>
                                    {order.items?.length || 0} items
                                </div>
                                <div className={styles.totalAmount}>
                                    ${order.totalAmount?.toFixed(2) || '0.00'}
                                </div>
                            </div>
                            
                            <div className={styles.orderActions}>
                                <Link 
                                    to={isAdmin ? `/order/${order.id}` : `/order/${order.id}`}
                                    className={styles.viewButton}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Orders