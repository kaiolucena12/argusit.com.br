import {
  Headset,
  Wrench,
  MonitorCheck,
  Clock,
  ShieldCheck,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Assistência Técnica em TI para Empresas",
  description:
    "Assistência técnica especializada em TI para empresas. Suporte preventivo e corretivo, manutenção de computadores, servidores e redes corporativas.",
}

export default function AssistenciaTecnica() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Headset className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Assistência Técnica em TI
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Suporte técnico especializado para ambientes corporativos,
            garantindo estabilidade, segurança e continuidade das
            operações de tecnologia da sua empresa.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Suporte técnico que mantém sua empresa operando
            </h2>

            <p className="mt-6 text-gray-600">
              A assistência técnica corporativa exige rapidez, organização
              e conhecimento especializado. Atuamos de forma preventiva
              e corretiva para reduzir falhas, evitar indisponibilidades
              e garantir o pleno funcionamento do ambiente de TI.
            </p>

            <p className="mt-4 text-gray-600">
              Na Argus IT, cada atendimento segue processos bem definidos,
              priorizando eficiência, segurança e alinhamento com os
              objetivos do seu negócio.
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <Wrench className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Manutenção Preventiva
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Identificação antecipada de falhas para evitar paradas
                inesperadas.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <MonitorCheck className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Suporte Corretivo
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Resolução rápida e eficiente de problemas técnicos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Clock className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Atendimento Ágil
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Redução do tempo de inatividade e impacto operacional.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Segurança no Atendimento
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Boas práticas de segurança aplicadas em cada intervenção.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Precisa de suporte técnico confiável?
          </h2>

          <p className="mt-4 text-gray-600">
            Conte com uma assistência técnica preparada para atender
            sua empresa com agilidade, organização e profissionalismo.
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
