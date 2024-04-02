import React from 'react'

function Color({onClick, value}) {
    return (
        <div 
            className="color" 
            style={{backgroundColor: value}} 
            onClick={onClick}
        />
    )
}

export default Color