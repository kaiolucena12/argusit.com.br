"use client";

import Image from "next/image";
import Link from "next/link";
import { Headset, Network, Settings, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO — centralizado de verdade, sem padding extra */}
      <section className="bg-[#061822] min-h-[calc(100svh-64px)] grid place-content-center text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3 md:gap-4">
          {/* Logo: escala correta; nada de margens inferiores arbitrárias */}
          <Image
            src="/logo-argus.png"
            alt="Argus IT"
            width={208} // ~w-52
            height={72}
            className="h-auto w-40 md:w-52"
            priority
          />

          {/* Título com line-height compacto e animação suave */}
          <h1
            className="text-white font-semibold tracking-tight
                       text-[28px] leading-[1.15]
                       md:text-6xl md:leading-[1.08] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Tecnologia que protege,
            <br />
            conecta e impulsiona empresas
          </h1>

          {/* Parágrafo com respiro medido e animação */}
          <p
            className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            A Argus IT oferece soluções completas em tecnologia da informação,
            segurança digital, infraestrutura de redes e gestão de TI para
            empresas que buscam estabilidade, proteção e crescimento sustentável.
          </p>

          {/* CTA com presença, sem exagero no espaçamento */}
          <a
            href="https://wa.me/5581999776309"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center
                       bg-[#d46a1f] hover:bg-[#b85618] text-white
                       font-medium px-8 md:px-10 py-3.5 md:py-4 rounded-xl
                       transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d46a1f] focus:ring-offset-[#061822]
                       animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            Falar com um especialista
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-white text-[#0b2540] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Soluções de tecnologia sob medida
          </h2>

          <p
            className="mt-4 max-w-3xl mx-auto text-gray-600 animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            Atuamos de forma estratégica para garantir estabilidade, segurança e
            desempenho à infraestrutura de tecnologia da sua empresa, com
            soluções pensadas para crescer junto com o seu negócio.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ASSISTÊNCIA TÉCNICA */}
            <div
              className="group border border-gray-200 rounded-2xl p-8 transition-all
                         hover:-translate-y-2 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              <Headset className="w-10 h-10 mx-auto text-[#0b5b8a] group-hover:text-[#d46a1f] transition-colors" />
              <h3 className="mt-6 font-semibold">Assistência Técnica</h3>
              <p className="mt-3 text-sm text-gray-600">
                Suporte técnico especializado para ambientes corporativos, com
                agilidade e confiabilidade.
              </p>
            </div>

            {/* INFRAESTRUTURA DE TIC */}
            <Link href="/infraestrutura-de-tic" className="group">
              <div
                className="border border-gray-200 rounded-2xl p-8 transition-all
                           hover:-translate-y-2 hover:shadow-xl hover:border-[#0b5b8a] animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                <Network className="w-10 h-10 mx-auto text-[#0b5b8a] group-hover:text-[#d46a1f] transition-colors" />
                <h3 className="mt-6 font-semibold">Infraestrutura de TIC</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Projetos de redes, servidores e conectividade corporativa com
                  alto desempenho.
                </p>
              </div>
            </Link>

            {/* GESTÃO DE TI */}
            <Link href="/gestao-de-ti" className="group">
              <div
                className="border border-gray-200 rounded-2xl p-8 transition-all
                           hover:-translate-y-2 hover:shadow-xl hover:border-[#0b5b8a] animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                <Settings className="w-10 h-10 mx-auto text-[#0b5b8a] group-hover:text-[#d46a1f] transition-colors" />
                <h3 className="mt-6 font-semibold">Gestão de TI</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Monitoramento, governança e organização estratégica da
                  tecnologia da sua empresa.
                </p>
              </div>
            </Link>

            {/* SEGURANÇA DIGITAL */}
            <Link href="/seguranca-digital" className="group">
              <div
                className="border border-gray-200 rounded-2xl p-8 transition-all
                           hover:-translate-y-2 hover:shadow-xl hover:border-[#0b5b8a] animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                <ShieldCheck className="w-10 h-10 mx-auto text-[#0b5b8a] group-hover:text-[#d46a1f] transition-colors" />
                <h3 className="mt-6 font-semibold">Segurança Digital</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Proteção de dados, redes e sistemas contra ameaças digitais e
                  ataques cibernéticos.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}