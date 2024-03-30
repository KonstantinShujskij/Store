export const list = (state) => state.basket
export const products = (state) => state.basket.map((item) => item.id)
export const count = (state) => state.basket.length
