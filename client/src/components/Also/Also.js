import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Also.module.css'
import useAlsoApi from '../../api/also.api'
import useLoad from '../../hooks/load.hook'
import * as authSelectors from '../../redux/selectors/auth.selectors'
import { FRONT_URL, IMG_SRC } from '../../const'


function Also({product}) {
    const Also = useAlsoApi()
    
    const isAdmin = useSelector(authSelectors.isAdmin)

    const [list, setList] = useState([])

    const load = async () => {
        const count = 3
        const data = await Also.get(count)

        if(data) {
            const n = count - data.length
            for(let i = 0; i < n; i++) { data.push(null) }

            setList(data) 
        }
    }

    useLoad(load)

    const setHandler = async (id=null) => {
        const also = await Also.set(id, product)
        if(!also) {return }

        await load()
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.head} onClick={() => load()}>You may also like</div>
            <div className={styles.list}>
                {list.map((also) => (
                    <div className={styles.item} key={also?._id}>
                        <div className={styles.photo}>
                            <img src={also?.photo? `${IMG_SRC}${also?.photo}`: `${FRONT_URL}/images/load.svg`} alt={also?.photo} />
                            {isAdmin &&
                                <div className={styles.popup} onClick={() => setHandler(also?._id)}>
                                    <div className={styles.btn}>Заменить</div>
                                </div>
                            }
                        </div>
                        <div className={styles.title}>{also?.title? also.title : 'Title'}</div>
                        <div className={styles.color}>Color</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Also