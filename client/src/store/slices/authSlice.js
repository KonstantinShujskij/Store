import { createSlice } from '@reduxjs/toolkit'
import { storage } from '../../utils/storage'

const initialState = {
  token: storage.getAuthToken(),
  isAuthenticated: !!storage.getAuthToken(),
  isAdmin: false,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.token = action.payload.token
      state.isAdmin = action.payload.isAdmin || false
      state.error = null
      
      // Store token in localStorage
      storage.setAuthToken(action.payload.token)
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.isAuthenticated = false
      state.token = null
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.token = null
      state.isAdmin = false
      state.error = null
      
      // Clear token from localStorage
      storage.removeAuthToken()
    },
    clearError: (state) => {
      state.error = null
    },
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  clearError,
  setAdminStatus
} = authSlice.actions

export default authSlice.reducer 