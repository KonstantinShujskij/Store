import React from 'react'

import { useSelector } from 'react-redux'
import * as staticSelectors from '../../../redux/selectors/static.selectors'

import useCollection from '../../../hooks/collection.hook'
import List from './List/List'


function Collections() {
    const Collection = useCollection()

    const collections = useSelector(staticSelectors.collections)

    const click = (id) => console.log(id) 

    return <List label={'collections'} list={collections} click={click} save={Collection.add} remove={Collection.removeList} />
}

export default Collections