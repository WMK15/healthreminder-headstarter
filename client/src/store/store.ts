// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export const selectAuth = (state: RootState) => state.auth;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
