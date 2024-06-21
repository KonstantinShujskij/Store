import React from 'react'

import styles from './Product.module.css' 
import useProductsApi from '../../api/products.api'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as authSelectors from '../../redux/selectors/auth.selectors'


function Product({product, refresh}) {
    const isAdmin = useSelector(authSelectors.isAdmin)

    const navigate = useNavigate()
    const productApi = useProductsApi()


    const removeHandler = async () => {
        if(await productApi.remove(product.id)) {
            refresh()
        }
    }

    const navigateHandler = () => {
        navigate(isAdmin? `/make-product/${product.id}` : `/product/${product.id}`)
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={`http://127.0.0.1:5000/static/images/${product.photo}`} alt={styles.title}/>

                {isAdmin && 
                    <div className={styles.menu}>
                        <div className={styles.action} onClick={() => removeHandler()}>REMOVe</div>
                    </div>
                }
            </div>
            <div className={styles.info}>
                <h3 className={styles.title} onClick={navigateHandler}>{product?.title}</h3>
                <h4 className={styles.price}>{product?.price} ₴</h4>
            </div>
        </div>
    )
}

export default Product