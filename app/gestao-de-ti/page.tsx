import { Settings, BarChart3, Clock, Shield } from "lucide-react"
import type { Metadata } from "next"
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gestão de TI para Empresas",
  description:
    "Serviços de gestão de TI para empresas que buscam organização, controle, segurança e eficiência operacional. Monitoramento e governança de TI.",
}

export default function GestaoDeTI() {
  return (
    
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Settings className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Gestão de TI para Empresas
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Organização, monitoramento e governança da tecnologia da informação
            para reduzir riscos, aumentar produtividade e garantir a
            continuidade do negócio.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              TI organizada é sinônimo de eficiência
            </h2>

            <p className="mt-6 text-gray-600">
              A gestão de TI vai muito além do suporte técnico. Ela envolve
              planejamento, controle de ativos, monitoramento contínuo e
              alinhamento da tecnologia com os objetivos estratégicos da
              empresa.
            </p>

            <p className="mt-4 text-gray-600">
              Na Argus IT, atuamos de forma preventiva, reduzindo falhas,
              melhorando processos e garantindo que a TI trabalhe a favor do
              crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Monitoramento Proativo
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Acompanhamento contínuo de servidores, redes e serviços
                críticos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Clock className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Continuidade Operacional
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Redução de indisponibilidades e resposta rápida a incidentes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Shield className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Governança e Segurança
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Políticas, controles e boas práticas alinhadas ao ambiente
                corporativo.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Settings className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Padronização de Processos
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Organização de fluxos, ativos e documentações de TI.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Sua TI está preparada para crescer com a empresa?
          </h2>

          <p className="mt-4 text-gray-600">
            Conte com uma gestão de TI estratégica, preventiva e alinhada ao
            seu negócio.
          </p>

          <a
            href="https://wa.me/5581999776309"
            className="inline-block mt-8 bg-[#d46a1f] hover:bg-[#b85618] text-white font-medium px-8 py-4 rounded-xl transition-colors"
          >
            Falar com um especialista
          </a>
        </div>
      </section>

    </main>
  )
}
