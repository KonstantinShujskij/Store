import {  useState } from 'react'


const noop = () => true

export default function useInputContacts(defaultValue='', callback=noop, validation=noop) {
    const [title, setTitle] = useState(defaultValue)
    const [link, setLink] = useState(defaultValue)
    // const [value, setValue] = useState()

    const onChange = (event) => {        
        const {key, value} = event.target

        switch (key) {
            case 'title':
                setTitle(value)
                break
            case 'link':
                setLink(value)
                break
            default: return
        }
        // if(!validation(tempValue)) { return }

        // changeValue(tempValue)    
    }

    // const changeValue = (newValue) => { 
    //     if(newValue !== value) { 
    //         setValue(newValue) 
    //         callback(newValue)
    //     } 
    // }

    const clear = () => onChange('')

    return {
        bindTitle: { title, onChange },
        bindLink: { link, onChange},
        onChange,
        clear
    }
}