# Store Project - Restructured

This project has been restructured to follow modern development practices with proper separation of concerns between frontend and backend.

## Project Structure

```
store/
├── 📁 backend/                     # Backend API server
│   ├── 📁 src/
│   │   ├── 📁 config/              # Configuration management
│   │   │   ├── database.js         # MongoDB connection
│   │   │   ├── index.js           # Main config export
│   │   │   ├── keys.js            # Environment variables
│   │   │   ├── default.json       # Default configuration
│   │   │   └── production.json    # Production configuration
│   │   ├── 📁 controllers/         # HTTP request handlers
│   │   ├── 📁 middleware/          # Express middleware
│   │   ├── 📁 models/              # Mongoose models
│   │   ├── 📁 routes/              
│   │   │   └── 📁 v1/              # API versioning
│   │   ├── 📁 services/            # Business logic layer
│   │   ├── 📁 utils/               # Utility functions
│   │   ├── 📁 validators/          # Request validation
│   │   ├── 📁 formats/             # Response formatters
│   │   ├── 📁 const/               # Constants and error messages
│   │   └── app.js                  # Express application setup
│   ├── 📁 static/                  # Static files (images, uploads)
│   ├── 📁 uploads/                 # File upload directory
│   ├── server.js                   # Application entry point
│   ├── package.json               # Backend dependencies
│   └── .env.example               # Environment variables template
├── 📁 client/                      # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/          
│   │   │   ├── 📁 ui/              # Reusable UI components
│   │   │   ├── 📁 forms/           # Form components
│   │   │   └── 📁 layout/          # Layout and complex components
│   │   ├── 📁 pages/               # Page components
│   │   ├── 📁 services/            # API service calls
│   │   ├── 📁 store/               # Redux store
│   │   │   ├── 📁 slices/          # Redux Toolkit slices
│   │   │   └── index.js            # Store configuration
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   ├── 📁 utils/               # Frontend utilities
│   │   ├── 📁 constants/           # Frontend constants
│   │   └── 📁 styles/              # Global styles
│   └── package.json               # Frontend dependencies
└── 📁 shared/                      # Shared utilities and types
    ├── constants.js               # Shared constants
    ├── types.js                   # Shared type definitions
    └── utils.js                   # Shared utility functions
```

## Key Improvements

### Backend
- **Modular Architecture**: Separated concerns with dedicated folders for controllers, services, models, etc.
- **API Versioning**: All routes now follow `/api/v1/` pattern for future compatibility
- **Configuration Management**: Centralized config with environment variable support
- **Service Layer**: Business logic extracted from controllers into dedicated service files
- **Better Security**: Environment-based configuration with `.env` support

### Frontend
- **Component Organization**: Components organized into `ui/`, `forms/`, and `layout/` folders
- **Unified Store**: Redux Toolkit with modern slice-based state management
- **Service Layer**: API calls centralized in services folder
- **Better Structure**: Cleaner imports and better separation of concerns

### Shared
- **Common Utilities**: Shared constants, types, and utility functions
- **Type Safety**: Standardized data structures across frontend and backend
- **Validation**: Shared validation rules and utilities

## Getting Started

### Backend
```bash
cd backend
npm install
# Copy .env.example to .env and configure
npm run dev
```

### Frontend
```bash
cd client
npm install
npm start
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: JWT secret key
- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)

## API Endpoints

All API endpoints are versioned under `/api/v1/`:
- `/api/v1/products` - Product management
- `/api/v1/category` - Categories
- `/api/v1/collection` - Collections
- `/api/v1/orders` - Order management
- `/api/v1/client` - Client/user management
- `/api/v1/admin` - Admin functionality

## Next Steps

1. Update all import statements throughout the codebase to reflect new structure
2. Create comprehensive tests for services and components
3. Set up proper CI/CD pipeline
4. Add TypeScript for better type safety
5. Implement proper logging and monitoring