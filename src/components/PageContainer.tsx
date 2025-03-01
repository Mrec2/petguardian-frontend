export default function PageContainer({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center justify-top text-center p-10  bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">{title}</h1>
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 max-w-3xl w-full">
        {children}
      </div>
    </div>
  );
}
