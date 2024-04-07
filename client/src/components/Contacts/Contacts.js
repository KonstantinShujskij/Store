import React from 'react'

function Contacts({ name, lastname, email, phone }) {
    return (
        <>
            <h2>Contact Info</h2>

            <div>
                <input {...name.bind} placeholder="Name" />
                <br />
                <input {...lastname.bind} placeholder="Lastname" />
                <br />
                <input {...email.bind} placeholder="E-mail" />
                <br />
                <input {...phone.bind} placeholder="Phone" />
            </div>
        </>
    )
}

export default Contacts