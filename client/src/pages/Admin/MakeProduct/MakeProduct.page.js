import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IMG_SRC } from '../../../const'

import useProductsApi from '../../../api/products.api'

import useInput from '../../../hooks/input.hook'
import useFiles from '../../../hooks/files.hook'
import useAlert from '../../../hooks/alert.hook'
import useProperties from '../../../hooks/properties.hook'

import * as staticSelectors from '../../../redux/selectors/static.selectors'

import Properties from './components/Properties/Properties'
import Select from '../../../components/UI/Select/Select'
import Tooltip from '../../../components/Tooltip/Tooltip'
import Material from './components/Material/Material'
import ColorProp from './components/ColorProp'
import Also from '../../../components/Also/Also'
import Photo from './Photo'

import styles from './MakeProduct.module.css'


function MakeProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const productsApi = useProductsApi()
    const Alert = useAlert()

    const categories = useSelector(staticSelectors.categories)
    const collections = useSelector(staticSelectors.collections)

    const [category, setCategory] = useState('')
    const [collection, setCollection] = useState('')
    const [also, setAlso] = useState('')

    const title = useInput()
    const desc = useInput()
    const price = useInput(0)

    const photos = useFiles()

    const properties = useProperties()
    const [materials, setMaterials] = useState([])
    const [colors, setColors] = useState([]) 

    useEffect(() => {
        const load = async () => {
            if(!id) { return }

            const product = await productsApi.get(id)
            if(!product) { return }

            title.changeValue(product?.title)
            desc.changeValue(product?.desc)
            price.changeValue(product?.price)

            product.photos.forEach((photo) => {photos.add(`${IMG_SRC}${photo}`, {name: photo}, true) })
        
            properties.setProperties(product.prop)
            setMaterials(product.materials)
            setColors(product.colors)      
            setCategory({id: product.category, title: product.categoryTitle})        
            setCollection({id: product.collection, title: product.collectionTitle}) 
            setAlso({id: product.id})       
        }

        load()
    }, [id])

    const makeHandler = async () => {   
        const data = {
            title: title.value, 
            desc: desc.value, 
            price: price.value, 
            prop: properties.list, 
            materials, 
            colors, 
            category: category.id, 
            collection: collection.id
        }

        if(id) { 
            const loadPhotos = photos.list.filter((item) => (!item.exist))
            const existPhotos = photos.list.filter((item) => (item.exist))

            const product = await productsApi.update(id, data, loadPhotos, existPhotos) 
            if(product) { Alert.pushMess('Product has been updated')}

            return
        }

        const product = await productsApi.create(data, photos.list) 
        if(!product) { return }

        Alert.pushMess('Product has been created')
        photos.clear()
        navigate(`/product/${product.id}`)
    }

    return (<>
        <div className={styles.main}>
            <div className={styles.photos}>
                <div className={styles.load}>
                    <label htmlFor="file" className={styles.label}>Завантажити</label>
                    <input type="file" id="file" className="hide" onChange={photos.upload}></input>
                </div>

                {photos.list.map((photo) => <Photo src={photo.img} id={photo.id} remove={photos.remove} alt={photo?.file?.title} key={photo.id} />)}
            </div>

            <div className={styles.form}>
                <div className={styles.top}>
                    <div className={styles.path}>categories / {category?.title} / {title.value}</div>
                    <div className={styles.save} onClick={() => makeHandler()}>Save</div>
                </div>

                <div className={styles.infoWrap}>
                    <div className={styles.info}>
                        <input {...title.bind} className={styles.title} placeholder="Title"/>
                        <textarea {...desc.bind} className={styles.description} placeholder="Description" />
                        <div className={styles.lists}>
                            <Select list={categories} current={category.title} handler={setCategory} placeholder="Category" />
                            <Select list={collections} current={collection.title} handler={setCollection} placeholder="Collection" />
                        </div>
                    </div>
                    <div className={styles.priceWrap}>
                        <input {...price.bind} className={styles.price}/>
                        <div>₴</div>
                    </div>
                </div>

                <Properties properties={properties} />
                <Tooltip />
                <Material list={materials} setList={setMaterials} />
                <ColorProp colors={colors} setColors={setColors} />
            </div>
        </div>
        <Also productId={also} setList={setAlso}/>
    </>)
}

export default MakeProduct