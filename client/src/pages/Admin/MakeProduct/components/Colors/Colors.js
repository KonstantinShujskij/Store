import React, { useState } from 'react'
import { FRONT_URL, IMG_SRC } from '../../../../../constants'
import useInput from '../../../../../hooks/input.hook'
import style from './Colors.module.css'


function Colors({label, colors=[], setColors=()=>{}, newItem=()=>{}, active=()=>{}, root=null}) {
    const title = useInput() 

    const [current, setCurrent] = useState(null)
    const [removeList, setRemoveList] = useState([])

    const togle = (id) => setRemoveList((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const add = () => {
        const item = newItem(title.value)
        setColors((prew) => [...prew, item])
        title.clear()
        currentHandler(item._id)
    }

    const remove = () => setColors((prew) => prew.filter((item) => !removeList.includes(item._id)))

    const upHandler = (event) => {
        if(!event.target.files) { return }

        const files = Array.from(event.target.files)
        if(!files.length) { return }

        const type = 'image'
        const file = files[0]
        if(!file) { return }
        if(type && !file.type.match(type)) { return }

        const reader = new FileReader()            
        
        reader.onload = (ev) => {
            setColors((prew) => {
                return prew.map((item) => {
                    if(item._id === current) { return {...item, src: ev.target.result, file} }

                    return item
                })
            })
        }

        reader.readAsDataURL(file)
    }

    const currentHandler = (id) => {
        setCurrent(id)
        active(id)
    }

    const getCurrentColor = () => {
        const temp = colors.filter((item) => (item._id === current))
        if(temp.length) { return temp[0] }

        return null
    }

    const curentColor = getCurrentColor()

    const getSourse = (item) => {
        if(!item.src) { return `${FRONT_URL}/images/default.png` }
        return `${!item.file? IMG_SRC : ''}${item.src}`
    }

    return (
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.title}>{label}</div>
                <div className={style.label}>{root?.title}</div>
                <div className={style.control}>
                    <div className={style.button} onClick={remove}>Remove</div>
                    <div className={style.button} onClick={add}>Add</div>
                </div>
            </div>
            <div className={style.wrap}>
                {colors.map((item) => (
                    <div className={`${style.item} ${current === item._id? style.active : null}`} key={item._id}>
                        <input type="checkbox" checked={removeList.includes(item?._id)} onChange={() => togle(item?._id)} />
                        <div className={style.color} onClick={() => currentHandler(item._id)}>{item.title}</div>
                    </div>
                ))}

                <div className={style.item}>
                    <input {...title.bind} className={style.input} type="text" />
                </div>
            </div>
            {curentColor && (
                <div className={style.preview}>
                    <div className={style.photo}>
                        {root? <img src={getSourse(root)} alt="main" /> : null}
                        <img src={getSourse(curentColor)} alt="temp"/>
                    </div>
                    <label className={style.load}>
                        <input type="file" className="hide" onChange={upHandler} />
                        <div className={style.loadImg}>
                            <img src={`${FRONT_URL}/images/load.svg`} alt="load" />
                        </div>
                        <div className={style.loadLabel}>Добавтие изображение</div>
                    </label>
                </div>
            )}
        </div>
    )
}

export default Colors