import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductsApi from '../api/products.api'
import useLoad from '../hooks/load.hook'
import useBasket from '../hooks/basket.hook'

import * as authSelectors from '../redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'
import styles from '../styles/Product.module.css'


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

    const setProp = (title, value) => {
        // setParametrs((prew) => {
        //     const newValue = {...prew}
        //     newValue[title] = value
        //     return newValue
        // })
    }

    const mainColorHandler = (id) => {
        // const color = product?.colorSchema.filter((item) => (item._id === id))[0]
        
        // setMainColor(color?.main)
        // setStyleColors(color?.styles)
    }

    const pushHandler = () => {
        Basket.add({
            _id: product._id,
            title: product.title,
            price: product.price,
            photo: product.photo
        })
    }

    const removeHandler = async () => {
        await productsApi.remove(id)
        navigate('/')
    }

        //     <div>
        //     <h2>{product?.title}</h2>
        //     <p>{product?.desc}</p>
        //     <h4>{product?.price}</h4>
        //     <p>{product?.category}</p>

        //     <br />
        //     <hr />
        //     <br />

        //     {/* <div>
        //         {product?.parametrs?.map((item) => (
        //             <div key={item._id}>
        //                 <span>{item.title} </span>
        //                 <input value={parametrs[item.title]} onChange={(e) => setProp(item.title, e.target.value)} />
        //             </div>
        //         ))}
        //     </div> */}

        //     <br />
        //     <hr />
        //     <br />

        //     {/* <div>
        //         <select onChange={(event) => mainColorHandler(event.target.value)}>
        //             {product?.colorSchema?.map((item) => (
        //                 <option key={item._id} value={item._id}>{item?.main}</option>
        //             ))}
        //         </select>
        //         <select onChange={(event) => setStyleColor(event.target.value)}>
        //             {styleColors?.map((color) => (
        //                 <option key={color} value={color}>{color}</option>
        //             ))}
        //         </select>
        //     </div> */}

        //     <br />
        //     {!isAdmin && <button onClick={pushHandler}>Put to basket</button>}
        //     {isAdmin && <>
        //         <button onClick={() => navigate(`/make-product/${id}`)} >Edit</button>
        //         <br />
        //         <button onClick={() => removeHandler()}>Delete</button>
        //     </>}
        // </div>

    return (
        <div className={styles.main}>
            <div className={styles.photos}>
                {product?.photos.map((photo) => (
                    <div className={styles.photo} key={photo}>
                        <img src={`http://127.0.0.1:5000/static/images/${photo}`} alt={photo} />
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
                <button className={styles.button} onClick={pushHandler}>Bay</button>
            </div>
        </div> 
    )
}

export default Product