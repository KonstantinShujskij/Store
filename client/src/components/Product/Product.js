import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css' 


function Product({product}) {
    return (
        <div className={styles.product}>
            <h3><Link to={`/product/${product._id}`}>{product?.title}</Link></h3>
            <p>{product?.desc}</p>
            <h4>{product?.price} $</h4>
            <p>{product?.categoryTitle}</p>
            <p>{product?.collectionTitle}</p>
        </div>
    )
}

export default Product