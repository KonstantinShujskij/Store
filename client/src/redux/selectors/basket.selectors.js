export const list = (state) => state.basket
export const count = (state) => state.basket.length
export const price = (state) => {
    let price = 0
    state.basket.forEach((item) => { price += item.price })
    return price
}