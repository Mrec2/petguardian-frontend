import PageContainer from "@/components/PageContainer";

export default function LostPetsPage() {
  return (
    // PROBLEMA CON EL PAGECONTAINER -> DEJA EL FOOTER EN EL MEDIO
    <PageContainer title="Mascotas Perdidas">
      <p className=" text-lg">
        Aquí encontrarás una lista de mascotas que han sido reportadas como perdidas. Ayúdanos a encontrarlas. 
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1 p-6 bg-gray-900 rounded-lg shadow-lg">
          <figure>
            <img src="https://picsum.photos/200/300" alt="perro perdido" className="w-full h-48 object-cover rounded-md" />
          </figure>
          <h2 className="text-2xl font-bold text-yellow-400 mt-4">Perro Perdido</h2>
          <p className="text-gray-300 mt-2">
            Ayudanos a encontrar a este perro que se encuentra perdido en la calle.
          </p>
        </div>
        <div className="flex-1 p-6 bg-gray-900 rounded-lg shadow-lg">
          <figure>
            <img src="https://picsum.photos/200/301" alt="gato perdido" className="w-full h-48 object-cover rounded-md" />
          </figure>
          <h2 className="text-2xl font-bold text-yellow-400 mt-4">Gato Perdido</h2>
          <p className="text-gray-300 mt-2">
            Ayudanos a encontrar a este gato que se encuentra perdido en la calle.
          </p>
        </div>
        <div className="flex-1 p-6 bg-gray-900 rounded-lg shadow-lg">
          <figure>
            <img src="https://picsum.photos/200/302" alt="perro perdido" className="w-full h-48 object-cover rounded-md" />
          </figure>
          <h2 className="text-2xl font-bold text-yellow-400 mt-4">Perro Perdido</h2>
          <p className="text-gray-300 mt-2">
            Ayudanos a encontrar a este perro que se encuentra perdido en la calle.
          </p>
        </div>
        <div className="flex-1 p-6 bg-gray-900 rounded-lg shadow-lg">
          <figure>
            <img src="https://picsum.photos/200/303" alt="gato perdido" className="w-full h-48 object-cover rounded-md" />
          </figure>
          <h2 className="text-2xl font-bold text-yellow-400 mt-4">Gato Perdido</h2>
          <p className="text-gray-300 mt-2">
            Ayudanos a encontrar a este gato que se encuentra perdido en la calle.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

