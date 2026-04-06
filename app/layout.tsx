import "./globals.css"
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

  export const metadata = {
  title: "Argus IT | Suporte de TI e Segurança da Informação em Recife",
  description: "Empresa especializada em suporte de TI para empresas, segurança da informação, backup em nuvem e monitoramento de redes em Recife.",
  keywords: [
  "suporte de TI para empresas em Recife",
  "empresa de TI em Recife",
  "manutenção de computadores empresarial",
  "segurança da informação para empresas",
  "backup em nuvem corporativo",
  "monitoramento de redes",
  "infraestrutura de TI empresarial",
  "suporte técnico em TI",
  "gestão de redes corporativas",
  "empresa de tecnologia em Recife",
  "terceirização de TI",
  "consultoria em tecnologia da informação",
  "instalação de servidores",
  "suporte remoto TI",
  "soluções em TI empresarial",
  "proteção de dados LGPD",
  "cibersegurança para empresas",
  "serviços de TI corporativo",
  "empresa de suporte técnico",
  "administração de redes empresariais",
  "outsourcing de TI",
  "help desk empresarial",
  "service desk TI",
  "suporte técnico corporativo",
  "empresa de informática empresarial",
  "manutenção de servidores",
  "gestão de infraestrutura de TI",
  "empresa de redes corporativas",
  "segurança de rede empresarial",
  "firewall para empresas",
  "monitoramento de servidores",
  "gestão de backups",
  "recuperação de dados empresarial",
  "suporte técnico especializado",
  "empresa de tecnologia da informação",
  "serviços gerenciados de TI",
  "MSP suporte de TI",
  "implantação de redes corporativas",
  "configuração de servidores Windows",
  "suporte em nuvem AWS",
  "empresa de cloud computing",
  "virtualização de servidores",
  "administração de sistemas Linux",
  "suporte técnico para pequenas e médias empresas",
  "TI para empresas Recife",
  "empresa de TI corporativa",
  "soluções tecnológicas empresariais",
  "gestão de ativos de TI",
  "monitoramento 24 horas TI",
  "empresa de segurança digital",
  "proteção contra ataques cibernéticos",
  "auditoria de segurança da informação"
]
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
        <Header />

        <main className="pt-20 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}