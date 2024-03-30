import { Routes } from 'react-router-dom'

import notAuthRoutes from './notAuth.routes'
import authRoutes from './auth.routes'
import adminRoutes from './admin.routes'


export const useRoutes = (isAuth=false, isAdmin=false) => {
    return (
        <Routes>
            { isAdmin && adminRoutes }
            { isAuth && authRoutes }
            { notAuthRoutes }
        </Routes>
    )
}