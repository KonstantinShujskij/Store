import { API_CONFIG } from '../constants'

class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
    this.name = 'ApiError'
  }
}

class ApiClient {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}/${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        )
      }

      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      throw new ApiError('Network error', 0)
    }
  }

  // Public requests (no auth required)
  async publicRequest(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  // Protected requests (auth required)
  async protectedRequest(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  // GET requests
  async get(endpoint) {
    return this.request(endpoint, {
      method: 'GET'
    })
  }
}

export const apiClient = new ApiClient()
export { ApiError } 