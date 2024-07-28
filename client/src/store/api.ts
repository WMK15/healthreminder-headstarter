import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "@/types";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? import.meta.env.BACKEND_LOCAL_URI
      : import.meta.env.BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to create user account
export const createUserAccount = createAsyncThunk("createUserAccount", async (user : IUser, {rejectWithValue}) => {
  try {
    const response = await api.post("/users", user);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

// Function to get user by username
export const getUserByUsername = createAsyncThunk("getUserByUsername", async (username: string) => {
  try {
    const response = await api.get(`/users?username=${username}`);
    return response.data ?? {};
  } catch (error) {
    console.log(error);
    throw Error(`User not found:\n${error}`);
  }
});

// Function to save user to database
export const updateUserAccount = createAsyncThunk("saveUserToDB", async (user: IUser) => {
  try {
    const response = await api.put(`/users/${user.id}`, user);
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Function to sign in to account
export const signInAccount = createAsyncThunk("signInAccount", async (user: { email: string; password: string }) => {
  try {
    const response = await api.post("/auth/signin", user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Function to get current user
export const getCurrentUser = createAsyncThunk("getCurrentUser", async (_, {rejectWithValue}) => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Function to sign out of account
export const signOutAccount = createAsyncThunk("signOutAccount", async () => {
  try {
    const response = await api.get("/auth/signout");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});