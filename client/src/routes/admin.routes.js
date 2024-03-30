import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Account from '../pages/Account.page'
import MakeProduct from '../pages/Admin/MakeProduct.page'
import Orders from '../pages/Admin/Orders.page'
import Order from '../pages/Admin/Order.page'


const adminRoutes = (
    <>
        <Route path="/account" element={<Account />} exact />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/order/:id" element={<Order />} exact />
        
        <Route path="/make-product/:id" element={<MakeProduct />} exact />       
    </>
)     

export default adminRoutes