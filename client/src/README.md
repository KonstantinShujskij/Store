# Frontend Application Structure

This document outlines the improved structure and best practices for the React frontend application.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Basic UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Alert/
│   │   ├── Loading/
│   │   ├── Error/
│   │   └── EmptyState/
│   ├── forms/           # Form components
│   └── layout/          # Layout components
│       ├── Product/
│       ├── BasketItem/
│       ├── OrderItem/
│       └── Also/
├── constants/
│   └── index.js         # Centralized constants
├── hooks/
│   ├── useApi.js        # API management hook
│   ├── useLocalStorage.js # LocalStorage hook
│   └── index.js         # Hook exports
├── pages/               # Page components
├── services/            # API service calls
│   ├── products.api.js
│   ├── client.api.js
│   └── orders.api.js
├── store/               # Redux store
│   ├── slices/          # Redux Toolkit slices
│   │   ├── authSlice.js
│   │   └── basketSlice.js
│   └── index.js         # Store configuration
├── routes/              # Routing configuration
├── styles/              # CSS modules
├── utils/
│   ├── api.js           # API client
│   ├── storage.js       # Storage management
│   ├── validation.js    # Validation utilities
│   └── index.js         # Utility exports
└── App.js               # Main app component
```

## 🚀 Key Improvements

### 1. **Centralized Constants**
- All configuration values in one place
- Environment variable support
- Type-safe constants

### 2. **Modern Redux Setup**
- Redux Toolkit for simplified state management
- Proper slice organization
- Built-in selectors and actions

### 3. **Improved API Management**
- Centralized API client
- Better error handling
- Automatic token management

### 4. **Reusable Components**
- Consistent Button and Input components
- Proper PropTypes validation
- Mobile-responsive design

### 5. **Better Hooks**
- Custom hooks for common patterns
- LocalStorage synchronization
- API state management

### 6. **Utility Functions**
- Centralized validation
- Storage management
- Error handling

## 🛠 Usage Examples

### Using the Button Component
```jsx
import { Button } from '../components/common'

<Button 
  variant="primary" 
  size="medium" 
  loading={isLoading}
  onClick={handleClick}
>
  Submit
</Button>
```

### Using the API Hook
```jsx
import { useApi } from '../hooks'

const { loading, error, publicRequest } = useApi()

const handleSubmit = async () => {
  try {
    const result = await publicRequest('api/endpoint', data)
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

### Using Redux Slices
```jsx
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectBasketItems } from '../redux'

const dispatch = useDispatch()
const basketItems = useSelector(selectBasketItems)

const addToBasket = (item) => {
  dispatch(addItem(item))
}
```

### Using Validation
```jsx
import { validateForm, isValidEmail } from '../utils'

const rules = {
  email: { required: true, email: true },
  password: { required: true, minLength: 6 }
}

const { isValid, errors } = validateForm(formData, rules)
```

## 📱 Mobile Responsiveness

All components include mobile-responsive design with:
- Flexible layouts
- Touch-friendly interactions
- Appropriate font sizes
- Optimized spacing

## 🔧 Development Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
npm run format     # Format code with Prettier
npm test           # Run tests
```

## 📦 Dependencies

### Core Dependencies
- React 18.2.0
- Redux Toolkit 2.0.1
- React Router DOM 6.22.3
- Redux Persist 6.0.0

### Development Dependencies
- ESLint with React configuration
- TypeScript types for better development experience

## 🎯 Best Practices

1. **Component Organization**: Group related components together
2. **State Management**: Use Redux for global state, local state for component-specific data
3. **Error Handling**: Centralized error handling with proper user feedback
4. **Performance**: Lazy loading, memoization, and optimized re-renders
5. **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
6. **Testing**: Unit tests for utilities, integration tests for components

## 🔄 Migration Guide

To migrate existing code to the new structure:

1. Replace direct API calls with the `useApi` hook
2. Update Redux usage to use the new slices
3. Replace custom buttons/inputs with the common components
4. Use the centralized constants instead of hardcoded values
5. Implement proper error handling with the new utilities

## 📝 Contributing

1. Follow the established folder structure
2. Use the common components when possible
3. Add proper PropTypes validation
4. Include mobile responsiveness
5. Write clear, descriptive commit messages 