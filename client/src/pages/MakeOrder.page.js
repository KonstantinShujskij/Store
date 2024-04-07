import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as basket from '../redux/selectors/basket.selectors'
import BasketItem from '../components/BasketItem/BasketItem'
import Delivery from '../components/Delivery/Delivery'
import useDelivery from '../hooks/delivery.hook'
import useContacts from '../hooks/contact.hook'
import Contacts from '../components/Contacts/Contacts'
import useOrdersApi from '../api/orders.api'

import useBasket from '../hooks/basket.hook'


function MakeOrder() {
    const ordersApi = useOrdersApi()
    const Basket = useBasket()
    const navigate = useNavigate()

    const list = useSelector(basket.list)
    const price = useSelector(basket.price)

    const contacts = useContacts()
    const delivery = useDelivery()

    const makeHandler = async () => {
        const order = await ordersApi.create(delivery.getValue(), contacts.getValue(), list)
    
        if(order) {
            Basket.clear()
            navigate(`/order/${order}`)
        }
    }

    return (
        <div>
            <div>
                {list.map((item) => <BasketItem item={item} key={item.id} />)}
            </div>
            <div>
                <p>Price: {price}</p>
            </div>
            <br />

            <div className="d-flex">
                <h3>Fill this fields or login </h3>
                <button>Login</button>
            </div>

            <br />
            <hr />
            <br />

            <Contacts {...contacts.bind} />

            <br />
            <hr />
            <br />

            <Delivery {...delivery.bind} />

            <br />
            <hr />
            <br />

            <button onClick={() => makeHandler()}>Make Order</button>
        </div>
    )
}

export default MakeOrder