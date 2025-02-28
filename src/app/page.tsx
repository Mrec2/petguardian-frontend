"use client"; 

import { useState } from "react";
import api from "@/utils/initAxios";

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/message"); 
      console.log(response.data);
      setData(response.data); 
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setData("Error en la petición.");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">🐾 Bienvenido a PetGuardian 🐱</h1>
      <button
        onClick={fetchData}
        className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition"
      >
        Obtener Datos
      </button>
      {loading && <p className="mt-4">Cargando...</p>}
      {data && <p className="mt-4 text-lg">{data}</p>}
    </div>
  );
}
