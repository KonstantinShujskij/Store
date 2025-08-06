import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import useOrdersApi from '../../services/orders.api'
import Loading from '../../components/ui/Loading'
import Error from '../../components/ui/Error'

import styles from './Order.module.css'

function Order() {
    const { id } = useParams()
    const navigate = useNavigate()
    const ordersApi = useOrdersApi()
    
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [updating, setUpdating] = useState(false)

    const loadOrder = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await ordersApi.getById(id)
            setOrder(data)
        } catch (error) {
            console.error('Error loading order:', error)
            setError('Failed to load order. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadOrder()
    }, [id])

    const updateStatus = async (newStatus) => {
        try {
            setUpdating(true)
            await ordersApi.updateStatus(id, newStatus)
            await loadOrder() // Reload order data
        } catch (error) {
            console.error('Error updating order status:', error)
        } finally {
            setUpdating(false)
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
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
                <Loading text="Loading order..." />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.wrap}>
                <Error message={error} onRetry={loadOrder} />
            </div>
        )
    }

    if (!order) {
        return (
            <div className={styles.wrap}>
                <Error message="Order not found" showRetry={false} />
            </div>
        )
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <button 
                    className={styles.backButton}
                    onClick={() => navigate('/orders')}
                >
                    ← Back to Orders
                </button>
                <h1 className={styles.title}>Order #{order.orderNumber}</h1>
            </div>

            <div className={styles.orderContainer}>
                <div className={styles.orderInfo}>
                    <div className={styles.section}>
                        <h2>Order Information</h2>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <label>Order Date:</label>
                                <span>{formatDate(order.createdAt)}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Status:</label>
                                <span className={`${styles.status} ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Total Amount:</label>
                                <span className={styles.total}>${order.totalAmount?.toFixed(2) || '0.00'}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Customer Information</h2>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <label>Name:</label>
                                <span>{order.customer?.name || 'N/A'}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Email:</label>
                                <span>{order.customer?.email || 'N/A'}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Phone:</label>
                                <span>{order.customer?.phone || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Shipping Address</h2>
                        <div className={styles.address}>
                            {order.shippingAddress ? (
                                <>
                                    <p>{order.shippingAddress.street}</p>
                                    <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                                    <p>{order.shippingAddress.country}</p>
                                </>
                            ) : (
                                <p>No shipping address provided</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.orderItems}>
                    <h2>Order Items</h2>
                    <div className={styles.itemsList}>
                        {order.items?.map((item, index) => (
                            <div key={index} className={styles.itemCard}>
                                <div className={styles.itemImage}>
                                    <img 
                                        src={item.product?.image || '/images/placeholder.png'} 
                                        alt={item.product?.name || 'Product'} 
                                    />
                                </div>
                                <div className={styles.itemInfo}>
                                    <h3>{item.product?.name || 'Product Name'}</h3>
                                    <p className={styles.itemPrice}>${item.price?.toFixed(2) || '0.00'}</p>
                                    <p className={styles.itemQuantity}>Quantity: {item.quantity || 1}</p>
                                </div>
                                <div className={styles.itemTotal}>
                                    ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.statusManagement}>
                    <h2>Update Order Status</h2>
                    <div className={styles.statusButtons}>
                        {['pending', 'processing', 'shipped', 'delivered', 'cancelled'].map((status) => (
                            <button
                                key={status}
                                className={`${styles.statusButton} ${order.status === status ? styles.active : ''}`}
                                onClick={() => updateStatus(status)}
                                disabled={updating || order.status === status}
                            >
                                {updating && order.status === status ? 'Updating...' : status}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order