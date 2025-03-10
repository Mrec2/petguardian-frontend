import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/posts";

class PostAxios {
  
  static async getAllPosts() {
    try {
      const response = await axios.get(API_BASE_URL);
      console.log("Posts recibidos del backend:", response.data);
      
      return response.data;
    } catch (error: unknown) {
      console.error("Error obteniendo posts:", error);

      if (axios.isAxiosError(error)) {
        throw error.response?.data?.message || "Error al obtener posts.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }

  
  static async createPost(title: string, content: string, author: string) {
    const token = localStorage.getItem("authToken");

    if (!token) throw new Error("Usuario no autenticado");

    try {
      console.log(" Enviando post a backend:", { title, content, author });

      const response = await axios.post(
        API_BASE_URL,
        { title, content, author },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Post creado con éxito:", response.data);
      return response.data;
    } catch (error: unknown) {
      console.error("Error creando post:", error);

      if (axios.isAxiosError(error)) {
        throw error.response?.data?.message || "Error al publicar.";
      }
      throw new Error("Ocurrió un error desconocido.");
    }
  }
}

export default PostAxios;
