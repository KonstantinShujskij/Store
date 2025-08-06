// Shared type definitions and interfaces

// User related types
export const UserType = {
    id: 'string',
    email: 'string',
    name: 'string',
    phone: 'string',
    role: 'string', // USER_ROLES
    createdAt: 'Date',
    updatedAt: 'Date'
};

// Product related types
export const ProductType = {
    id: 'string',
    title: 'string',
    desc: 'string',
    price: 'number',
    photos: 'Array<string>',
    prop: 'Array<object>',
    materials: 'Array<string>',
    colors: 'Array<string>',
    colorsList: 'Array<object>',
    soldOut: 'boolean',
    category: 'string',
    categoryTitle: 'string',
    collection: 'string',
    collectionTitle: 'string',
    createdAt: 'Date',
    updatedAt: 'Date'
};

// Order related types
export const OrderType = {
    id: 'string',
    userId: 'string',
    items: 'Array<OrderItem>',
    totalAmount: 'number',
    status: 'string', // ORDER_STATUS
    shippingAddress: 'object',
    paymentMethod: 'string',
    createdAt: 'Date',
    updatedAt: 'Date'
};

export const OrderItemType = {
    productId: 'string',
    productTitle: 'string',
    quantity: 'number',
    price: 'number',
    selectedColor: 'string',
    selectedMaterial: 'string'
};

// API Response types
export const ApiResponseType = {
    success: 'boolean',
    data: 'any',
    message: 'string',
    errors: 'Array<object>'
};

export const PaginatedResponseType = {
    ...ApiResponseType,
    data: {
        items: 'Array<any>',
        total: 'number',
        page: 'number',
        pages: 'number'
    }
};