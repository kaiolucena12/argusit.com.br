import Image from "next/image";

export default function QuemSomos() {
  return (
    <main className="font-sans text-[#0b2540]">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#0b2540] to-[#082a3f] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/recife.png" alt="Recife" fill className="object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            Transformando TI em Resultados Concretos
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Entregando soluções estratégicas e eficientes, convertendo tecnologia em vantagem competitiva e crescimento sustentável para sua empresa.
          </p>
          <a
            href="https://wa.me/5581999776309"
            className="inline-block mt-10 bg-[#d46a1f] hover:bg-[#b85618] text-white font-semibold px-12 py-4 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            Fale com um especialista
          </a>
        </div>
      </section>

      {/* QUEM SOMOS */}
<section className="py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0b2540]">
      Quem Somos
    </h2>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
      A Argus IT nasceu em 2019, na garagem e no coração de um jovem recifense, movido por paixão e determinação. Desde os primeiros dias, enfrentamos desafios complexos, incluindo a pandemia, que nos testou de formas inimagináveis. Com coragem e resiliência, transformamos adversidade em oportunidade.
    </p>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
      Hoje, com mais dois sócios ao lado, consolidamos a Argus IT como uma empresa referência em soluções de tecnologia no estado. Nosso compromisso é entregar excelência em segurança digital, infraestrutura de redes e serviços corporativos, ajudando empresas a prosperarem em um mundo cada vez mais digital.
    </p>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
      Guiados por inovação, ética e foco em resultados, transformamos tecnologia em vantagem competitiva, sempre priorizando qualidade, confiança e experiência superior para nossos clientes.
    </p>
  </div>
</section>

      {/* SOBRE */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Experiência Global, Soluções Locais
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              A Argus IT redefine a maneira como empresas gerenciam tecnologia. Combinamos expertise técnica, visão estratégica e comprometimento com segurança digital, transformando infraestrutura de TI em um diferencial competitivo.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Atuamos de forma consultiva, entregando soluções escaláveis, seguras e alinhadas às metas corporativas, desde pequenas empresas até multinacionais.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all">
            <h3 className="text-2xl font-semibold mb-6">Nossos Diferenciais</h3>
            <ul className="space-y-5 text-gray-700 text-lg md:text-xl list-disc list-inside">
              <li>Atuação estratégica em ambientes corporativos complexos</li>
              <li>Segurança digital de ponta e continuidade operacional garantida</li>
              <li>Equipe de especialistas em constante atualização tecnológica</li>
              <li>Processos e metodologias alinhadas às melhores práticas internacionais</li>
              <li>Suporte consultivo, preventivo e proativo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES COM CAIXAS BRANCAS */}
<section className="py-32 bg-gradient-to-r from-[#082a3f] to-[#0b2540]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
    {[
      { title: "Missão", text: "Prover soluções de tecnologia de nível global, combinando inovação, segurança e inteligência operacional, para capacitar nossos clientes a liderarem seus mercados com excelência." },
      { title: "Visão", text: "Ser referência internacional em tecnologia corporativa, destacando-se pela confiabilidade, inovação contínua e impacto transformador nos negócios de nossos clientes." },
      { title: "Valores", text: "Integridade, inovação, excelência operacional, segurança estratégica e compromisso com resultados mensuráveis e sustentáveis." },
    ].map((item) => (
      <div
        key={item.title}
        className="p-8 bg-white rounded-3xl shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
      >
        <h3 className="text-2xl font-semibold mb-4 text-[#0b2540]">{item.title}</h3>
        <p className="leading-relaxed text-[#0b2540]">{item.text}</p>
      </div>
    ))}
  </div>
</section>

{/* SEÇÃO COMPARATIVA PREMIUM COM ICONE */}
<section className="py-32 bg-[#f8fafc]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
    
    {/* TEXTO DE INCENTIVO */}
    <div className="md:col-span-1 flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0b2540]">Ainda em dúvida?</h2>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        Sua empresa contará com profissionais certificados e de alta qualidade, utilizando as melhores tecnologias do mercado, com soluções estratégicas e custo competitivo.
      </p>
    </div>

    {/* CAIXA ARGUS IT */}
    <div className="md:col-span-1 bg-white p-10 rounded-3xl shadow-2xl border border-transparent transition-all 
                    hover:shadow-3xl hover:border-yellow-500 hover:-translate-y-1 hover:scale-105">
      <h3 className="text-2xl font-bold mb-4 text-[#0b2540] flex items-center gap-2">
        ✅ Argus IT
      </h3>
      <p className="font-semibold text-gray-700 mb-4">oferece:</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>✅ Suporte Presencial</li>
        <li>💻 Suporte Remoto</li>
        <li>📞 Chamados Ilimitados</li>
        <li>🏢 Departamento de TI Completo</li>
        <li>💡 Consultoria</li>
        <li>⏱️ SLA de Atendimento</li>
        <li>⚡ Suporte Prioritário e de Emergência</li>
      </ul>
      <a
        href="https://wa.me/5581999776309"
        className="inline-block mt-6 bg-[#d46a1f] hover:bg-[#b85618] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
      >
        Solicitar Proposta
      </a>
    </div>

    {/* CAIXA OUTROS */}
    <div className="md:col-span-1 bg-white p-10 rounded-3xl shadow-lg border border-gray-200 transition-all 
                    hover:shadow-xl hover:-translate-y-1 hover:scale-105">
      <h3 className="text-2xl font-bold mb-4 text-[#0b2540] flex items-center gap-2">
        ❌ OUTROS
      </h3>
      <p className="font-semibold text-gray-700 mb-4">oferecem:</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>✅ Suporte Presencial</li>
        <li>💻 Suporte Remoto</li>
        <li>📞 Chamados Limitados</li>
        <li>⏰ Atendimento Seg – Sex</li>
      </ul>
    </div>

  </div>
</section>
      {/* NÚMEROS */}
      <section className="py-32 bg-[#f0f4f8] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Nosso Impacto</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {[
              { number: "6+", label: "Anos de Experiência" },
              { number: "30+", label: "Empresas Atendidas" },
              { number: "120+", label: "Projetos Entregues" },
              { number: "95%", label: "Satisfação de Clientes" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <h3 className="text-5xl md:text-6xl font-bold text-[#d46a1f]">{item.number}</h3>
                <p className="mt-2 text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      


    </main>
  );
}