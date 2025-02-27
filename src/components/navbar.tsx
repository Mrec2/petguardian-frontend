import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          🐾 PetGuardian
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="hover:text-yellow-400">Sobre Nosotros</Link></li>
          <li><Link href="/lost-pets" className="hover:text-yellow-400">Mascotas Perdidas</Link></li>
          <li><Link href="/found-pets" className="hover:text-yellow-400">Mascotas Encontradas</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contáctanos</Link></li>
        </ul>
      </div>
    </nav>
  );
}
