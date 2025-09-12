import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3030/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isChechkingAuth: true,

  signup: async (name, email, password) => {
    set({ isLoading: true });

    try {
      const res = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
      });
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      set({
        isAuthenticated: true,
        user: res.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (verificationToken) => {
    set({ isLoading: true });

    try {
      const res = await axios.post(`${API_URL}/verify-email`, {
        verificationToken,
      });
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
      return res.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      console.log(error);

      throw error;
    }
  },

  checkAuth: async () => {
    set({ isChechkingAuth: true });
    try {
      const res = await axios.get(`${API_URL}/check-auth`);
      set({
        user: res.data.user,
        isAuthenticated: true,
        isChechkingAuth: false,
      });
    } catch (error) {
      set({ error: null, isChechkingAuth: false, isAuthenticated: false });
      console.log(error);
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(`${API_URL}/forgot-password`, { email });
      set({ message: res.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.res.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },
}));
