import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsApi from '../api/products.api'


function Main() {
    const productsApi = useProductsApi()

    const [categories, setCategories] = useState([])
    const [collections, setCollections] = useState([])

    useEffect(() => {
        const load = async () => {
            setCategories(await productsApi.categories())
            setCollections(await productsApi.collections()) 
        }

        load()
    }, [])

    return (
        <div>
            <h1>Main</h1>

            <Link to="/about">About</Link>
            <br />
            <Link to="/info">Info</Link>

            <ul>
                {categories.map((item) => (
                    <li key={item?.id}>
                        <Link to={`/catalog/${item?.id}`}>{item?.title}</Link>
                    </li>
                ))}
            </ul>

            <ul>
                {collections.map((item) => (
                    <li key={item?._id}>
                        <Link to={`/catalog/${item?._id}`}>{item?.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Main