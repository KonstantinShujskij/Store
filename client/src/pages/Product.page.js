import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductsApi from '../api/products.api'
import useLoad from '../hooks/load.hook'
import useBasket from '../hooks/basket.hook'

import * as authSelectors from '../redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'
import styles from '../styles/Product.module.css'
import { IMG_SRC } from '../const'
import Tooltip from '../components/Tooltip/Tooltip'


function Product() {
    const { id } = useParams()
    const navigate = useNavigate()

    const productsApi = useProductsApi()
    const Basket = useBasket()

    const [product, setProduct] = useState(null)
    // const [parametrs, setParametrs] = useState({})
    // const [styleColors, setStyleColors] = useState([])
    // const [mainColor, setMainColor] = useState(null)
    // const [styleColor, setStyleColor] = useState(null)


    useLoad(async () => {
        const loadProduct = await productsApi.get(id)
        setProduct(loadProduct)

        // const param = {}
        // loadProduct?.parametrs.forEach((item) => { param[item.title] = item.min })
        // setParametrs(param)

        // const color = loadProduct?.colorSchema[0] 

        // setStyleColors(color?.styles)
        // setMainColor(color?.main)
        // setStyleColor(color?.styles[0])
    })

    const pushHandler = () => {
        Basket.add({
            _id: product._id,
            title: product.title,
            price: product.price,
            photo: product.photo
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.photos}>
                {product?.photos.map((photo) => (
                    <div className={styles.photo} key={photo}>
                        <img src={`${IMG_SRC}${photo}`} alt={photo} />
                    </div>
                ))}
            </div>

            <div className={styles.form}>
                <div className={styles.top}>
                    <div className={styles.path}>categories / Tracksuits / {product?.title}</div>
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.info}>
                        <div className={styles.title}>{product?.title}</div>
                        <div className={styles.description}>{product?.desc}</div>
                    </div>
                    <div className={styles.priceWrap}>
                        <div className={styles.price}>{product?.price}</div>
                        <div>₴</div>
                    </div>
                </div>
                
                <div>
                    {product?.prop.map((item) => <div key={item._id}>{item.title}</div>)}
                </div>
                <div>
                    {product?.materials.map((item) => <div key={item._id}>{item.title}</div>)}
                </div>

                <Tooltip />

                <button className={styles.button} onClick={pushHandler}>Bay</button>
            </div>
        </div> 
    )
}

export default Product