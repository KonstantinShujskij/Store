import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsApi from '../api/products.api'


function Main() {
    const productsApi = useProductsApi()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const load = async () => setCategories(await productsApi.categories())

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
        </div>
    )
}

export default Main