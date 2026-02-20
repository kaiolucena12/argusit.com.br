import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Argus IT",
  description: "Soluções em Tecnologia e Segurança Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#082a3f] antialiased`}>
        
        {/* Header fixo */}
        <Header />

        {/* Conteúdo principal */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
