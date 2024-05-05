import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useLoad from '../../../../hooks/load.hook'
import useProductsApi from '../../../../api/products.api'

import styles from './Categories.module.css' 


function Categories() {
    const productsApi = useProductsApi()

    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState([])

    useLoad(async () => { setCategories(await productsApi.categories()) })

    return (
        <div className={styles.main}>
            <div className={styles.label} onClick={() => setOpen((prew) => !prew)}>Categories</div>

            {open && (
                <div className={styles.list}>
                    {categories.map((item) => (
                        <Link className={styles.item} to={`/catalog/${item?._id}`}>{item?.title}</Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Categories