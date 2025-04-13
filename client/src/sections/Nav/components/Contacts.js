import React from 'react'

import { useSelector } from 'react-redux'
import * as staticSelectors from '../../../redux/selectors/static.selectors'

import useContacts from '../../../hooks/contacts.hook'
import ListContacts from './List/ListContacts'



function Contacts() {
    const Contacts = useContacts()

    const contactsList = useSelector(staticSelectors.contactsList)
    
    const click = (link) => `window.location.href = ${link}`

    return <ListContacts 
        label={'contacts'} 
        list={contactsList} 
        click={click} 
        save= {Contacts.add}
        remove={Contacts.removeList} />
}

export default Contacts