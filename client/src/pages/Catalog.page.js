import React, { useEffect, useState } from 'react'
import useProductsApi from '../api/products.api'

function Catalog() {
    const productsApi = useProductsApi()

    const [products, setCategories] = useState([])

    useEffect(() => {
        const load = async () => {
            setCategories(await productsApi.products())
        }

        load()
    }, [])
    
    

    return (
        <div>
            <div>Catalog</div>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.title} \ {product.desc} \ {product.price}$</li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog