import {  useState } from 'react'


const noop = () => true

export default function useInput(defaultValue='', callback=noop, validation=noop) {
    const [value, setValue] = useState(defaultValue)

    const onChange = (event) => { 
        const tempValue = event.target.value

        if(!validation(tempValue)) { return }

        changeValue(tempValue)    
    }

    const changeValue = (newValue) => { 
        if(newValue !== value) { 
            setValue(newValue) 
            callback(newValue)
        } 
    }

    const clear = () => changeValue('')

    return {
        bind: { value, onChange },
        value,
        changeValue,
        clear
    }
}