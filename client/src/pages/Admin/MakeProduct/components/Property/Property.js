import React from 'react'
import style from './Property.module.css'
import List from '../List/List'
import Range from '../Range/Range'
import { FRONT_URL } from '../../../../../const'


function Property({ item, change, remove }) {
    const toggleHandler = () => { change(item._id, {type: item.type === 'list'? 'range' : 'list'}) }

    const title = {
        value: item.title,
        onChange: (event) => change(item._id, {title: event.target.value})
    } 

    const min = {
        value: item.min,
        onChange: (event) => change(item._id, {min: event.target.value})
    } 

    const max = {
        value: item.max,
        onChange: (event) => change(item._id, {max: event.target.value})
    } 

    const list = {
        values: item.list,
        add: (value) => change(item._id, {list: [...item.list, value]}),
        remove: (value) => change(item._id, {list: item.list.filter((item) => (item !== value))})
    }

    return (
        <div className={style.main}>
            <input className={style.input} {...title} placeholder="Title"/>
            <div className={style.value}>
                {item.type === 'list'? <List {...list} /> : <Range min={min} max={max} />}
            </div>
            <div className={style.button} onClick={toggleHandler}>
                <img src={`${FRONT_URL}/images/mage.svg`} alt="ico" />
            </div>
            <div className={style.button} onClick={() => remove(item._id)}>
                <img src={`${FRONT_URL}/images/close.svg`} alt="ico" />
            </div>
        </div>
    )
}

export default Property