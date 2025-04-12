import React from 'react'

import { useSelector } from 'react-redux'
import * as staticSelectors from '../../../redux/selectors/static.selectors'

import useContacts from '../../../hooks/contacts.hook'
import ListContacts from './List/ListContacts'
// import { useNavigate } from 'react-router-dom'


function Contacts() {
    // const navigate = useNavigate()
    const Contacts = useContacts()

    const contactsList = useSelector(staticSelectors.contactsList)
    console.log(contactsList)

    // const click = (id) => navigate(`/contacts/${id}`)
    const click = (link) => `window.location.href = ${link}`

    return <ListContacts 
        label={'contacts'} 
        list={contactsList} 
        click={click} 
        save= {Contacts.add}
        remove={Contacts.removeList} />
}

export default Contacts