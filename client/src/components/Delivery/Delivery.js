import React from 'react'

function Delivery({country, index, town, adres, note}) {
    return (
        <>
            <h2>Delivery Info</h2>

            <div>
                <input {...country.bind} placeholder="Country" />
                <br />
                <input {...index.bind} placeholder="Post index" />
                <br />
                <input {...town.bind} placeholder="Town" />
                <br />
                <input {...adres.bind} placeholder="Adress" />
                <br />
                <input {...note.bind} placeholder="Note" />
            </div>
        </>
    )
}

export default Delivery