import { VALIDATION_RULES } from './constants.js';

// Validation utilities
export const validateEmail = (email) => {
    return VALIDATION_RULES.EMAIL_REGEX.test(email);
};

export const validatePhone = (phone) => {
    return VALIDATION_RULES.PHONE_REGEX.test(phone);
};

export const validatePassword = (password) => {
    return password && password.length >= VALIDATION_RULES.PASSWORD_MIN_LENGTH;
};

// String utilities
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

// Number utilities
export const formatPrice = (price, currency = '$') => {
    return `${currency}${parseFloat(price).toFixed(2)}`;
};

export const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
};

// Date utilities
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export const formatDateTime = (date) => {
    return new Date(date).toLocaleString();
};

// Array utilities
export const chunk = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export const unique = (array) => {
    return [...new Set(array)];
};

// Object utilities
export const pick = (obj, keys) => {
    return keys.reduce((result, key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
        return result;
    }, {});
};

export const omit = (obj, keys) => {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
};

// API utilities
export const buildQueryString = (params) => {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
            searchParams.append(key, value);
        }
    });
    
    return searchParams.toString();
};