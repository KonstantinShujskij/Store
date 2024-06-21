import React from 'react'

import styles from './MakeProduct.module.css'


function Photo({src, id, remove=()=>{}, alt='some image'}) {
    return (
        <div className={styles.photo}>
            <img src={src} alt={alt} />
            <div className={styles.photoPopup}>
                <div className={styles.label} onClick={() => remove(id)}>Удалить</div>
            </div>
        </div>
    )
}

export default Photo