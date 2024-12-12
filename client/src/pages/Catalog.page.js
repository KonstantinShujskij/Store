import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useProductsApi from '../api/products.api'
import * as authSelectors from '../redux/selectors/auth.selectors'
import * as staticSelectors from '../redux/selectors/static.selectors'

import Product from '../components/Product/Product'

import styles from '../styles/Catalog.module.css' 


function Catalog({isColl, isCat}) {
    const { id } = useParams()
    const productsApi = useProductsApi()

    const isAdmin = useSelector(authSelectors.isAdmin)
    const catalog = useSelector(staticSelectors.getCatalog(id))

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()

    const load = async () => {
        const options = {}
        if(isColl) { options.collection = id }
        if(isCat) { options.category = id }

        setTitle(catalog)   
        if(isAdmin) { setProducts(await productsApi.list(options)) }
        else { setProducts(await productsApi.clientList(options)) }        
    }

    useEffect(() => { load() }, [id])
    
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
                {products.map((product) => <Product product={product} refresh={() => load()} key={product.id} />)}
            </div>
        </div>
    )
}

export default Catalog