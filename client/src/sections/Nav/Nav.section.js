import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsApi from '../../api/products.api'

import * as authSelectors from '../../redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'
import useAuth from '../../hooks/auth.hook'

import AdminNav from './AdminNav'
import ClientNav from './ClientNav'


function Nav() {
    const isAuth = useSelector(authSelectors.isAuth)
    const isAdmin = useSelector(authSelectors.isAdmin)

    const productsApi = useProductsApi()
    const { logout } = useAuth()

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
            <br />
            <h4>Menu</h4>

            {isAuth && <>
                <Link onClick={logout}>Logout</Link>
                <br />
            </>}

            {!isAuth && <>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/signup">Sign Up</Link>
                <br />
            </>}

            {isAuth && <>
                {isAdmin && <AdminNav />}
                {!isAdmin && <ClientNav />}
            </>}

            {!isAdmin && <>
                <Link to="/basket">Basket</Link>
                <br />
            </>}

            <Link to="/about">About</Link>
            <br />
            <Link to="/info">Info</Link>
            <br />

            <ul>
                {categories.map((item) => (
                    <li key={item?.id}>
                        <Link to={`/catalog/${item?._id}`}>{item?.title}</Link>
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

export default Nav