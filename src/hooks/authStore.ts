import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  name: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  name: null,

  login: (token: string, name: string) => {
    console.log("Guardando en Zustand:", { token, name }); 
    localStorage.setItem("authToken", token);
    localStorage.setItem("userName", name);
    set({ isAuthenticated: true, token, name });
  },

  logout: () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    set({ isAuthenticated: false, token: null, name: null });
  },
}));
