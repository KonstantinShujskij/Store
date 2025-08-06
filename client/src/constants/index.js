// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  FRONT_URL: process.env.REACT_APP_FRONT_URL || 'http://localhost:3000',
  IMG_SRC: process.env.REACT_APP_IMG_SRC || 'http://localhost:5000/static/images/'
}

// Delivery Options
export const DELIVERY_OPTIONS = [
  { id: 'department', title: 'У відділення' },
  { id: 'address', title: 'За адресою' },
  { id: 'terminal', title: 'У поштомат' }
]

// Order Statuses
export const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: '600px',
  TABLET: '768px',
  DESKTOP: '1024px'
}

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  BASKET: 'basket'
} 