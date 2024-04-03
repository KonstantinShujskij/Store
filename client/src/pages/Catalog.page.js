import React, { useEffect, useState } from 'react'
import useProductsApi from '../api/products.api'
import { useParams } from 'react-router-dom'
import Product from '../components/Product/Product'


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
            {products.map((product) => <Product product={product} key={product._id} />)}
        </div>
    )
}

export default Catalog