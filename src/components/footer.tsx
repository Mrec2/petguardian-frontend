import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
       
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-yellow-400">🐾 PetGuardian</h2>
          <p className="text-gray-400 text-sm">Conectando mascotas con familias amorosas desde 2024.</p>
        </div>

        
        <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/lost-pets" className="hover:text-yellow-400 transition">
              Mascotas Perdidas
            </Link>
          </li>
          <li>
            <Link href="/found-pets" className="hover:text-yellow-400 transition">
              Mascotas Encontradas
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contáctanos
            </Link>
          </li>
        </ul>

       
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            📘 Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            🐦 Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            📷 Instagram
          </a>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PetGuardian. Todos los derechos reservados.
      </div>
    </footer>
  );
}
