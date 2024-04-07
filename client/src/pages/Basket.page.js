import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as basket from '../redux/selectors/basket.selectors'
import BasketItem from '../components/BasketItem/BasketItem'


function Basket() {
    const list = useSelector(basket.list)
    const count = useSelector(basket.count)
    const price = useSelector(basket.price)
    
    return (
        <div>
            <h1>Basket</h1>
            <br />
            
            {list.map((item) => <BasketItem item={item} key={item.id} /> )}

            <hr />
            <br />

            <p>Count: {count}</p>
            <p>Price: {price}</p>

            <br />
            <hr />
            <br />
        
            <Link to="/make-order">Make Order</Link>
        </div>
    )
}

export default Basket