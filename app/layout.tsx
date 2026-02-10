import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata = {
  title: {
    default: "Argus IT | Tecnologia, Segurança Digital e Gestão de TI",
    template: "%s | Argus IT",
  },
  description:
    "A Argus IT é especializada em tecnologia, segurança digital, infraestrutura de TIC e gestão de TI para empresas. Soluções confiáveis para proteger e impulsionar seu negócio.",
  keywords: [
    "empresa de TI",
    "segurança digital",
    "infraestrutura de rede",
    "gestão de TI",
    "suporte técnico empresarial",
    "tecnologia da informação",
    "cibersegurança",
    "TI corporativa",
  ],
  authors: [{ name: "Argus IT" }],
  creator: "Argus IT",
  metadataBase: new URL("https://argusit.com.br"),
  openGraph: {
    title: "Argus IT | Tecnologia e Segurança Digital",
    description:
      "Soluções em tecnologia, segurança digital, infraestrutura e gestão de TI para empresas que buscam confiabilidade e crescimento.",
    url: "https://argusit.com.br",
    siteName: "Argus IT",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased bg-[#061822] text-white`}>
        {/* Cabeçalho fixo */}
        <Header />

        {/* Conteúdo do site */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
