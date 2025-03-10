"use client";

import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { roboto } from "./fonts";
import { useTokenLogger } from "@/hooks/useTokenLogger";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useTokenLogger();

  return (
    <html lang="es">
      <body className={`bg-black text-white h-screen ${roboto.className} antialiased`}>
        <Navbar />
        <main className="text-white container mx-auto mb-16 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
