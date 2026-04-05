"use client";

import { ShieldCheck, Lock, Server, Eye } from "lucide-react";

export default function LgpdPage() {
  return (
    <main className="bg-white text-[#0b2540]">

      {/* HERO */}
      <section className="bg-[#082a3f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="w-14 h-14 mx-auto text-[#d46a1f]" />

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Consultoria LGPD
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Somos uma empresa reconhecida em conformidade com a LGPD, oferecendo consultoria completa para empresas que desejam proteger dados, reduzir riscos legais e garantir a confiança de seus clientes.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Proteção e conformidade estratégica
            </h2>

            <p className="mt-6 text-gray-600">
              A conformidade com a LGPD vai além de documentos e políticas. Envolve processos bem estruturados, avaliação de riscos, treinamento de equipes e monitoramento contínuo.
            </p>

            <p className="mt-4 text-gray-600">
              Na Argus IT, oferecemos consultoria completa, adaptada ao tamanho e necessidade do seu negócio, garantindo que sua empresa esteja sempre em conformidade com a Lei Geral de Proteção de Dados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <Lock className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Avaliação de Conformidade
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Analisamos os processos internos para identificar riscos e ajustar práticas ao padrão LGPD.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Server className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Implementação de Políticas
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Criamos políticas de privacidade e tratamento de dados para proteger sua empresa e clientes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <Eye className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Treinamento de Equipes
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Capacitação dos colaboradores para garantir boas práticas no tratamento de dados pessoais.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-[#0b5b8a]" />
              <h3 className="mt-4 font-semibold">
                Monitoramento Contínuo
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Acompanhamento constante para manter sua empresa sempre em conformidade e segura.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Sua empresa está realmente em conformidade com a LGPD?
          </h2>

          <p className="mt-4 text-gray-600">
            Fale com nossos especialistas e descubra como proteger dados, reduzir riscos legais e garantir a confiança de seus clientes.
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
  );
}