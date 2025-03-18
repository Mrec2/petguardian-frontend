"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InitAxios from "@/utils/initAxios";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await InitAxios.registerUser(name, email, password);

      router.push("/register-success");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Crear Cuenta</h1>

      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm text-gray-400">
              Nombre Completo
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div>
            <label className="block text-sm text-gray-400">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-yellow-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "ocultar" : "ver"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            ¿Ya tienes una cuenta?{" "}
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
