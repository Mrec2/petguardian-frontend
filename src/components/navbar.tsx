"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuthStore } from "@/hooks/authStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, name, logout } = useAuthStore();

  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center text-white py-4 px-8">
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          PetGuardian
        </Link>

        <button
          className="lg:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul
          className={`lg:flex lg:items-center lg:justify-center lg:space-x-8 absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent p-6 lg:p-0 ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 lg:flex-row flex-col items-center`}
        >
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>

          {isAuthenticated && (
            <>
              <li><Link href="/lost-pets" className="hover:text-yellow-400">Lost Pets</Link></li>
              <li><Link href="/found-pets" className="hover:text-yellow-400">Found Pets</Link></li>
              <li><Link href="/wallapet" className="hover:text-yellow-400">Wallapet</Link></li>
              <li><Link href="/board" className="hover:text-yellow-400">Board</Link></li>
            </>
          )}
        </ul>

        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <span className="text-yellow-400 font-bold">{name}</span>
              <button
                onClick={logout}
                className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-yellow-400">Login</Link>
              <Link href="/register" className="hover:text-yellow-400">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
