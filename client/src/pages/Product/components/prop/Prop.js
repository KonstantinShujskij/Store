import React, { useEffect } from 'react'
import useInput from '../../../../hooks/input.hook'
import List from '../List/List'
import styles from './Prop.module.css'


function Prop({prop, setValue}) {
    const handler = (value) => setValue(prop.title, value)

    const value = useInput(prop.min, handler)

    const verify = () => (parseFloat(value.value) >= prop.min && parseFloat(value.value) <= prop.max)

    useEffect(() => handler(prop.type === 'list'? prop.list[0] : prop.min), [prop])

    return (
        <div className={`${styles.prop} ${prop.type === 'list'? styles.listProp : null}`}>
            <div className={styles.title}>{prop.title}</div>

            {prop.type === 'range' && <div className={`${styles.inputWrap} ${verify()? null : styles.active}`}>
                <input className={styles.input} {...value.bind} />
                <div className={styles.error}>от {prop.min} до {prop.max}</div>
            </div>}
            
            {prop.type === 'list' && <List values={prop.list} callback={handler} />}
        </div>
    )
}

export default Prop