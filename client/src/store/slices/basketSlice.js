import { createSlice } from '@reduxjs/toolkit'
import { storage } from '../../utils/storage'

const initialState = {
  items: storage.getBasket(),
  isOpen: false,
  loading: false,
  error: null
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => 
        item.id === newItem.id && 
        item.color === newItem.color && 
        item.size === newItem.size
      )

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 })
      }
      
      // Update localStorage
      storage.setBasket(state.items)
    },
    removeItem: (state, action) => {
      const { id, color, size } = action.payload
      state.items = state.items.filter(item => 
        !(item.id === id && item.color === color && item.size === size)
      )
      
      // Update localStorage
      storage.setBasket(state.items)
    },
    updateQuantity: (state, action) => {
      const { id, color, size, quantity } = action.payload
      const item = state.items.find(item => 
        item.id === id && item.color === color && item.size === size
      )
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => 
            !(item.id === id && item.color === color && item.size === size)
          )
        } else {
          item.quantity = quantity
        }
      }
      
      // Update localStorage
      storage.setBasket(state.items)
    },
    clearBasket: (state) => {
      state.items = []
      storage.removeBasket()
    },
    toggleBasket: (state, action) => {
      state.isOpen = action.payload !== undefined ? action.payload : !state.isOpen
    },
    setBasketLoading: (state, action) => {
      state.loading = action.payload
    },
    setBasketError: (state, action) => {
      state.error = action.payload
    },
    clearBasketError: (state) => {
      state.error = null
    }
  }
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearBasket,
  toggleBasket,
  setBasketLoading,
  setBasketError,
  clearBasketError
} = basketSlice.actions

// Selectors
export const selectBasketItems = (state) => state.basket.items
export const selectBasketIsOpen = (state) => state.basket.isOpen
export const selectBasketLoading = (state) => state.basket.loading
export const selectBasketError = (state) => state.basket.error
export const selectBasketItemCount = (state) => 
  state.basket.items.reduce((total, item) => total + item.quantity, 0)
export const selectBasketTotal = (state) => 
  state.basket.items.reduce((total, item) => total + (item.price * item.quantity), 0)

export default basketSlice.reducer 