"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Headset, Network, Settings, ShieldCheck } from "lucide-react";
import ParticlesBackground from "./components/ParticlesBackground";
import Autoplay from "embla-carousel-autoplay";
import StatsSection from "./components/StatsSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6 text-white overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,#082a3f,#0b3d5c,#061923,#0e2f44)] bg-[length:400%_400%] animate-gradient -z-20" />
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full -z-10" />

        <ParticlesBackground />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo-argus.png"
            alt="Argus IT"
            width={220}
            height={80}
            className="mb-8"
            priority
          />
        </motion.div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight relative z-10"
>
  Especialistas em Suporte de TI para Empresas
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.5 }}
  className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
>
  Tecnologia que protege,conecta e impulsiona empresas
</motion.p>

        {/* TEXTO OTIMIZADO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed"
        >
          A Argus IT é uma empresa de tecnologia sediada em Recife, especializada em infraestrutura, segurança da informação e gestão de ambientes corporativos.
          Ajudamos empresas a eliminar falhas, reduzir riscos e manter seus sistemas operando com máximo desempenho.
        </motion.p>

        {/* BOTÃO */}
        <motion.a
          href="https://wa.me/5581999776309"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 inline-flex bg-[#ff6a00] hover:bg-[#e65c00] 
                     text-white font-medium tracking-wide 
                     px-8 py-3 my-4 md:my-0 rounded-xl 
                     transition-all duration-300 
                     hover:scale-105 hover:shadow-lg"
        >
          Solicitar diagnóstico gratuito
        </motion.a>

        <div className="neon-divider w-full absolute bottom-0 left-0" />
      </section>
      <section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* TÍTULO */}
    <h2 className="text-3xl md:text-4xl font-semibold text-[#082a3f] leading-snug">
      Temos o departamento de TI completo para sua empresa
    </h2>

    {/* DESTAQUE */}
    <p className="mt-4 text-lg md:text-xl text-[#ff6a00] font-medium">
      Para quem exige alta performance, a Argus IT entrega.
    </p>

    {/* TEXTO */}
    <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
      Para empresas de todos os tamanhos, oferecemos um departamento de TI completo,
      cuidando de toda a sua infraestrutura, segurança e suporte técnico.
      <br />
      Enquanto isso, você foca no crescimento do seu negócio.
    </p>

  </div>

  

  {/* IMAGEM GRANDE ESTILO SIGMATECH */}
  <div className="mt-16 px-4">

  {/* 📱 MOBILE - CARROSSEL */}
  <div className="md:hidden overflow-x-auto">
    <div className="flex gap-4 snap-x snap-mandatory">

      <img
        src="/cropped-Image-11.jpg"
        className="snap-center flex-shrink-0 w-[85%] h-[200px] object-cover rounded-xl shadow-xl"
      />

      <img
        src="/cropped-consultoria-de-ti1.jpg"
        className="snap-center flex-shrink-0 w-[85%] h-[200px] object-cover rounded-xl shadow-xl"
      />

      <img
        src="/cropped-PDCA-720-11.jpg"
        className="snap-center flex-shrink-0 w-[85%] h-[200px] object-cover rounded-xl shadow-xl"
      />

    </div>
  </div>

  {/* 💻 DESKTOP - 3 IMAGENS */}
  <div className="hidden md:flex justify-center items-center gap-6">

    <img
      src="/cropped-Image-11.jpg"
      className="w-[280px] h-[200px] object-cover rounded-xl shadow-2xl opacity-80 scale-95"
    />

    <img
      src="/cropped-consultoria-de-ti1.jpg"
      className="w-[340px] h-[240px] object-cover rounded-xl shadow-2xl scale-110 z-10"
    />

    <img
      src="/cropped-PDCA-720-11.jpg"
      className="w-[280px] h-[200px] object-cover rounded-xl shadow-2xl opacity-80 scale-95"
    />

  </div>

</div>

</section>

      {/* SEÇÃO SOLUÇÕES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TÍTULO SEO */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#082a3f] mb-16">
            Soluções completas para ambientes corporativos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* ASSISTÊNCIA */}
            <Link href="/assistencia-tecnica" className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
              <Headset size={40} strokeWidth={1.5} className="mx-auto mb-6 text-[#082a3f] group-hover:text-orange-500 transition" />
              <h3 className="text-lg font-semibold text-gray-900">Suporte de TI</h3>
              <p className="text-sm text-gray-500 mt-2">
                Suporte especializado e rápido para garantir continuidade operacional e eliminar interrupções no seu negócio.
              </p>
            </Link>

            {/* INFRAESTRUTURA */}
            <Link href="/infraestrutura-de-tic" className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
              <Network size={40} strokeWidth={1.5} className="mx-auto mb-6 text-[#082a3f] group-hover:text-orange-500 transition" />
              <h3 className="text-lg font-semibold text-gray-900">Infraestrutura</h3>
              <p className="text-sm text-gray-500 mt-2">
                Implantação e gerenciamento de redes corporativas com alto desempenho e estabilidade.
              </p>
            </Link>

            {/* GESTÃO */}
            <Link href="/gestao-de-ti" className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
              <Settings size={40} strokeWidth={1.5} className="mx-auto mb-6 text-[#082a3f] group-hover:text-orange-500 transition" />
              <h3 className="text-lg font-semibold text-gray-900">Gestão de TI</h3>
              <p className="text-sm text-gray-500 mt-2">
                Gerenciamento completo da TI com monitoramento, otimização e suporte contínuo.
              </p>
            </Link>

            {/* SEGURANÇA */}
            <Link href="/seguranca-digital" className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
              <ShieldCheck size={40} strokeWidth={1.5} className="mx-auto mb-6 text-[#082a3f] group-hover:text-orange-500 transition" />
              <h3 className="text-lg font-semibold text-gray-900">Segurança da Informação</h3>
              <p className="text-sm text-gray-500 mt-2">
                Proteção contra ataques, invasões e perda de dados com soluções avançadas de segurança.
              </p>
            </Link>

            
          </div>
        </div>
      </section>
      {/* CARROSSEL DE PARCEIROS */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-[#082a3f] mb-10">
      Parcerias estratégicas que fortalecem nossos resultados
    </h2>

    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="items-center">

        {[1,2,3,4,5,6,7].map((num) => (
          <CarouselItem
            key={num}
            className="basis-1/3 md:basis-1/6 flex justify-center"
          >
            <Image
              src={`/logos/banner${num}.png`}
              alt={`Logo ${num}`}
              width={200}
              height={100}
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </CarouselItem>
        ))}

      </CarouselContent>
    </Carousel>

  </div>
</section>

{/* MAPA DE ATAQUES (FORTINET) */}
<section className="py-24 bg-[#061923] text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Ataques cibernéticos em tempo real
    </h2>

    <p className="text-gray-300 mb-10">
      Enquanto você navega, milhares de ataques estão acontecendo. Sua empresa está preparada para se defender?
    </p>

    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
      <iframe
        src="https://threatmap.fortiguard.com/"
        className="w-full h-full"
        loading="lazy"
      />
    </div>

    <a
      href="https://threatmap.fortiguard.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block bg-orange-500 px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition"
    >
      Abrir mapa completo
    </a>

  </div>
</section>

<StatsSection />

    </>
  );
}