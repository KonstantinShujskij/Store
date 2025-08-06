// Shared constants between frontend and backend

export const API_ENDPOINTS = {
    AUTH: '/api/v1/auth',
    PRODUCTS: '/api/v1/products',
    CATEGORIES: '/api/v1/category',
    COLLECTIONS: '/api/v1/collection',
    ORDERS: '/api/v1/orders',
    CLIENTS: '/api/v1/client',
    CONTACTS: '/api/v1/contacts',
    ADMIN: '/api/v1/admin',
    ALSO: '/api/v1/also'
};

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

export const USER_ROLES = {
    USER: 'user',
    ADMIN: 'admin'
};

export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

export const VALIDATION_RULES = {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[+]?[\d\s\-\(\)]+$/,
    PASSWORD_MIN_LENGTH: 6,
    TITLE_MIN_LENGTH: 2,
    TITLE_MAX_LENGTH: 100,
    DESCRIPTION_MAX_LENGTH: 1000
};