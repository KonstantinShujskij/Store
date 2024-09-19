import {  useState } from 'react'


export default function useProperties() {
    const [properties, setProperties] = useState([]) 

    const add = () => {
        setProperties((prew) => {
            return [...prew, {
                type: 'range',
                title: '',
                min: 0,
                max: 0,
                list: [],
                _id: `${Date.now().toString(16)}-${parseInt(Math.random() * 1000)}`
            }]
        })
    }

    const change = (id, value) => {
        setProperties((prew) => {
            return prew.map((item) => { 
                if(item._id !== id) { return item }
                return {...item, ...value}
            })
        })
    } 

    const remove = (id) => {
        setProperties((prew) => {
            return prew.filter((item) => (item._id !== id))
        })
    }

    return {
        list: properties,
        setProperties,
        bind: { properties, add, change, remove }
    }
}