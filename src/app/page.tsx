"use client";

export default function Home() {
  return (
    <div className="h-auto flex flex-col items-center text-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold text-yellow-400 mt-16">
         Bienvenido a PetGuardian 
      </h1>

      <p className="text-lg text-gray-300 max-w-3xl mt-4">
        La plataforma que conecta refugios y rescatistas con personas que desean
        apadrinar y ayudar a mascotas en busca de un hogar. ¡Únete a nuestra
        comunidad y cambia vidas! 
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400">
            Encuentra un Compañero
          </h3>
          <p className="text-gray-300">
            Conecta con mascotas en busca de un hogar amoroso.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400">
             Apoya con Donaciones
          </h3>
          <p className="text-gray-300">
            Cada donación ayuda a alimentar y cuidar a las mascotas rescatadas.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400">
             Reporta Mascotas Perdidas
          </h3>
          <p className="text-gray-300">
            Ayuda a reunir mascotas con sus dueños mediante nuestro sistema de
            alertas.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
           Nuestro Impacto (Simulación)
        </h2>
        <p className="text-gray-300">
          Actualmente, PetGuardian es un proyecto en desarrollo y aún no cuenta
          con datos reales. Los siguientes números son una **simulación** que
          representa el impacto que aspiramos alcanzar en el futuro, cuando la
          plataforma esté en pleno funcionamiento.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-yellow-400">+500</h3>
            <p className="text-gray-300">Mascotas Apadrinadas (simulación)</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-yellow-400">+200</h3>
            <p className="text-gray-300">Refugios Asociados (simulación)</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-yellow-400">+1000</h3>
            <p className="text-gray-300">Donaciones Realizadas (simulación)</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
           ¿Cómo Funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400">
              1️⃣ Explora
            </h3>
            <p className="text-gray-300">
              Busca entre cientos de mascotas disponibles para apadrinar o
              adoptar.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400">
              2️⃣ Conéctate
            </h3>
            <p className="text-gray-300">
              Habla con refugios y rescatistas para conocer más sobre la
              mascota.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400">3️⃣ Ayuda</h3>
            <p className="text-gray-300">
              Apadrina, adopta o ayuda con donaciones a los animales que lo
              necesitan.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
           Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="italic text-gray-300">
              Gracias a PetGuardian, encontré a mi perro perdido en solo dos
              días. ¡Una gran plataforma!
            </p>
            <p className="text-yellow-400 mt-2 font-semibold">
              - Carla Mendoza
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="italic text-gray-300">
              Apadriné a un gatito en un refugio y ahora es parte de mi familia.
              ¡100% recomendado!
            </p>
            <p className="text-yellow-400 mt-2 font-semibold">- Juan Pérez</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
           ¡Comienza Hoy Mismo!
        </h2>
        <p className="text-gray-300 max-w-lg">
          Explora nuestras mascotas disponibles o regístrate para ser un padrino
          y hacer la diferencia.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600 transition">
            Registrarse
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition">
            Explorar Mascotas
          </button>
        </div>
      </div>
    </div>
  );
}
