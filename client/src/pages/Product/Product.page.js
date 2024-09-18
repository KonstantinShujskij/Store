import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FRONT_URL, IMG_SRC } from '../../const'

import useProductsApi from '../../api/products.api'
import useLoad from '../../hooks/load.hook'
import useBasket from '../../hooks/basket.hook'

import Tooltip from '../../components/Tooltip/Tooltip'
import Prop from './components/prop/Prop'
import Colors from './components/Colors/Colors'

import styles from './Product.module.css'


function Product() {
    const { id } = useParams()
    const navigate = useNavigate()

    const productsApi = useProductsApi()
    const Basket = useBasket()

    const [product, setProduct] = useState(null)
    const [parametrs, setParametrs] = useState({})
    const [material, setMaterial] = useState('')
    const [color, setColor] = useState(null)
    const [design, setDesign] = useState(null)

    const [careOpen, setCareOpen] = useState(false)
    const [materialOpen, setMaterialOpen] = useState(false)
    const [propOpen, setPropOpen] = useState(false)

    const setParametr = (key, value) => {
        setParametrs((prew) => {
            const newItem = {...prew}
            newItem[key] = value
            return newItem
        })
    }

    const setColors = (color, design) => {
        setColor({ title: color.title, src: color.src })
        setDesign({ title: design.title, src: design.src })
    }

    useLoad(async () => {
        const loadProduct = await productsApi.get(id)
        setProduct(loadProduct)
        setMaterial(loadProduct?.materials[0]?.title)
        setColor({title: loadProduct.colors[0]?.title, src: loadProduct.colors[0]?.src})
        setDesign({title: loadProduct.colors[0]?.design[0]?.title, src: loadProduct.colors[0]?.design[0]?.src})
    })

    const pushHandler = () => {
        Basket.add({
            _id: product._id,
            title: product.title,
            price: product.price,
            photo: product.photo,
            parametrs,
            material,
            color,
            design
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

                <h3 className={`${styles.title} ${propOpen? styles.open : null}`} onClick={() => setPropOpen((prew) => !prew)}>
                    <span>size</span>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^"/>
                </h3>
                {propOpen && (
                    <div>                   
                        {product?.prop.map((item) => <Prop key={item._id} prop={item} setValue={setParametr} />)}
                    </div>   
                )}      

                <div className={styles.tooltip}>
                    <Tooltip />
                </div>      

                <h3 className={`${styles.title} ${materialOpen? styles.open : null}`} onClick={() => setMaterialOpen((prew) => !prew)}>
                    <span>material</span>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^"/>
                </h3>
                {materialOpen && (
                    <div className={styles.materials}>
                        {product?.materials.map((item) => (
                            <div className={`${styles.material} ${item.title === material? styles.active : null}`}
                                onClick={() => setMaterial(item.title)} >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}

                {product && <Colors list={product.colors} handler={setColors} />}

                <h3 className={`${styles.title} ${careOpen? styles.open : null}`} onClick={() => setCareOpen((prew) => !prew)}>
                    <span>care</span>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^"/>
                </h3>
                {careOpen && (
                    <div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                                    <path d="M1 1L2.25123 5.56102M18.4681 1L17.1924 5.56102M2.25123 5.56102L4.33661 13.1627H15.0661L17.1924 5.56102M2.25123 5.56102L3.49484 4.63213C4.22712 4.08516 5.24197 4.09195 5.97512 4.63776V4.63776C6.70313 5.17975 7.71241 5.1809 8.43341 4.62962V4.62962C9.147 4.08401 10.1341 4.07156 10.8613 4.59901L10.9503 4.66358C11.6844 5.19613 12.6811 5.18356 13.4016 4.63267V4.63267C14.1185 4.08457 15.1093 4.06908 15.8429 4.59451L17.1924 5.56102" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>Швидке прання при 30°C.</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M12.8349 7.63516L16 8.18986V3.89095L13.9709 3.19143M12.8349 7.63516V10.4087M12.8349 7.63516V6.06552M12.8349 10.4087C14.5179 13.2257 14.8991 15.2623 12.8349 15.4009C11.9852 15.3398 11.5141 14.9604 11.4164 14.2913M12.8349 10.4087C11.769 12.1297 11.2927 13.4432 11.4164 14.2913M12.661 2.73987L10.7706 2.08818C9.3945 4.58432 7.46789 4.86167 5.95413 2.08818L4.16324 2.73987M12.661 2.73987C12.8617 2.21244 13.0794 1.69679 13.2477 1.25586C13.4079 1.7851 13.7136 2.48665 13.9709 3.19143M12.661 2.73987C12.0994 4.21621 11.6714 5.78486 12.8349 6.06552M13.9709 3.19143C14.501 4.64375 14.8255 6.10974 13.2477 6.10974C13.0921 6.10974 12.955 6.09449 12.8349 6.06552M4.16514 7.63516L1 8.18986V3.89095L4.16324 2.73987M4.16514 7.63516L4.16324 2.73987M4.16514 7.63516L4.16324 14.2913H11.4164" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>Перед пранням вивернути навиворіт.</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                    <path d="M3.91892 1.78608V1.49414C3.91892 0.941856 4.36663 0.494141 4.91892 0.494141H5.08108C5.63337 0.494141 6.08108 0.941856 6.08108 1.49414V1.78608M3.91892 1.78608H4.5M3.91892 1.78608V1.78608C3.50097 1.78608 3.16216 2.12489 3.16216 2.54284V2.97036M6.08108 1.78608H5.53003M6.08108 1.78608V1.78608C6.43932 1.78608 6.72973 2.07649 6.72973 2.43473V2.97036M3.16216 2.97036H6.72973M3.16216 2.97036L1 5.98488H1.43243M6.72973 2.97036L8.73709 5.15982C8.90619 5.34426 9 5.58539 9 5.83561V12.6289C9 13.1811 8.55228 13.6289 8 13.6289H1.75363C1.33741 13.6289 1 13.2914 1 12.8752V12.554C1 12.3152 1.19361 12.1216 1.43243 12.1216V12.1216M1.43243 5.98488H4.21622C4.7685 5.98488 5.21622 6.4326 5.21622 6.98488V11.1216C5.21622 11.6739 4.7685 12.1216 4.21622 12.1216H1.43243M1.43243 5.98488V12.1216M7.39033 6.27395V6.27395C7.62441 6.05309 7.64016 5.68603 7.42586 5.44594L6.48791 4.39511C6.26507 4.14544 5.88011 4.12892 5.6367 4.35858V4.35858C5.40262 4.57944 5.38687 4.94649 5.60117 5.18659L6.53911 6.23742C6.76196 6.48708 7.14691 6.5036 7.39033 6.27395Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>Використовувати рідкі засоби для прання.</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.00004 0.722656H10.6618L12.1111 7.16553H7.85992H6.50727H5.34785H1V7.16553C1.00002 5.38637 2.44232 3.94409 4.22147 3.94409H10.1787" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.63006 8.58105L3.22266 10.8263M6.74118 8.58105V10.8263M7.85229 8.58105L10.4449 10.8263" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
                                </svg>
                            </div>
                            <div>Можна прасувати паром</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2.07692 5.36454L14.1923 15.064M2.07692 15.064L13.9231 5.36454M1 13.5822L7.86538 0.918945L15 13.5822H1Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>Не відбілювати</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M1 1.1582H13M1 1.1582V13.8387M1 1.1582L13 13.8387M13 1.1582V13.8387M13 1.1582L1 13.8387M13 13.8387H1" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.0986 7.49834C12.0986 10.3801 9.78745 12.71 6.94404 12.71C4.10063 12.71 1.78945 10.3801 1.78945 7.49834C1.78945 4.61662 4.10063 2.28671 6.94404 2.28671C9.78745 2.28671 12.0986 4.61662 12.0986 7.49834Z" stroke="black" stroke-width="0.7"/>
                                </svg>
                            </div>
                            <div>Не сушити в машинці.</div>
                        </div>
                        <div className={styles.careItem}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                                    <path d="M1 1.49307L16 12.7193M1 12.7193L16 1.49307" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.2605 6.96575C14.2605 10.1084 11.7399 12.6499 8.63824 12.6499C5.53656 12.6499 3.01602 10.1084 3.01602 6.96575C3.01602 3.82309 5.53656 1.28164 8.63824 1.28164C11.7399 1.28164 14.2605 3.82309 14.2605 6.96575Z" stroke="black" stroke-width="0.7"/>
                                </svg>
                            </div>
                            <div>Не чистити хімічно.</div>
                        </div>
                    </div>
                )}

                <button className={styles.button} onClick={pushHandler}>Bay</button>
            </div>
        </div> 
    )
}

export default Product