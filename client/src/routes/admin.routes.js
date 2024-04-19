import React from 'react'
import { Route } from 'react-router-dom'

import MakeProduct from '../pages/Admin/MakeProduct.page'
import Orders from '../pages/Admin/Orders.page'
import Order from '../pages/Admin/Order.page'
import Main from '../pages/Main.page'


const adminRoutes = (
    <>       
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/order/:id" element={<Order />} exact />
        
        <Route path="/make-product/:id" element={<MakeProduct />} exact />       
        <Route path="/make-product" element={<MakeProduct />} exact />     

        <Route path="/admin" element={<Main />} exact />         
    </>
)     

export default adminRoutes