import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import useOrdersApi from '../api/orders.api'
import useLoad from '../hooks/load.hook'


function Order() {
    const { id } = useParams()
    const ordersApi = useOrdersApi()

    const [order, setOrder] = useState() 

    useLoad(async () => {
        setOrder(await ordersApi.get(id))
    })


    return (
        <div>
            <h3>Order number: {order?._id}</h3>
            <p>Price: {order?.price}</p>
            <p>Status: {order?.status}</p>

            <br />
            <hr />
            <br />

            <h3>Products:</h3>
            <br />
            <div>
                {order?.products.map((item) => (
                    <div key={item.id} style={{border: '2px solid #cecece', marginBottom: '8px', padding: '8px'}}>
                        <h4>{item.title}</h4>
                        <p>Price: {item.price}</p>
                    </div>
                ))}
            </div>

            <br />
            <hr />
            <br />            

            {order?.status === 'CREATE' && <button>Pay now</button>}
        </div>
    )
}

export default Order