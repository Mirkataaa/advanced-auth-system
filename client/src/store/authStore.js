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
}));
