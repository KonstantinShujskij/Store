import React from 'react'

function createProprty() {
    return {
        id: parseInt(`${Date.now()}${Math.random() * 100}`).toString(16),
        title: '',
        min: '',
        max:''
    }
}

function Properties({ data=[], setData=()=>{} }) {
    const addProp = () => setData((prew) => [...prew, createProprty()])
    const removeProp = (id) => setData((prew) => prew.filter((item) => (item.id !== id)))

    const setProp = (id, value) => { 
        setData((prew) => prew.map((item) => {
            if(item.id !== id) { return item } 
            return {...item, ...value}
        }))
    }

    return (
        <div>
            <br />
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <input value={item.title} onChange={(e) => setProp(item.id, {title: e.target.value})} placeholder="title" />
                        <input value={item.min} onChange={(e) => setProp(item.id, {min: e.target.value})} placeholder="min-value"/>
                        <input value={item.max} onChange={(e) => setProp(item.id, {max: e.target.value})} placeholder="max-value"/>
                        <button onClick={() => removeProp(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <br />
            <button onClick={addProp}>Add Parametr</button>
            <br />
        </div>
    )
}

export default Properties