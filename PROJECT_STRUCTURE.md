# 🏪 Store Project Structure

## 📋 Complete Directory Tree

```
store/
├── 📁 backend/                     # Backend API Server
│   ├── 📁 src/                     # Source code
│   │   ├── 📁 config/              # Configuration management
│   │   │   ├── database.js         # MongoDB connection
│   │   │   ├── index.js           # Main config export
│   │   │   ├── keys.js            # Environment variables
│   │   │   ├── default.json       # Default configuration
│   │   │   └── production.json    # Production configuration
│   │   ├── 📁 controllers/         # HTTP request handlers
│   │   │   ├── Admin.controller.js
│   │   │   ├── Also.controller.js
│   │   │   ├── Category.controller.js
│   │   │   ├── Client.controller.js
│   │   │   ├── Collection.controller.js
│   │   │   ├── Contacts.controller.js
│   │   │   ├── Order.controller.js
│   │   │   └── Product.controller.js
│   │   ├── 📁 middleware/          # Express middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── file.middleware.js
│   │   │   └── middleware.js
│   │   ├── 📁 models/              # Mongoose models
│   │   │   ├── Admin.model.js
│   │   │   ├── Also.model.js
│   │   │   ├── Category.model.js
│   │   │   ├── Client.model.js
│   │   │   ├── Collection.model.js
│   │   │   ├── Contacts.model.js
│   │   │   ├── Order.model.js
│   │   │   └── Product.model.js
│   │   ├── 📁 routes/              
│   │   │   └── 📁 v1/              # API versioning
│   │   │       ├── admin.routes.js
│   │   │       ├── also.routes.js
│   │   │       ├── category.routes.js
│   │   │       ├── client.routes.js
│   │   │       ├── collection.routes.js
│   │   │       ├── contacts.routes.js
│   │   │       ├── orders.routes.js
│   │   │       └── products.routes.js
│   │   ├── 📁 services/            # Business logic layer
│   │   │   ├── category.service.js
│   │   │   ├── collection.service.js
│   │   │   └── product.service.js
│   │   ├── 📁 utils/               # Utility functions
│   │   │   ├── file.utils.js
│   │   │   ├── filter.utils.js
│   │   │   ├── jwt.utils.js
│   │   │   ├── mono.js
│   │   │   └── trappiner.utils.js
│   │   ├── 📁 validators/          # Request validation
│   │   │   ├── category.validator.js
│   │   │   ├── client.validator.js
│   │   │   ├── collection.validator.js
│   │   │   ├── contacts.validator.js
│   │   │   ├── order.validator.js
│   │   │   └── product.validator.js
│   │   ├── 📁 formats/             # Response formatters
│   │   │   ├── category.format.js
│   │   │   ├── client.format.js
│   │   │   ├── collection.format.js
│   │   │   ├── contacts.format.js
│   │   │   └── product.format.js
│   │   ├── 📁 const/               # Constants and errors
│   │   │   ├── consts.js
│   │   │   └── errors.js
│   │   └── app.js                  # Express application setup
│   ├── 📁 static/                  # Static files (images)
│   │   └── 📁 images/
│   ├── 📁 uploads/                 # File upload directory
│   ├── server.js                   # Application entry point
│   ├── package.json               # Backend dependencies
│   └── package-lock.json          # Lock file
│
├── 📁 client/                      # React Frontend
│   ├── 📁 src/                     # Source code
│   │   ├── 📁 components/          # React components
│   │   │   ├── 📁 ui/              # Basic UI components
│   │   │   │   ├── 📁 Alert/
│   │   │   │   ├── 📁 Button/
│   │   │   │   ├── 📁 EmptyState/
│   │   │   │   ├── 📁 Error/
│   │   │   │   ├── 📁 Input/
│   │   │   │   ├── 📁 Loading/
│   │   │   │   ├── 📁 Paginate/
│   │   │   │   ├── 📁 Select/
│   │   │   │   └── 📁 Tooltip/
│   │   │   ├── 📁 forms/           # Form components
│   │   │   └── 📁 layout/          # Layout components
│   │   │       ├── 📁 Also/
│   │   │       ├── 📁 BasketItem/
│   │   │       ├── 📁 OrderItem/
│   │   │       └── 📁 Product/
│   │   ├── 📁 pages/               # Page components
│   │   │   ├── 📁 Admin/
│   │   │   ├── 📁 Basket/
│   │   │   ├── 📁 Info/
│   │   │   ├── 📁 Order/
│   │   │   ├── 📁 Product/
│   │   │   ├── About.page.js
│   │   │   ├── Account.page.js
│   │   │   ├── Catalog.page.js
│   │   │   ├── Login.page.js
│   │   │   ├── LoginAdmin.page.js
│   │   │   ├── Main.page.js
│   │   │   ├── MakeOrder.page.js
│   │   │   ├── Orders.page.js
│   │   │   └── Signup.page.js
│   │   ├── 📁 services/            # API service calls
│   │   │   ├── admin.api.js
│   │   │   ├── also.api.js
│   │   │   ├── category.api.js
│   │   │   ├── client.api.js
│   │   │   ├── collection.api.js
│   │   │   ├── contacts.api.js
│   │   │   ├── orders.api.js
│   │   │   └── products.api.js
│   │   ├── 📁 store/               # Redux store
│   │   │   ├── 📁 slices/          # Redux Toolkit slices
│   │   │   │   ├── authSlice.js
│   │   │   │   └── basketSlice.js
│   │   │   └── index.js            # Store configuration
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   ├── 📁 utils/               # Frontend utilities
│   │   ├── 📁 constants/           # Frontend constants
│   │   ├── 📁 styles/              # Global styles
│   │   ├── 📁 sections/            # Page sections
│   │   ├── 📁 routes/              # Route configuration
│   │   ├── index.js               # App entry point
│   │   ├── index.css              # Global styles
│   │   ├── main.css               # Main styles
│   │   └── App.js                 # Main App component
│   ├── 📁 public/                  # Public assets
│   │   ├── 📁 images/              # Image assets
│   │   ├── index.html             # HTML template
│   │   ├── favicon.ico            # Favicon
│   │   └── robots.txt             # Robots file
│   ├── package.json               # Frontend dependencies
│   ├── package-lock.json          # Lock file
│   ├── README.md                  # Client documentation
│   ├── .gitignore                 # Git ignore
│   └── .eslintrc                  # ESLint configuration
│
├── 📁 shared/                      # Shared utilities and types
│   ├── constants.js               # Shared constants
│   ├── types.js                   # Shared type definitions
│   └── utils.js                   # Shared utility functions
│
├── 📄 README.md                    # Project documentation
└── 📄 .gitignore                   # Git ignore rules
```

