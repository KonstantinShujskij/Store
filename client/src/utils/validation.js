// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (basic)
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Password validation (minimum 6 characters)
export const isValidPassword = (password) => {
  return password && password.length >= 6
}

// Required field validation
export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== ''
}

// Number validation
export const isValidNumber = (value) => {
  return !isNaN(value) && isFinite(value)
}

// Price validation (positive number)
export const isValidPrice = (price) => {
  return isValidNumber(price) && parseFloat(price) >= 0
}

// Form validation helper
export const validateForm = (formData, rules) => {
  const errors = {}

  Object.keys(rules).forEach(field => {
    const value = formData[field]
    const fieldRules = rules[field]

    if (fieldRules.required && !isRequired(value)) {
      errors[field] = `${field} is required`
      return
    }

    if (value && fieldRules.email && !isValidEmail(value)) {
      errors[field] = 'Invalid email format'
      return
    }

    if (value && fieldRules.phone && !isValidPhone(value)) {
      errors[field] = 'Invalid phone number'
      return
    }

    if (value && fieldRules.password && !isValidPassword(value)) {
      errors[field] = 'Password must be at least 6 characters'
      return
    }

    if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `${field} must be at least ${fieldRules.minLength} characters`
      return
    }

    if (value && fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = `${field} must be no more than ${fieldRules.maxLength} characters`
      return
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
} 