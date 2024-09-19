import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useProductsApi from '../api/products.api'
import * as authSelectors from '../redux/selectors/auth.selectors'

import Product from '../components/Product/Product'

import styles from '../styles/Catalog.module.css' 


function Catalog() {
    const isAdmin = useSelector(authSelectors.isAdmin)

    const productsApi = useProductsApi()

    const [products, setProducts] = useState([])

    const load = async () => setProducts(await productsApi.list())

    useEffect(() => { load() }, [])
    
    
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <div className={styles.label}>Categories / Sweatshirts</div>
                <div className={styles.active}>
                    {isAdmin && <Link className={styles.button} to="/make-product">CREATE</Link>}
                </div>
            </div>
            <div className={styles.products}>
                {products.map((product) => <Product product={product} refresh={() => load()} key={product.id} />)}
            </div>
        </div>
    )
}

export default Catalog