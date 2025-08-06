import React, { useState } from 'react'
import ColorsList from '../ColorsList/ColorsList'
import { FRONT_URL } from '../../../../constants'
import styles from '../../Product.module.css'


function Colors({list=[], handler=()=>{}}) {
    const [color, setColor] = useState(list[0] || null)

    const [colorOpen, setColorOpen] = useState(false)
    const [designOpen, setDesignOpen] = useState(false)

    const colorHandler = (color) => {
        setColor(color)
        handler(color.title, color.design[0].title)
    }

    const designHandler = (design) => handler(color, design)

    return (
        <div>
            <h3 className={`${styles.title} ${colorOpen? styles.open : null}`} onClick={() => setColorOpen((prew) => !prew)}>
                <span>color</span>
                <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^"/>
            </h3>
            {colorOpen && <ColorsList list={list} handler={colorHandler} />}

            <h3 className={`${styles.title} ${designOpen? styles.open : null}`} onClick={() => setDesignOpen((prew) => !prew)}>
                <span>Design</span>
                <img src={`${FRONT_URL}/images/up-arrow.svg`} alt="^"/>
            </h3>
            {designOpen && <ColorsList list={color.design} handler={designHandler} bg={color?.src}/>}
        </div>
    )
}

export default Colors