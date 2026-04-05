import {
  Cloud,
  Database,
  Server,
  ShieldCheck,
  Lock,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cloud e Backup Corporativo em Nuvem",
  description:
    "Soluções de cloud computing e backup corporativo para empresas. Proteção, escalabilidade e continuidade de negócios com segurança de alto nível.",
}

export default function CloudBackup() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Cloud className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Cloud & Backup Corporativo
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Proteja os dados da sua empresa com soluções de cloud computing
            e backup de alto nível, garantindo continuidade operacional,
            segurança avançada e escalabilidade conforme o crescimento do negócio.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Segurança, confiabilidade e performance na nuvem
            </h2>

            <p className="mt-6 text-gray-600">
              Nossas soluções de cloud e backup são desenhadas para empresas que não podem
              se dar ao luxo de interrupções. Garantimos armazenamento seguro,
              replicação automática de dados e restauração rápida em caso de necessidade.
            </p>

            <p className="mt-4 text-gray-600">
              Com infraestrutura escalável e redundante, sua empresa estará pronta
              para crescer com total confiança, sem comprometer a segurança e a disponibilidade
              de informações críticas.
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <Server className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Infraestrutura Premium
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Data centers redundantes, alta disponibilidade e performance máxima.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Database className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Backup Automático
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cópias regulares e automáticas para proteção completa dos seus dados.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Segurança Avançada
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Criptografia de ponta a ponta e compliance com normas corporativas.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Lock className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Recuperação Rápida
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Restauração imediata de dados críticos para manter sua operação ativa.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Garanta a continuidade da sua empresa
          </h2>

          <p className="mt-4 text-gray-600">
            Descubra como nossas soluções de cloud e backup premium podem proteger
            seu negócio e otimizar o gerenciamento de dados corporativos.
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