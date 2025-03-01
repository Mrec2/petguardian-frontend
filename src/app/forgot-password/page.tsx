"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!email) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    // Simulación de envío de correo de recuperación
    console.log("Enviando correo de recuperación a:", email);
    setMessage(
      "Si el correo está registrado, recibirás un enlace para restablecer tu contraseña."
    );
    setError(""); // Limpiar errores si todo está bien
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      {/* Título */}
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        🔑 Recuperar Contraseña
      </h1>

      {/* Contenedor del formulario */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Mensaje de éxito */}
        {message && (
          <p className="text-green-400 text-center mb-4">{message}</p>
        )}

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Formulario */}
        <form
          onSubmit={handlePasswordReset}
          className="flex flex-col space-y-4"
        >
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
              placeholder="ejemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Botón de recuperación */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
          >
            Enviar Enlace de Recuperación
          </button>
        </form>

        {/* Enlaces adicionales */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            ¿Recordaste tu contraseña?{" "}
            <Link
              href="/login"
              className="text-yellow-400 hover:text-yellow-500 font-bold"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
