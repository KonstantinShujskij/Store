import React from 'react'

import { useSelector } from 'react-redux'
import * as staticSelectors from '../../../redux/selectors/static.selectors'

import useCategory from '../../../hooks/category.hook'
import List from './List/List'
import { useNavigate } from 'react-router-dom'


function Categories() {
    const navigate = useNavigate()
    const Category = useCategory()

    const categories = useSelector(staticSelectors.categories)

    const click = (id) => navigate(`/category/${id}`)

    return <List label={'categories'} list={categories} click={click} save={Category.add} remove={Category.removeList} />
}

export default Categories