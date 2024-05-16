import React from 'react'
import { Route } from 'react-router-dom'

import Account from '../pages/Account.page'
import Main from '../pages/Main.page'
import Orders from '../pages/Orders.page'
import MyAccount from '../sections/MyAccount.section'
import MyInfo from '../sections/MyInfo.section'
import MyOrders from '../sections/MyOrders.section'


const authRoutes = (
    <>
        <Route path="/account" element={<Account />} exact >
            <Route path="main" element={<MyAccount />} exact />
            <Route path="info" element={<MyInfo />} exact />
            <Route path="orders" element={<MyOrders />} exact />
        </Route>
        <Route path="/orders" element={<Orders />} exact />
        
        <Route path="/signup" element={<Main />} exact />       
        <Route path="/login" element={<Main />} exact />
    </>
)     

export default authRoutes