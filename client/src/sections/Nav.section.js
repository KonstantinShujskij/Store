import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsApi from '../api/products.api'

import * as authSelectors from '../redux/selectors/auth.selectors'
import { useSelector } from 'react-redux'
import useAuth from '../hooks/auth.hook'


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
                <Link to="/account">Account</Link>
                <br />
            </>}

            {!isAuth && <>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/signup">Sign Up</Link>
                <br />
            </>}

            {isAdmin && <>
                <br />
                <Link to="/make-product">Make Product</Link>
            </>}

            <Link to="/about">About</Link>
            <br />
            <Link to="/info">Info</Link>

            <br />
            <Link to="/basket">Basket</Link>

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