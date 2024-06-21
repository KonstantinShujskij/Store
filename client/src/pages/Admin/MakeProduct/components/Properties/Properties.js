import React from 'react'
import Property from '../Property/Property'
import style from './Properties.module.css'


function Properties({properties}) {
    return (
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.title}>SIZE</div>
                <button className={style.button} onClick={properties.bind.add}>Add</button>
            </div>
            {properties.list.map((item) => <Property {...properties.bind} item={item} key={item.id} />)}
        </div>
    )
}

export default Properties