export const token = (state) => state.auth.token
export const isAuth = (state) => !!state.auth.token
export const isAdmin = (state) => state.auth.isAdmin

