import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth";

class LoginAxios {
  static async loginUser(email: string, password: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      console.log(" Respuesta del backend en LoginAxios:", response.data); 

      if (!response.data.name) {
        console.warn(" Advertencia: El nombre del usuario no está presente en la respuesta del backend.");
      }

      return response.data;
    } catch (error: unknown) {
      console.error(" Error en LoginAxios:", error);

      if (axios.isAxiosError(error)) {
        console.error("Error de Axios:", error.response?.data);
        throw error.response?.data?.message || "Error al iniciar sesión.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }

  static async getProtectedData() {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Usuario no autenticado");

    try {
      const response = await axios.get(`${API_BASE_URL}/protected-endpoint`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("📡 Datos protegidos recibidos:", response.data);
      return response.data;
    } catch (error: unknown) {
      console.error(" Error obteniendo datos protegidos:", error);

      if (axios.isAxiosError(error)) {
        console.error("Error de Axios:", error.response?.data);
        throw error.response?.data?.message || "Error al obtener datos.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }
}

export default LoginAxios;
