// import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
// import axios from "axios";

// const API_VALIDATE_TOKEN = "http://localhost:8080/auth/validate";

// // **Definimos la interfaz para el estado de autenticación**
// interface AuthState {
//   isAuthenticated: boolean | null;
//   token: string | null;
// }

// // **Definimos la interfaz para el contexto**
// interface AuthContextProps extends AuthState {
//   login: (token: string) => void;
//   logout: () => void;
// }

// // **Definimos la interfaz para `AuthProviderProps`**  
// interface AuthProviderProps {
//   children: ReactNode;  // 🔹 Ahora `children` tiene un tipo correcto
// }

// // **Estado inicial**
// const initialState: AuthState = {
//   isAuthenticated: null,
//   token: null,
// };

// // **Crear el contexto**
// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// // **Reducer para manejar cambios de estado**
// const authReducer = (state: AuthState, action: any): AuthState => {
//   switch (action.type) {
//     case "LOGIN":
//       return { isAuthenticated: true, token: action.payload };
//     case "LOGOUT":
//       return { isAuthenticated: false, token: null };
//     case "SET_AUTH":
//       return { isAuthenticated: action.payload.isAuthenticated, token: action.payload.token };
//     default:
//       return state;
//   }
// };

// // **Proveedor de Autenticación**
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         dispatch({ type: "SET_AUTH", payload: { isAuthenticated: false, token: null } });
//         return;
//       }

//       try {
//         const response = await axios.get(API_VALIDATE_TOKEN, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         if (response.status === 200) {
//           dispatch({ type: "SET_AUTH", payload: { isAuthenticated: true, token } });
//         } else {
//           dispatch({ type: "SET_AUTH", payload: { isAuthenticated: false, token: null } });
//           localStorage.removeItem("authToken");
//         }
//       } catch (error) {
//         console.error("[AuthProvider]  Error en validación:", error);
//         dispatch({ type: "SET_AUTH", payload: { isAuthenticated: false, token: null } });
//         localStorage.removeItem("authToken");
//       }
//     };

//     checkAuth();
//   }, []);

//   const login = (token: string) => {
//     localStorage.setItem("authToken", token);
//     dispatch({ type: "LOGIN", payload: token });
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <AuthContext.Provider value={{ ...state, login, logout }}>
//       {children} 
//     </AuthContext.Provider>
//   );
// };


// // **Hook para acceder al contexto**
// export const useAuth = (): AuthContextProps => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth debe usarse dentro de un AuthProvider");
//   }
//   return context;
// };
