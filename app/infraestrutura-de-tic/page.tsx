import {
  Network,
  Server,
  Wifi,
  Cloud,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Infraestrutura de TIC para Empresas",
  description:
    "Projetos de infraestrutura de TIC com foco em redes, servidores, conectividade e alta disponibilidade para ambientes corporativos.",
}

export default function InfraestruturaTIC() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Network className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Infraestrutura de TIC para Empresas
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Projetamos e implementamos ambientes de tecnologia robustos,
            seguros e escaláveis, preparados para sustentar o crescimento
            do seu negócio.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Infraestrutura sólida é base para resultados
            </h2>

            <p className="mt-6 text-gray-600">
              Uma infraestrutura de TIC bem planejada garante desempenho,
              segurança e disponibilidade. Ela reduz falhas, melhora a
              produtividade e prepara a empresa para novos desafios
              tecnológicos.
            </p>

            <p className="mt-4 text-gray-600">
              Atuamos desde o projeto até a implementação e suporte,
              considerando redes, servidores, conectividade, nuvem e
              redundância.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <Network className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Redes Corporativas
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Estruturação de redes seguras, segmentadas e de alto
                desempenho.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Server className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Servidores e Data Center
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Implementação e gerenciamento de servidores físicos e
                virtuais.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Wifi className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Conectividade e Wi-Fi
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Redes sem fio corporativas estáveis, seguras e com
                cobertura adequada.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Cloud className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Infraestrutura em Nuvem
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Ambientes híbridos e cloud com foco em escalabilidade e
                disponibilidade.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Sua infraestrutura está preparada para crescer?
          </h2>

          <p className="mt-4 text-gray-600">
            Conte com uma infraestrutura de TIC planejada, segura e
            preparada para suportar a evolução do seu negócio.
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
