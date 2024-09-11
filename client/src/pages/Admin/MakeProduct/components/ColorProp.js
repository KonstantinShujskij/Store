import React, { useState } from 'react'
import Colors from './Colors/Colors'
import {getTempId} from '../../../../utils'


function ColorProp({ colors, setColors }) {
    const [mainColor, setMainColor] = useState(null)

    const setDesignColors = (next) => { 
        if(!mainColor) { return }

        setColors((prew) => {
            return prew.map((item) => {
                if(item._id === mainColor) { return {...item, design: next(item.design)}}
                return item
            })
        })
    }

    const getActiveColor = () => {
        const temp = colors.filter((item) => (item._id === mainColor))
        if(temp.length) { return temp[0] }

        return null
    }

    const activeColor = getActiveColor()

    const newColorItem = (title) => ({ _id: getTempId(), title, design: [] })
    const newDesignItem = (title) => ({ _id: getTempId(), title })

    return (
        <>
            <Colors label="color" colors={colors} 
                setColors={setColors} newItem={newColorItem} active={setMainColor} />

            {activeColor && <Colors label="design" colors={activeColor.design} 
                setColors={setDesignColors} newItem={newDesignItem} root={activeColor} 
            />}
        </>
    )
}

export default ColorProp