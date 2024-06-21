import React, { useState } from 'react'
import style from './Tooltip.module.css'

function Tooltip() {
    const [open, setOpen] = useState(false)
    const [man, setMan] = useState(true)
    const [main, setMain] = useState(false)

    return (
        <div>
            <div className={style.button} onClick={() => setOpen((prew) => !prew)}>Як зняти заміри?</div>
            {open && 
                <div className={style.main}>
                    <div className={style.image}>
                        {main && man && <img src="http://127.0.0.1:3000/images/tooltip-four.svg" alt="tooltip-four" />}
                        {main && !man && <img src="http://127.0.0.1:3000/images/tooltip-three.svg" alt="tooltip-three" />}
                        {!main && man && <img src="http://127.0.0.1:3000/images/tooltip-one.svg" alt="tooltip-one" />}
                        {!main && !man && <img src="http://127.0.0.1:3000/images/tooltip-two.svg" alt="tooltip-two" />}
                    </div>
                    <div className={style.info}>
                        <div className={style.top}>
                            <div className={`${style.link} ${man? null : style.active}`} onClick={() => setMan(false)}>Жіночі</div>
                            <div className={`${style.link} ${man? style.active : null}`} onClick={() => setMan(true)}>Чоловічі</div>
                        </div>
                        <div className={style.wrap}>
                            {main && man && <>
                                <p>
                                    Вимірювання слід проводити з мінімумом одягу, не дуже затягуючи 
                                    і не дуже відпускаючи мірну стрічку.
                                    При знятті мірок стійте прямо, без
                                    напруги та не сутулячись, не згинайте ногу в коліні.
                                </p>
                                <p>
                                    <span className={style.sub}>Обхват талії</span>  - де зазвичай носите штани.
                                </p>
                                <p>
                                    <span className={style.sub}>Обхват стегон</span> - по найвиступаючих точках сідниць.
                                </p>
                            </>}
    
                            {!main && man && <>
                                <p>
                                    <span className={style.sub}>Довжина виробу</span> - вимірюється, 
                                    починаючи від заснування шиї (або початок плечового шва) через найвиступаючу 
                                    точку грудей до кінця довжини виробу.
                                </p>
                                <p>
                                    <span className={style.sub}>Довжина рукава</span> - необхідно вимірювати від 
                                    заснування шиї (або початок плечового шва) до кінця рукава. 
                                </p>
                                <p>
                                    <span className={style.sub}>Довжина штанів</span> -  вимірюється від талії 
                                    (рівень на якому зазвичай носите штани) до підлоги.
                                </p>
                            </>}
    
                            {main && !man && <>
                                <p>
                                    Вимірювання слід проводити з мінімумом одягу, не дуже затягуючи 
                                    і не дуже відпускаючи мірну стрічку.
                                    При знятті мірок стійте прямо, без
                                    напруги та не сутулячись, не згинайте ногу в коліні.
                                </p>
                                <p>
                                    <span className={style.sub}>Обхват талії</span> - де зазвичай носите штани. 
                                </p>
                                <p>
                                    <span className={style.sub}>Обхват стегон</span> - по найвиступаючих точках сідниць.
                                </p>
                            </>}
    
                            {!main && !man && <>
                                <p>
                                    <span className={style.sub}>Довжина  виробу</span> - вимірюється, починаючи від 
                                    заснування шиї (або початок плечового шва) через найвиступаючу точку грудей до 
                                    кінця довжини виробу.
                                </p>
                                <p>
                                    <span className={style.sub}>Довжина рукава</span> - необхідно вимірювати від 
                                    заснування шиї (або початок плечового шва) до кінця рукава.  
                                </p>
                                <p>
                                    <span className={style.sub}>Довжина штанів</span> -  вимірюється від талії 
                                    (рівень на якому зазвичай носите штани) до підлоги.
                                </p>
                            </>}
                        </div>
                        <div className={style.bottom}>
                            <div className={`${style.link} ${main? style.active : null}`} onClick={() => setMain(true)}>Основні</div>
                            <div className={`${style.link} ${main? null : style.active}`} onClick={() => setMain(false)}>Додаткові</div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default Tooltip