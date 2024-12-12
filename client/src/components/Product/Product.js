import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IMG_SRC } from '../../const'
import useProductsApi from '../../api/products.api'
import * as authSelectors from '../../redux/selectors/auth.selectors'
import styles from './Product.module.css' 


function Product({product, refresh}) {
    const isAdmin = useSelector(authSelectors.isAdmin)

    const navigate = useNavigate()
    const productApi = useProductsApi()


    const removeHandler = async () => {
        if(await productApi.remove(product.id)) {
            refresh()
        }
    }

    const navigateHandler = () => navigate(isAdmin? `/make-product/${product.id}` : `/product/${product.id}`)

    const soldOutHandler = async () => {
        if(!product) { return }
        if(await productApi.setSoldOut(product.id, !product.soldOut)) { return refresh() }        
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={`${IMG_SRC}${product.photo}`} alt={styles.title}/>

                {isAdmin && 
                    <div className={styles.menu}>
                        <div className={styles.action} onClick={() => removeHandler()}>REMOVe</div>
                        <div className={styles.action} onClick={navigateHandler}>Edit</div>
                        {product?.soldOut && <div className={styles.action} onClick={() => soldOutHandler()}>Sold In</div>}
                        {!product?.soldOut && <div className={styles.action} onClick={() => soldOutHandler()}>Sold Out</div>}
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