import React from 'react'
import { Route } from 'react-router-dom'

import Account from '../pages/Account.page'
import Main from '../pages/Main.page'
import Orders from '../pages/Orders.page'


const authRoutes = (
    <>
        <Route path="/account" element={<Account />} exact />
        <Route path="/orders" element={<Orders />} exact />
        
        <Route path="/signup" element={<Main />} exact />       
        <Route path="/login" element={<Main />} exact />
    </>
)     

export default authRoutes