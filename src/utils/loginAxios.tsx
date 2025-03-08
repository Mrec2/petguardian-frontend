import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth";

class LoginAxios {
  static async loginUser(email: string, password: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data?.message || "Error al iniciar sesión.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }

  // Método para obtener datos protegidos usando el token
  static async getProtectedData() {
    const token = localStorage.getItem("authToken"); // Recuperar token
    if (!token) throw new Error("Usuario no autenticado");

    try {
      const response = await axios.get(`${API_BASE_URL}/protected-endpoint`, {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar token en la cabecera
        },
      });

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data?.message || "Error al obtener datos.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }
}

export default LoginAxios;
