// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import habitsReducer from './habitSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    habits: habitsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export const selectAuth = (state: RootState) => state.auth;
export const selectHabits = (state: RootState) => state.habits;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
