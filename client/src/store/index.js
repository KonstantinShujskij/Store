import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import basketReducer from './slices/basketSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

// TypeScript types - uncomment if converting to .ts file
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store