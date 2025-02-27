import PageContainer from "@/components/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer title="Contáctanos">
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Tu Nombre"
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Tu Email"
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md"
        />
        <textarea
          placeholder="Tu Mensaje"
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md h-32"
        />
        <button className="bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition">
          Enviar Mensaje
        </button>
      </form>
    </PageContainer>
  );
}
