import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Also.module.css'
import useAlsoApi from '../../api/also.api'
// import useLoad from '../../hooks/load.hook'
import * as authSelectors from '../../redux/selectors/auth.selectors'
import { IMG_SRC } from '../../const'


function Also({product}) {
    const Also = useAlsoApi()
    const navigate = useNavigate()
    const isAdmin = useSelector(authSelectors.isAdmin)

    const [popa, setPopa] = useState([null, null])

    const load = async () => {
        const count = 3
        const data = await Also.get(count)
        const len = data.length? data.length : 0
        
        // for(let i = 0; i < count - len; i++) { data.push({}) }

        // setList(data) 
        setPopa(data)
    }

    // useLoad(load)

    const setHandler = async (id=null) => {
        const also = await Also.set(id, product)
        if(!also) {return }

        await load()
    }


      

    const clickHandler = (id) => navigate(`/product/${id}`)
    
    return (
        <div className={styles.main}>
            <div className={styles.title} onClick={() => load()}>You may also like</div>
            <div className={styles.list}>
                {popa.map((also) => (
                    <div className={styles.item} 
                        key={Date.now().toString(16)} 
                        onClick={() => clickHandler(also?.id)} 
                    >
                        {isAdmin && onClick={() => setHandler(also?.id)}
                        <div className={styles.photo}>
                            <img src={`${IMG_SRC}${also?.photo}`} alt={also?.photo} />
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