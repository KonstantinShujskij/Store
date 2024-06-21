import React from 'react'
import style from './Property.module.css'
import List from '../List/List'
import Range from '../Range/Range'


function Property({ item, change, remove }) {
    const toggleHandler = () => { change(item.id, {type: item.type === 'list'? 'range' : 'list'}) }

    const title = {
        value: item.title,
        onChange: (event) => change(item.id, {title: event.target.value})
    } 

    const min = {
        value: item.min,
        onChange: (event) => change(item.id, {min: event.target.value})
    } 

    const max = {
        value: item.max,
        onChange: (event) => change(item.id, {min: event.target.value})
    } 

    const list = {
        values: item.list,
        add: (value) => change(item.id, {list: [...item.list, value]}),
        remove: (value) => change(item.id, {list: item.list.filter((item) => (item !== value))})
    }

    return (
        <div className={style.main}>
            <input className={style.input} {...title} placeholder="Title"/>
            <div className={style.value}>
                {item.type === 'list'? <List {...list} /> : <Range min={min} max={max} />}
            </div>
            <div className={style.button} onClick={toggleHandler}>
                <img src={'./images/mage.svg'} />
            </div>
            <div className={style.button} onClick={() => remove(item.id)}>
                <img src={'./images/close.svg'} />
            </div>
        </div>
    )
}

export default Property