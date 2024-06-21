import React, { useState } from 'react'
import style from './Material.module.css'
import useInput from '../../../../../hooks/input.hook'


function Material() {
    const [list, setList] = useState([])
    const [removeList, setRemoveList] = useState([])

    const value = useInput()

    const add = () => {
        setList((prew) => {
            return [...prew, {id: `${Date.now().toString(16)}-${parseInt(Math.random() * 1000)}`, title: value.value}] 
        })
        value.clear()
    }

    const togle = (id) => setRemoveList((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const remove = () => {
        setList((prew) => prew.filter((item) => !removeList.includes(item.id)))
    }

    return (
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.title}>MATERIAL</div>
                <div className={style.control}>
                    <div className={style.button} onClick={remove}>Remove</div>
                    <div className={style.button} onClick={add}>Add</div>
                </div>
            </div>
            <div className={style.list}>
                {list.map((item) => (
                    <div className={style.item} key={item.id}>
                        <input type="checkbox" checked={removeList.includes(item?.id)} onChange={() => togle(item?.id)} />
                        <div className={style.label}>{item.title}</div>
                    </div>
                ))}
            </div>
            <input className={style.input} {...value.bind} />
        </div>
    )
}

export default Material