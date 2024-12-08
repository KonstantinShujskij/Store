export const list = (state) => state.basket?.list
export const open = (state) => state.basket?.open
export const count = (state) => state.basket?.list?.length
export const price = (state) => {
    let price = 0
    state.basket?.list?.forEach((item) => { price += item.price })
    return price
}