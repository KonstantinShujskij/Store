import { useDispatch } from 'react-redux'

import * as basket from '../redux/actions/basket.action'


export default function useBasket() {
    const dispath = useDispatch()

    const add = (product) => { dispath(basket.addProduct(product)) }
    const remove = (id) => { dispath(basket.removeProduct(id)) }
    const clear = () => { 
        console.log('clear basket')
        dispath(basket.clear()) 
    }

    return { add, remove, clear }
}