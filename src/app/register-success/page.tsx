import Link from "next/link";

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold text-green-400 mb-6">
        ✅ Registro Exitoso
      </h1>

      <p className="text-lg text-gray-300 max-w-xl text-center">
        ¡Tu cuenta ha sido creada con éxito! Ahora puedes iniciar sesión y
        empezar a usar PetGuardian.
      </p>

      <Link href="/login">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
}
