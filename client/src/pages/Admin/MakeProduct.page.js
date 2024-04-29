import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProductsApi from '../../api/products.api'
import useInput from '../../hooks/input.hook'
import useAlert from '../../hooks/alert.hook'
import Properties from '../../components/Properties'
import Colors from '../../components/Colors/Colors'
import useColors from '../../hooks/colors.hook'
import useLoad from '../../hooks/load.hook'
import useProperties from '../../hooks/properties.hook'


function MakeProduct() {
    const { id } = useParams()

    const Alert = useAlert()
    const productsApi = useProductsApi()

    const [categories, setCategories] = useState([])
    const [collections, setCollections] = useState([])

    const title = useInput()
    const desc = useInput()
    const price = useInput(0)

    const [category, setCategory] = useState(null)
    const [collection, setCollection] = useState(null) 

    const properties = useProperties()
    const colors = useColors()

    const load = async () => {
        if(!id) { return }

        const product = await productsApi.get(id)

        title.changeValue(product?.title)
        desc.changeValue(product?.desc)
        price.changeValue(product?.price)

        setCategory(product?.category)
        setCollection(product?.collection)

        product?.parametrs.forEach((item) => {
            properties.bind.addProp(item._id)
            properties.bind.setProp(item._id, item)
        })

        product.colorSchema.forEach((item) => {
            colors.bind.addColor(item.main, item._id)
            item.styles.forEach((color) => { colors.bind.addStyleColor(item._id, color) })
        })
    }

    useLoad(async () => {
        setCategories(await productsApi.categories())
        setCollections(await productsApi.collections()) 

        load()
    })

    const [isWaiting, setIsWaiting] = useState(false)

    const createHandler = async () => {
        if(isWaiting) { return Alert.pushError('Please wait') }

        const prop = properties.getValue()
        const colorsValue = colors.getValue()

        setIsWaiting(true)
        const product = await productsApi.create(title.value, desc.value, price.value, category, collection, prop, colorsValue)
        setIsWaiting(false)

        if(product) { return Alert.pushMess('Product has been created') }
    }

    return (
        <div className="d-flex f-coll">
            <input {...title.bind} placeholder="Title" />
            <textarea {...desc.bind} placeholder="Description" />
            <input {...price.bind} placeholder="Price" />
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                {categories.map((item) => <option value={item._id} key={item._id}>{item.title}</option>)}
            </select>
            <select value={collection} onChange={(event) => setCollection(event.target.value)}>
                {collections.map((item) => <option value={item._id} key={item._id}>{item.title}</option>)}
            </select>

            <Properties {...properties.bind} />
            <Colors {...colors.bind} />

            <button onClick={() => createHandler()}>Create</button>
        </div>
    )
}

export default MakeProduct