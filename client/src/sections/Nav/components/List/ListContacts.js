import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import * as authSelectors from '../../../../redux/selectors/auth.selectors'

import styles from './List.module.css' 
import useInput from '../../../../hooks/input.hook'


function List({label, list, click, save, remove}) {
    const isAdmin = useSelector(authSelectors.isAdmin)
    
    const title = useInput('')
    const link = useInput('')
    const [ids, setIds] = useState([])

    const [open, setOpen] = useState(false)   
    const [edit, setEdit] = useState(false)

    const togle = (id) => setIds((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const saveHandler = async () => {         
        if(await save(title.value, link.value)) { 
            setEdit(false) 
            title.clear()
            link.clear()
        } 

    }

    const removeHandler = async () => { 
        if(await remove(ids)) { 
            setEdit(false) 
            setIds([]) 
        } 
    }

    const clickHandler = (link) => {
        setOpen(false)
        click(link)
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

        {list?.map((item) => 
            <div className={styles.item} key={item.id}>
                <div onClick={() => clickHandler(item?.link)} className={styles.link}>{item?.title}</div>
                {edit? <input type="checkbox" checked={ids.includes(item?.id)} onChange={() => togle(item?.id)}/> : null}
            </div>
        )}
        
        {edit? <input className={styles.input} placeholder="Назва соцмережі" type="text" key="title" {...title.bind} /> : null}
        {edit? <input className={styles.input} placeholder="url адреса" type="url" key="link" {...link.bind} /> : null}
    </div>

    return (
        <div className={styles.main}>
            {open? List : null}
            <div className={styles.label} onClick={() => setOpen((prew) => !prew)}>{label}</div>
        </div>
    )
}

export default List