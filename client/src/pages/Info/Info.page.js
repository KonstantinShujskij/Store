import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import styles from './Info.module.css'


function Info() {
    return (
        <>
            <div className={styles.menu}>
                <NavLink to="/info/offer-agreement">Договір оферти</NavLink>
                <NavLink to="/info/privacy-policy">Політика конфідецільності</NavLink>
                <NavLink to="/info/delivery-and-payment">Доставка та оплата</NavLink>
                <NavLink to="/info/return-and-change">Обмін та повернення</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Info