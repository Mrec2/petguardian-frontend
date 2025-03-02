"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos de menú y cerrar

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center text-white py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          🐾 PetGuardian
        </Link>

        {/* Botón de menú hamburguesa en móviles */}
        <button
          className="lg:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />} {/* Icono cambia según el estado */}
        </button>

        {/* Menú principal */}
        <ul
          className={`lg:flex space-x-6 absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent p-6 lg:p-0 ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 lg:flex-row flex-col items-center`}
        >
          <li>
            <Link href="/about" className="hover:text-yellow-400">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/lost-pets" className="hover:text-yellow-400">
              Mascotas Perdidas (En desarrollo)
            </Link>
          </li>
          <li>
            <Link href="/found-pets" className="hover:text-yellow-400">
              Mascotas Encontradas (En desarrollo)
            </Link>
          </li>
          <li>
            <Link href="/wallapet" className="hover:text-yellow-400">
              Wallapet (En desarrollo)
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contáctanos (En desarrollo)
            </Link>
          </li>

          {/* Botones de Login y Registro dentro del menú en móviles */}
          <li className="lg:hidden mt-4 flex flex-col space-y-4 w-full text-center">
            <Link href="/login">
              <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-yellow-400 hover:text-black transition">
                Iniciar Sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">
                Registrarse
              </button>
            </Link>
          </li>
        </ul>

        {/* Botones de Login y Registro (solo visibles en escritorio) */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/login">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-yellow-400 hover:text-black transition">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/register">
            <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
