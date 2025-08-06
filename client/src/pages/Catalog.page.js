import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useProductsApi from '../services/products.api'
import * as authSelectors from '../redux/selectors/auth.selectors'
import * as staticSelectors from '../redux/selectors/static.selectors'

import Product from '../components/layout/Product/Product'
import Loading from '../components/ui/Loading'
import Error from '../components/ui/Error'
import EmptyState from '../components/ui/EmptyState'

import styles from '../styles/Catalog.module.css' 


function Catalog({isColl, isCat}) {
    const { id } = useParams()
    const productsApi = useProductsApi()

    const isAdmin = useSelector(authSelectors.isAdmin)
    const catalog = useSelector(staticSelectors.getCatalog(id))

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = async () => {
        try {
            setLoading(true)
            setError(null)
            
            const options = {}
            if(isColl) { options.collection = id }
            if(isCat) { options.category = id }

            setTitle(catalog)   
            if(isAdmin) { 
                const data = await productsApi.list(options)
                setProducts(data || [])
            } else { 
                const data = await productsApi.clientList(options)
                setProducts(data || [])
            }
        } catch (error) {
            console.error('Error loading products:', error)
            setError('Failed to load products. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { load() }, [id])
    
    if (loading) {
        return (
            <div className={styles.wrap}>
                <Loading text="Loading products..." />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.wrap}>
                <Error message={error} onRetry={load} />
            </div>
        )
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <div className={styles.label}>
                    {isColl && `collection/${title}`}
                    {isCat && `category/${title}`}
                </div>
                <div className={styles.active}>
                    {isAdmin && <Link className={styles.button} to="/make-product">CREATE</Link>}
                </div>
            </div>
            <div className={styles.products}>
                {products.length === 0 ? (
                    <EmptyState 
                        title="No products found"
                        message="There are no products in this category/collection yet."
                        actionText="Browse All Products"
                        actionLink="/catalog"
                        icon="products"
                    />
                ) : (
                    products.map((product) => <Product product={product} refresh={() => load()} key={product.id} />)
                )}
            </div>
        </div>
    )
}

export default Catalog