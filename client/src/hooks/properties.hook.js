import {  useState } from 'react'


function createProprty() {
    return {
        _id: parseInt(`${Date.now()}${Math.random() * 100}`).toString(16),
        title: '',
        min: '',
        max:''
    }
}


export default function useProperties() {
    const [values, setValues] = useState([]) 

    const addProp = () => setValues((prew) => [...prew, createProprty()])
    const removeProp = (_id) => setValues((prew) => prew.filter((item) => (item._id !== _id)))

    const setProp = (_id, value) => { 
        setValues((prew) => prew.map((item) => {
            if(item._id !== _id) { return item } 
            return {...item, ...value}
        }))
    }

    const getValue = () => values.map((item) => ({
        title: item.title,
        min: item.min,
        max: item.max
    }))

    return {
        bind: { values, addProp, removeProp, setProp },
        values,
        getValue
    }
}