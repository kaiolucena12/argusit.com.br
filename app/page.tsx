"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Headset, Network, Settings, ShieldCheck } from "lucide-react";
import ParticlesBackground from "./components/ParticlesBackground";
import StatsSection from "./components/StatsSection";
import CyberMap from "./components/CyberMap";
import LgpdBadge from "./components/LgpdBadge";
import UptimePanel from "./components/UptimePanel";
import HeroTerminal from "./components/HeroTerminal";
import CodeBackground from "./components/CodeBackground";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6 text-white overflow-hidden">

  {/* Gradiente animado */}
  <div className="absolute inset-0 bg-[linear-gradient(-45deg,#082a3f,#0b3d5c,#061923,#0e2f44)] bg-[length:400%_400%] animate-gradient -z-20" />

  {/* Glow */}
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

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight relative z-10"
        >
          Tecnologia que protege,
          <br />
          conecta e impulsiona empresas
        </motion.h1>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed"
        >
          Soluções completas em tecnologia da informação,
          segurança digital e infraestrutura corporativa
          para empresas que buscam estabilidade e crescimento sustentável.
        </motion.p>

        {/* Botão */}
        <motion.a
          href="https://wa.me/5581999776309"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 inline-flex bg-[#ff6a00] hover:bg-[#e65c00] 
                     text-white font-medium tracking-wide 
                     px-8 py-3 rounded-xl 
                     transition-all duration-300 
                     hover:scale-105 hover:shadow-lg"
        >
          Falar com Especialista
        </motion.a>
        <div className="neon-divider w-full absolute bottom-0 left-0" />

      </section>

      {/* SERVIÇOS */}
      <section className="relative py-28 bg-[#061923] text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Soluções de tecnologia sob medida
          </motion.h2>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                name: "Assistência Técnica",
                href: "/assistencia-tecnica",
                icon: <Headset className="w-10 h-10 text-white" />,
              },
              {
                name: "Infraestrutura de TIC",
                href: "/infraestrutura-de-tic",
                icon: <Network className="w-10 h-10 text-white" />,
              },
              {
                name: "Gestão de TI",
                href: "/gestao-de-ti",
                icon: <Settings className="w-10 h-10 text-white" />,
              },
              {
                name: "Segurança Digital",
                href: "/seguranca-digital",
                icon: <ShieldCheck className="w-10 h-10 text-white" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={item.href}>
                  <div
                    className="group backdrop-blur-xl bg-white/10 
                               border border-white/20 
                               rounded-2xl p-10 
                               hover:bg-white/20
                               hover:shadow-2xl 
                               hover:-translate-y-3 
                               transition-all duration-500 
                               cursor-pointer"
                  >
                    <div className="flex justify-center mb-6 group-hover:text-[#ff6a00] transition-colors duration-300">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-white group-hover:text-[#ff6a00] transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      <StatsSection />
      <LgpdBadge />
    </>
  );
}
