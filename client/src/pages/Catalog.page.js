import React, { useEffect, useState } from 'react'
import useProductsApi from '../api/products.api'
import { useParams } from 'react-router-dom'


function Catalog() {
    const { id } = useParams()
    const productsApi = useProductsApi()

    const [products, setCategories] = useState([])

    useEffect(() => {
        const load = async () => {
            setCategories(await productsApi.products({category: id}))
        }

        load()
    }, [])
    
    
    return (
        <div>
            <div>Catalog {id}</div>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.title} \ {product.category} \ {product.price}$</li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog