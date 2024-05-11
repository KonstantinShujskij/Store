import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import styles from './Categories.module.css' 

import { useSelector } from 'react-redux'
import * as staticSelectors from '../../../../redux/selectors/static.selectors'

import useCategory from '../../../../hooks/category.hook'
import useInput from '../../../../hooks/input.hook'


function Categories() {
    const isAdmin = true//useSelector(authSelectors.isAdmin)
    const Category = useCategory()

    const categories = useSelector(staticSelectors.categories)
    
    const title = useInput('')
    const [removeList, setRemoveList] = useState([])

    const [open, setOpen] = useState(false)   
    const [edit, setEdit] = useState(false)

    const togleToRemove = (id) => setRemoveList((prew) => {
        if(prew.includes(id)) { return prew.filter((item) => item !== id) }
        return [...prew, id]
    })

    const save = async () => { 
        if(await Category.add(title.value)) { 
            setEdit(false)
            title.clear()
        }
    }

    const remove = async () => { if(await Category.removeList(removeList)) { setRemoveList([]) } }

    return (
        <div className={styles.main}>
            <div className={styles.label} onClick={() => setOpen((prew) => !prew)}>Categories</div>

            {open && (
                <div className={styles.list}>
                    {isAdmin && (
                        <div className={styles.panel}>
                            {!edit && <div onClick={() => setEdit((prew) => !prew)}>edit</div>}
                            {edit && <>
                                <div onClick={() => save()}>save</div>
                                <div onClick={() => remove()}>remove</div>
                            </>}
                        </div>
                    )}

                    {categories.map((item) => 
                        <div className={styles.item} key={item.id}>
                            <Link to={`/catalog/${item?.id}`}>{item?.title}</Link>
                            {isAdmin && edit && 
                                <input 
                                    type="checkbox" 
                                    checked={removeList.includes(item?.id)} 
                                    onChange={() => togleToRemove(item?.id)}
                                />
                            }
                        </div>
                    )}
                    
                    {isAdmin && edit && <input className={styles.input} {...title.bind} />}
                </div>
            )}
        </div>
    )
}

export default Categories