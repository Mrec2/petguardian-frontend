import axios from "axios";


const API_BASE_URL = "http://localhost:8080/api/users";

class InitAxios {
  
  static async registerUser(name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data?.message || "Error al registrar el usuario.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
    
  }
}

export default InitAxios;
