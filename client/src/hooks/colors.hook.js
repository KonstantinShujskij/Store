import { useState } from 'react'


function createStyleColor(value, _id) {
    return {
        id: _id? _id : parseInt(`${Date.now()}${Math.random() * 10000}`).toString(16),
        value: value
    }
}

function createColor(value, _id) {
    return {...createStyleColor(value, _id), styles: []}
}

export default function useColors() {
    const [colors, setColors] = useState([])

    const addColor = (value, _id) => setColors((prew) => [...prew, createColor(value, _id)])
    const addStyleColor = (id, value) => setColors((prew) => prew.map((item) => {
        if(item.id !== id) { return item }

        return {...item, styles: [...item.styles, createStyleColor(value)]} 
    }))

    const removeColor = (id) => setColors((prew) => prew.filter((item) => (item.id !== id)))
    const removeStyleColor = (id, colorId) => setColors((prew) => prew.map((item) => {
        if(item.id !== id) { return item }

        return {...item, styles: item.styles.filter((item) => (item.id !== colorId))} 
    }))

    const getValue = () => colors.map((item) => ({
        value: item.value,
        styles: item.styles.map((item) => item.value)
    }))

    return {
        bind: { colors, addColor, addStyleColor, removeColor, removeStyleColor },
        colors,
        getValue
    }
}