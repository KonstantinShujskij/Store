import { STORAGE_KEYS } from '../constants'

class StorageManager {
  set(key, value) {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
      return true
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      return false
    }
  }

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Error removing from localStorage:', error)
      return false
    }
  }

  clear() {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Error clearing localStorage:', error)
      return false
    }
  }

  // Convenience methods for common operations
  setAuthToken(token) {
    return this.set(STORAGE_KEYS.AUTH_TOKEN, token)
  }

  getAuthToken() {
    return this.get(STORAGE_KEYS.AUTH_TOKEN)
  }

  removeAuthToken() {
    return this.remove(STORAGE_KEYS.AUTH_TOKEN)
  }

  setUserData(userData) {
    return this.set(STORAGE_KEYS.USER_DATA, userData)
  }

  getUserData() {
    return this.get(STORAGE_KEYS.USER_DATA)
  }

  removeUserData() {
    return this.remove(STORAGE_KEYS.USER_DATA)
  }

  setBasket(basket) {
    return this.set(STORAGE_KEYS.BASKET, basket)
  }

  getBasket() {
    return this.get(STORAGE_KEYS.BASKET, [])
  }

  removeBasket() {
    return this.remove(STORAGE_KEYS.BASKET)
  }
}

export const storage = new StorageManager() 