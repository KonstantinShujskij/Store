import React from 'react'
import { Route } from 'react-router-dom'

import Main from '../pages/Main.page'
import Signup from '../pages/Signup.page'
import Login from '../pages/Login.page'
import Product from '../pages/Product.page'
import Basket from '../pages/Basket.page'
import Catalog from '../pages/Catalog.page'
import Order from '../pages/Order.page'
import MakeOrder from '../pages/MakeOrder.page'
import About from '../pages/About.page'
import Info from '../pages/Info.page'
import LoginAdmin from '../pages/LoginAdmin.page'


const notAuthRoutes = (
    <>
        <Route path="/" element={<Main />} exact />
        <Route path="/admin" element={<LoginAdmin />} exact />       
        <Route path="/signup" element={<Signup />} exact />       
        <Route path="/login" element={<Login />} exact />
        
        <Route path="/about" element={<About />} exact />       
        <Route path="/info" element={<Info />} exact />

        <Route path="/catalog" element={<Catalog />} exact />
        <Route path="/catalog/:id" element={<Catalog />} exact />
        <Route path="/product/:id" element={<Product />} exact />
        <Route path="/basket" element={<Basket />} exact />
        <Route path="/make-order" element={<MakeOrder />} exact />
        <Route path="/order/:id" element={<Order />} exact />
        
        <Route path="*" element={<Main />} exact  />
    </>
)

export default notAuthRoutes
