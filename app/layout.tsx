import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body
        className={`${inter.className} bg-[#082a3f] antialiased flex flex-col min-h-screen`}
      >
        {/* Header fixo */}
        <Header />

        {/* Conteúdo principal */}
        <main className="pt-20 flex-grow">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
