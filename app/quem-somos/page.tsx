import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quem Somos | Argus IT",
  description:
    "A Argus IT é uma empresa especializada em tecnologia da informação, segurança digital, infraestrutura de redes e gestão de TI para empresas.",
}

export default function QuemSomos() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Quem Somos
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Tecnologia aplicada com estratégia, segurança e visão de futuro.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Especialistas em tecnologia para ambientes corporativos
            </h2>

            <p className="mt-6 text-gray-600">
              A Argus IT nasceu com o propósito de entregar soluções
              tecnológicas sólidas, seguras e escaláveis para empresas
              que dependem da tecnologia para crescer e operar com
              eficiência.
            </p>

            <p className="mt-4 text-gray-600">
              Atuamos de forma estratégica, combinando conhecimento
              técnico, boas práticas de mercado e visão de negócio,
              garantindo que a tecnologia seja um pilar de crescimento
              e não um ponto de risco.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-10">
            <h3 className="text-xl font-semibold">
              Nossos diferenciais
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600 list-disc list-inside">
              <li>Atuação focada em ambientes corporativos</li>
              <li>Processos técnicos bem definidos</li>
              <li>Foco em segurança e continuidade operacional</li>
              <li>Atendimento consultivo e preventivo</li>
              <li>Equipe técnica constantemente atualizada</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold tracking-tight">
            Tecnologias que dominamos
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Trabalhamos com soluções reconhecidas mundialmente, aplicadas
            de forma estratégica e alinhadas às necessidades de cada
            ambiente corporativo.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">

            <Image
              src="/partners/fortinet.png"
              alt="Fortinet"
              width={140}
              height={60}
              className="mx-auto opacity-80 hover:opacity-100 transition"
            />

            <Image
              src="/partners/ubiquiti.png"
              alt="Ubiquiti"
              width={140}
              height={60}
              className="mx-auto opacity-80 hover:opacity-100 transition"
            />

            
            <Image
              src="/partners/bitdefender.png"
              alt="Bitdefender"
              width={160}
              height={60}
              className="mx-auto opacity-80 hover:opacity-100 transition"
            />

            <Image
              src="/partners/starlink.png"
              alt="Starlink"
              width={140}
              height={60}
              className="mx-auto opacity-80 hover:opacity-100 transition"
            />

          </div>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-semibold">Missão</h3>
            <p className="mt-4 text-gray-600">
              Proteger, organizar e potencializar ambientes de TI por
              meio de soluções seguras, eficientes e alinhadas ao negócio.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Visão</h3>
            <p className="mt-4 text-gray-600">
              Ser referência regional em tecnologia e segurança digital
              para empresas que valorizam confiabilidade e estratégia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Valores</h3>
            <p className="mt-4 text-gray-600">
              Ética, comprometimento, excelência técnica, segurança e
              evolução contínua.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#082a3f] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Tecnologia confiável começa com especialistas
          </h2>

          <p className="mt-4 text-gray-200">
            Fale com a Argus IT e descubra como podemos estruturar,
            proteger e evoluir o ambiente de TI da sua empresa.
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
