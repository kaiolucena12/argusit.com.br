import { ShieldCheck, Lock, Server, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Segurança Digital para Empresas",
  description:
    "Soluções em segurança digital para proteger dados, redes e sistemas corporativos contra ameaças cibernéticas. Proteção, monitoramento e prevenção.",
}

export default function SegurancaDigital() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Segurança Digital para Empresas
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Protegemos dados, redes e sistemas corporativos contra ameaças
            digitais, garantindo continuidade operacional, conformidade e
            tranquilidade para o seu negócio.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Proteção estratégica contra ameaças digitais
            </h2>

            <p className="mt-6 text-gray-600">
              A segurança digital vai além da instalação de ferramentas. Ela
              envolve estratégia, monitoramento contínuo e boas práticas para
              proteger informações sensíveis, evitar ataques e reduzir riscos
              operacionais.
            </p>

            <p className="mt-4 text-gray-600">
              Na Argus IT, implementamos soluções de segurança alinhadas às
              necessidades reais do ambiente corporativo, respeitando normas,
              escalabilidade e performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <Lock className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Proteção de Dados
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Segurança de informações sensíveis com políticas de acesso,
                criptografia e controle.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Server className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Segurança de Redes
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Firewalls, segmentação de rede e proteção contra acessos
                indevidos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Eye className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Monitoramento Contínuo
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Identificação de ameaças em tempo real e resposta rápida a
                incidentes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Prevenção de Incidentes
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Redução de vulnerabilidades e fortalecimento do ambiente de TI.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Sua empresa está realmente protegida?
          </h2>

          <p className="mt-4 text-gray-600">
            Fale com nossos especialistas e descubra como fortalecer a
            segurança digital do seu ambiente corporativo.
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