## 🎯 Key Architecture Benefits

### **Backend (Node.js/Express)**
- ✅ **API Versioning**: `/api/v1/` for future compatibility
- ✅ **Service Layer**: Business logic separated from controllers
- ✅ **Modular Structure**: Clear separation of concerns
- ✅ **Configuration Management**: Environment-based config
- ✅ **Validation Layer**: Input validation and sanitization

### **Frontend (React)**
- ✅ **Component Organization**: UI, forms, and layout separation
- ✅ **Modern State Management**: Redux Toolkit with slices
- ✅ **Service Layer**: API calls centralized
- ✅ **Hook-based Architecture**: Custom hooks for reusability
- ✅ **Modular Styling**: Component-scoped CSS modules

### **Shared Resources**
- ✅ **Common Utilities**: Shared between frontend and backend
- ✅ **Type Definitions**: Consistent data structures
- ✅ **Constants**: Single source of truth for shared values

## 🚀 Development Commands

### Backend
```bash
cd backend
npm install
npm run dev          # Development mode
npm start           # Production mode
```

### Frontend
```bash
cd client
npm install
npm start           # Development mode
npm run build       # Production build
```

## 🔧 Environment Setup

Create `.env` file in `backend/` directory:
```env
MONGO_URI=mongodb://localhost:27017/store
JWT_SECRET=your-secret-key
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 📚 API Endpoints

All endpoints are versioned under `/api/v1/`:
- `GET /api/v1/products` - Get all products
- `POST /api/v1/products` - Create product
- `GET /api/v1/category` - Get categories
- `POST /api/v1/orders` - Create order
- `POST /api/v1/client/signup` - User registration
- `POST /api/v1/client/login` - User login
- `GET /api/v1/admin/orders` - Admin: Get orders

---

**Generated on:** $(date)
**Project:** Store E-commerce Platform
**Architecture:** Full-Stack (React + Node.js + MongoDB)