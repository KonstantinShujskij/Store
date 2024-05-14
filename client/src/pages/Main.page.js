import React from 'react'

import styles from '../styles/Main.module.css' 



function Main() {
    return (
        <>
            <div className={styles.photo}>
                <img className={styles.bg} src="./images/bg.png" alt="bg" />
                <img className={styles.logo} src="./images/logo2.svg" alt="logo" />
            </div>
        </>
    )
}

export default Main