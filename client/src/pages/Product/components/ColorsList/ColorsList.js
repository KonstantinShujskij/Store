import React, { useEffect, useState } from 'react'
import { FRONT_URL, IMG_SRC } from '../../../../const'
import styles from './ColorsList.module.css'

function ColorsList({list=[], handler=()=>{}, bg=''}) {
    const [current, setCurrent] = useState(list[0])

    const changeHandler = (item) => {
        handler(item)
        setCurrent(item)
    }

    const next = () => {
        const currentIndex = list.findIndex((item) => item.title === current.title)
        if(currentIndex + 1 >= list.length) { return changeHandler(list[0]) }
        changeHandler(list[currentIndex + 1])
    }

    const back = () => {
        const currentIndex = list.findIndex((item) => item.title === current.title)
        if(currentIndex - 1 < 0) { return changeHandler(list[list.length - 1]) }
        changeHandler(list[currentIndex - 1])
    }

    useEffect(() => changeHandler(list[0]), [bg])

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                {list.map((item) => (
                    <div key={item._id} onClick={() => changeHandler(item)} 
                        className={`${current?.title === item.title? styles.active : null}`}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className={styles.slider}>
                <div className={styles.left} onClick={back}>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="<"></img>
                </div>
                <div className={styles.photo}>
                    {bg && <img src={`${IMG_SRC}${bg}`} alt={current?.title} />}
                    <img src={`${IMG_SRC}${current?.src}`} alt={current?.title} />
                </div>
                <div className={styles.right} onClick={next}>
                    <img src={`${FRONT_URL}/images/up-arrow.svg`} alt=">"></img>
                </div>
            </div>
        </div>
    )
}

export default ColorsList