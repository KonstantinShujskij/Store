import { useState, useCallback } from 'react'
import { apiClient, ApiError } from '../utils/api'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (requestFn) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requestFn()
      return result
    } catch (err) {
      const errorMessage = err instanceof ApiError 
        ? err.message 
        : 'An unexpected error occurred'
      
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const publicRequest = useCallback(async (endpoint, data) => {
    return request(() => apiClient.publicRequest(endpoint, data))
  }, [request])

  const protectedRequest = useCallback(async (endpoint, data) => {
    return request(() => apiClient.protectedRequest(endpoint, data))
  }, [request])

  const getRequest = useCallback(async (endpoint) => {
    return request(() => apiClient.get(endpoint))
  }, [request])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    loading,
    error,
    publicRequest,
    protectedRequest,
    getRequest,
    clearError
  }
} 