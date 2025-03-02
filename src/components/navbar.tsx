import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center text-white py-4 px-6">
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          🐾 PetGuardian
        </Link>

        <ul className="flex space-x-6">
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
        </ul>

        <div className="flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-yellow-400 hover:text-black transition">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
