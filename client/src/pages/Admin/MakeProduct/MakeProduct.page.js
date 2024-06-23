import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductsApi from '../../../api/products.api'
import useInput from '../../../hooks/input.hook'
import styles from './MakeProduct.module.css'
import Photo from './Photo'
import useFiles from '../../../hooks/files.hook'
import useAlert from '../../../hooks/alert.hook'

import Properties from './components/Properties/Properties'
import useProperties from '../../../hooks/properties.hook'
import Tooltip from '../../../components/Tooltip/Tooltip'
import Material from './components/Material/Material'
import Colors from './components/Colors/Colors'


function MakeProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const Alert = useAlert()

    const productsApi = useProductsApi()

    const [category, setCategory] = useState('')
    const [collection, setCollection] = useState('') 

    const title = useInput()
    const desc = useInput()
    const price = useInput(0)

    const photos = useFiles()

    const properties = useProperties()
    const [materials, setMaterials] = useState([])


    useEffect(() => {
        const load = async () => {
            if(id) {
                const product = await productsApi.get(id)
                if(!product) { return }

                title.changeValue(product?.title)
                desc.changeValue(product?.desc)
                price.changeValue(product?.price)

                product.photos.forEach((photo) => {photos.add(`http://127.0.0.1:5000/static/images/${photo}`, {name: photo}, true) })
            
                properties.setProperties(product.prop)
                setMaterials(product.materials)
            }
        }

        load()
    }, [id])

    const makeHandler = async () => {
        const data = {title: title.value, desc: desc.value, price: price.value, prop: properties.list, materials, category, collection}
        let product = null

        if(!id) { product = await productsApi.create(data, photos.list) }
        else {
            const loadPhotos = photos.list.filter((item) => (!item.exist))
            const existPhotos = photos.list.filter((item) => (item.exist))
            product = await productsApi.update(id, data, loadPhotos, existPhotos) 
        }
        
        if(product) { 
            navigate(`/product/${product.id}`)
            Alert.pushMess('Product has been created')
        }
    }


    //frankenshtein!!!

    const [colors, setColors] = useState([
        {
            title: 'blue',
            id: 10,
            design: [ 
                {id: 12, title: 'light'},
                {id: 15, title: 'dark'}
            ]
        },
        {
            title: 'red',
            id: 112,
            design: [ 
                {id: 16, title: 'light'},
                {id: 13, title: 'pink'}
            ]
        }
    ]) 

    const [activeColor, setActiveColor] = useState(null)

    const designColors = () => {
        let color = colors.filter((item) => (item.id === activeColor.id))
        color = color.length > 0? color[0] : null

        if(color) { return color.design }

        return []
    }

    const setDesignColors = (id, next) => { 
        setColors((prew) => {
            let color = prew.filter((item) => (item.id === id))
            color = color.length > 0? color[0] : null

            const design = next(color.design)

            return prew.map((item) => {
                if(item.id === id) { return {...item, design}}
                return item
            })
        })
    }

    return (
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
                    <div className={styles.path}>categories / Tracksuits / {title.value}</div>
                    <div className={styles.save} onClick={() => makeHandler()}>Save</div>
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.info}>
                        <input {...title.bind} className={styles.title} placeholder="Title"/>
                        <textarea {...desc.bind} className={styles.description} placeholder="Description" />
                    </div>
                    <div className={styles.priceWrap}>
                        <input {...price.bind} className={styles.price}/>
                        <div>₴</div>
                    </div>
                </div>
                <Properties properties={properties} />
                <Tooltip />
                <Material list={materials} setList={setMaterials} />
                <Colors label="color" colors={colors} setColors={setColors} newItem={(title) => ({
                    id: `${Date.now().toString(16)}-${parseInt(Math.random() * 1000)}`,
                    title,
                    design: []
                })} active={setActiveColor}/>

                {activeColor && <Colors label="design" colors={designColors()} setColors={(next) => setDesignColors(activeColor.id, next)} newItem={(title) => ({
                    id: `${Date.now().toString(16)}-${parseInt(Math.random() * 1000)}`,
                    title
                })} activeColor={activeColor.title}/>}
            </div>
        </div> 
    )
}

export default MakeProduct