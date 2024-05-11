import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import * as authSelectors from '../../../../redux/selectors/auth.selectors'

import useInput from '../../../../hooks/input.hook'

import styles from './List.module.css' 


function List({label, list, click, save, remove}) {
    const isAdmin = true //useSelector(authSelectors.isAdmin)
    
    const value = useInput('')
    const [ids, setIds] = useState([])

    const [open, setOpen] = useState(false)   
    const [edit, setEdit] = useState(false)

    const togle = (id) => setIds((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const saveHandler = async () => { 
        if(await save(value.value)) { 
            setEdit(false) 
            value.clear()
        } 

    }
    const removeHandler = async () => { 
        if(await remove(ids)) { 
            setEdit(false) 
            setIds([]) 
        } 
    }

    const Panel = <div className={styles.panel}>
        {edit && <>
            <div onClick={() => saveHandler()}>save</div>
            <div onClick={() => removeHandler(ids)}>remove</div>
        </>}
        {!edit && <div onClick={() => setEdit((prew) => !prew)}>edit</div>}
    </div>
    
    const List = <div className={styles.list}>
        {isAdmin? Panel : null}

        {list.map((item) => 
            <div className={styles.item} key={item.id}>
                <div onClick={() => click(item?.id)} className={styles.link}>{item?.title}</div>
                {edit? <input type="checkbox" checked={ids.includes(item?.id)} onChange={() => togle(item?.id)}/> : null}
            </div>
        )}
        
        {edit? <input className={styles.input} {...value.bind} /> : null}
    </div>

    return (
        <div className={styles.main}>
            {open? List : null}
            <div className={styles.label} onClick={() => setOpen((prew) => !prew)}>{label}</div>
        </div>
    )
}

export default List