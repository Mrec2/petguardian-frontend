import "@/app/globals.css"; 
import Navbar from "@/components/navbar";
import { roboto } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-black text-white h-screen ${roboto.className} antialiased`}>
        <Navbar />
        <main className="text-white container mx-auto ">{children}</main>
      </body>
    </html>
  );
}
