import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slices/contactSlice';
import blogReducer from './slices/blogSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    blog: blogReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});