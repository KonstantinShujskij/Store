import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { FRONT_URL } from '../constants'
import styles from '../styles/Account.module.css' 


function Account() {
    return (
        <div className={styles.wrap}>
            <div className={styles.image}>
                <img src={`${FRONT_URL}/images/account.svg`} alt="people" />
            </div>

            <div className={styles.form}>
                <div className={styles.links}>
                    <NavLink to="/account/main">My account</NavLink>
                    <NavLink to="/account/info">My information</NavLink>
                    <NavLink to="/account/orders">My order</NavLink>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default Account