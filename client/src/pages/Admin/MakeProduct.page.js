import React, { useEffect, useState } from 'react'
import useProductsApi from '../../api/products.api'
import useInput from '../../hooks/input.hook'
import useAlert from '../../hooks/alert.hook'


function MakeProduct() {
    const Alert = useAlert()
    const productsApi = useProductsApi()

    const [categories, setCategories] = useState([])
    const [collections, setCollections] = useState([])

    const title = useInput()
    const desc = useInput()
    const price = useInput(0)

    const [isWaiting, setIsWaiting] = useState(false)

    useEffect(() => {
        const load = async () => {
            setCategories(await productsApi.categories())
            setCollections(await productsApi.collections()) 
        }

        load()
    }, [])


    const createHandler = async () => {
        if(isWaiting) { return Alert.pushError('Please wait') }

        setIsWaiting(true)
        const product = await productsApi.create(title.value, desc.value, price.value)
        setIsWaiting(false)

        if(product) { return Alert.pushMess('Product has been created') }
    }

    return (
        <div className="d-flex f-coll">
            <input {...title.bind} placeholder="Title" />
            <textarea {...desc.bind} placeholder="Description" />
            <input {...price.bind} placeholder="Price" />
            <select>
                {categories.map((item) => <option value={item._id} key={item._id}>{item.title}</option>)}
            </select>
            <select>
                {collections.map((item) => <option value={item._id} key={item._id}>{item.title}</option>)}
            </select>
            <button onClick={() => createHandler()}>Create</button>
        </div>
    )
}

export default MakeProduct