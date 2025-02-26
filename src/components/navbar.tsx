import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🐾 PetGuardian
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:underline">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/lost-pets" className="hover:underline">
              Mascotas Perdidas
            </Link>
          </li>
          <li>
            <Link href="/found-pets" className="hover:underline">
              Mascotas Encontradas
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
