import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './interfaces';
import { createUserAccount, getCurrentUser, signInAccount, signOutAccount } from './api';
import { IUser } from '@/types';

const initialState = {
  currentUser: null,
  loading: false,
  error: "",
  isAuthenticated: false,
} as UserState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logOut(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createUserAccount.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(createUserAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(signInAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signInAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signInAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(signOutAccount.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signOutAccount.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
        state.isAuthenticated = false;
      })
      .addCase(signOutAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      });
  },
});

export const { setCurrentUser, setLoading, setError, logOut } = authSlice.actions;

export default authSlice.reducer;
