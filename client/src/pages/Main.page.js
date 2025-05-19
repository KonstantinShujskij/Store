import React from 'react'
import { FRONT_URL } from '../const'
import styles from '../styles/Main.module.css' 


function Main() {
    return (
        <>
            <div className={styles.photo}>
                <img className={styles.bg} src={`${FRONT_URL}/images/bg.png`} alt="bg" />
                <img className={styles.logo} src={`${FRONT_URL}/images/Logo2.svg`} alt="logo" />
            </div>
        </>
    )
}

export default Main