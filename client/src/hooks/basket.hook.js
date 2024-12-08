import { useDispatch } from 'react-redux'

import * as basket from '../redux/actions/basket.action'


export default function useBasket() {
    const dispath = useDispatch()

    const add = (product) => { dispath(basket.addProduct(product)) }
    const open = (isOpen=true) => { dispath(basket.open(isOpen)) }
    const remove = (id) => { dispath(basket.removeProduct(id)) }
    const clear = () => { dispath(basket.clear()) }

    return { add, open, remove, clear }
}