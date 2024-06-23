import React, { useState } from 'react'
import style from './Colors.module.css'
import useInput from '../../../../../hooks/input.hook'


function Colors({label, colors, setColors, newItem=()=>{}, active=()=>{}, activeColor=''}) {
    const [removeList, setRemoveList] = useState([])
    const [current, setCurrent] = useState(null)

    const title = useInput()

    const add = () => {
        setColors((prew) => [...prew, newItem(title.value)])

        title.clear()
    }
    
    const togle = (id) => setRemoveList((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const remove = () => setColors((prew) => prew.filter((item) => !removeList.includes(item.id)))

    const currentHandler = (item) => {
        setCurrent(item.id)
        active(item)
    }


    return (
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.title}>{label}</div>
                <div className={style.label}>{activeColor}</div>
                <div className={style.control}>
                    <div className={style.button} onClick={remove}>Remove</div>
                    <div className={style.button} onClick={add}>Add</div>
                </div>
            </div>
            <div className={style.wrap}>
                {colors.map((item) => (
                    <div className={`${style.item} ${current === item.id? style.active : null}`}>
                        <input type="checkbox" checked={removeList.includes(item?.id)} onChange={() => togle(item?.id)} />
                        <div className={style.color} onClick={() => currentHandler(item)}>{item.title}</div>
                    </div>
                ))}

                <div className={style.item}>
                    <input {...title.bind} type="text" />
                </div>
            </div>
        </div>
    )
}

export default Colors