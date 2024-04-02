import React from 'react'
import useInput from '../../hooks/input.hook'
import Color from './Color'


function Colors({ colors, addColor, addStyleColor, removeColor, removeStyleColor }) {
    const mainColor = useInput('#000000')
    const styleColor = useInput('#000000')

    return (
        <div>
            <br />

            <div>
                {colors.map((item) => (
                    <div className="d-flex" key={item.id}>
                        <Color value={item.value} onClick={() => removeColor(item.id)} />
                            
                        <div className="d-flex ml-auto mr-auto">
                            {item.styles.map((color) => <Color 
                                value={color.value} 
                                onClick={() => removeStyleColor(item.id, color.id)} 
                                key={color.id}
                            />)}
                        </div>

                        <div>
                            <input type="color" {...styleColor.bind} />
                            <button onClick={() => addStyleColor(item.id, styleColor.value)}>Add Style Color</button>
                        </div>
                    </div>
                ))}
            </div>
            <br />

            <div>
                <input type="color" {...mainColor.bind} />
                <button onClick={() => addColor(mainColor.value)}>Add Main Color</button>
            </div>
            
            <br />
            <br />
        </div>
    )
}

export default Colors