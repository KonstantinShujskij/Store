import React from 'react'
import { Route } from 'react-router-dom'

import Main from '../pages/Main.page'
import Signup from '../pages/Signup.page'
import Login from '../pages/Login.page'
import LoginAdmin from '../pages/LoginAdmin.page'
import Catalog from '../pages/Catalog.page'
import Product from '../pages/Product.page'
import Basket from '../pages/Basket.page'
import MakeOrder from '../pages/MakeOrder.page'
import Order from '../pages/Order.page'
import About from '../pages/About.page'
import Info from '../pages/Info/Info.page'
import Contract from '../pages/Info/sections/Contract/Contract.section'
import Policy from '../pages/Info/sections/Policy.section'
import DeliveryAndPayment from '../pages/Info/sections/DeliveryAndPayment.section'
import ReturnAndChange from '../pages/Info/sections/ReturnAndChange.section'


const notAuthRoutes = (
    <>
        <Route path="/" element={<Main />} exact />
        <Route path="/admin" element={<LoginAdmin />} exact />       
        <Route path="/signup" element={<Signup />} exact />       
        <Route path="/login" element={<Login />} exact />
        
        <Route path="/about" element={<About />} exact />       
        <Route path="/info" element={<Info />} exact />

        <Route path="/info" element={<Info />} exact >
            <Route path="offer-agreement" element={<Contract />} exact />
            <Route path="privacy-policy" element={<Policy />} exact />
            <Route path="delivery-and-payment" element={<DeliveryAndPayment />} exact />
            <Route path="return-and-change" element={<ReturnAndChange />} exact />
        </Route>

        <Route path="/catalog" element={<Catalog />} exact />
        
        <Route path="/product/:id" element={<Product />} exact />
        <Route path="/basket" element={<Basket />} exact />
        <Route path="/make-order" element={<MakeOrder />} exact />
        <Route path="/order/:id" element={<Order />} exact />
        
        <Route path="*" element={<Main />} exact  />
    </>
)

export default notAuthRoutes
