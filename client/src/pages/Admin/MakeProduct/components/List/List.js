import React from 'react'
import useInput from '../../../../../hooks/input.hook'
import styles from './List.module.css'


function List({values=[], add, remove}) {
    const newVal = useInput()

    const addHandler = () =>  {
        add(newVal.value)
        newVal.clear()
    }

    return (
        <div className={styles.main}>
            <div className={styles.list}>
                {values.map((item) => (
                    <div className={styles.item}>
                        <div className={styles.title}>{item}</div>
                        <div className={styles.button} onClick={() => remove(item)}>-</div>
                    </div>
                ))}
            </div>
            <div className={styles.control}>
                <input className={styles.input} {...newVal.bind} placeholder="cm"/>
                <div className={styles.button} onClick={addHandler}>+</div>
            </div>
        </div>
    )
}

export default List