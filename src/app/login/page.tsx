"use client";

import { useState } from "react";
import Link from "next/link";
import LoginAxios from "@/utils/loginAxios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  //Revisar esta parte para que cuando sea credenciales incorrectas lo imprima en el front.
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
  
    try {
      const response = await LoginAxios.loginUser(email, password);
  
      if (response.token) {
        // Guardar el token en localStorage (para mantenerlo después de cerrar la pestaña)
        localStorage.setItem("authToken", response.token);
  
        // O usar sessionStorage si solo debe durar la sesión actual
        // sessionStorage.setItem("authToken", response.token);
  
        console.log("Token guardado:", response.token);
        router.push("/login-success"); // Redirigir tras inicio de sesión exitoso
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Contraseña o Email incorrecto");
      }
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Iniciar Sesión
      </h1>

      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link
            href="/forgot-password"
            className="text-gray-400 hover:text-yellow-400 text-sm"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <p className="mt-2 text-gray-400 text-sm">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-yellow-400 hover:text-yellow-500 font-bold"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
