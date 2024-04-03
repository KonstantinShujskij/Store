import React from 'react'



function Properties({ values, addProp, removeProp, setProp }) {
    return (
        <div>
            <br />
            <div>
                {values.map((item) => (
                    <div key={item._id}>
                        <input value={item.title} onChange={(e) => setProp(item._id, {title: e.target.value})} placeholder="title" />
                        <input value={item.min} onChange={(e) => setProp(item._id, {min: e.target.value})} placeholder="min-value"/>
                        <input value={item.max} onChange={(e) => setProp(item._id, {max: e.target.value})} placeholder="max-value"/>
                        <button onClick={() => removeProp(item._id)}>Remove</button>
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