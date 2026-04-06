"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

// Contador animando apenas quando entra no viewport
function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 1200;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              start = value;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, 16);

          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, hasAnimated]);

  return <div ref={ref}>{count}{suffix}</div>;
}

// Stats Section com LGPD como botão premium
export default function StatsWithLgpdButton() {
  const stats = [
    { number: 6, suffix: "+", label: "Anos de Experiência" },
    { number: 30, suffix: "+", label: "Empresas Atendidas" },
    { number: 120, suffix: "+", label: "Projetos Entregues" },
  ];

  return (
    <section className="relative bg-[#04131c]">

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Nossos Números
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
            Resultados que refletem excelência operacional
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                <Counter value={item.number} suffix={item.suffix} />
              </h3>
              <div className="w-10 h-[2px] bg-orange-500 mt-4 mb-4 transition-all duration-300 group-hover:w-16" />
              <p className="text-gray-400 uppercase tracking-wider text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LGPD Badge como botão premium */}
      <div className="flex justify-center -mt-16 pb-16 px-6">
        <Link href="/lgpd" scroll={true} >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative inline-flex flex-col items-center border border-orange-500/30 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_40px_rgba(255,106,0,0.2)] hover:bg-white/10 hover:shadow-lg transition-all cursor-pointer"
          >
            <ShieldCheck className="w-14 h-14 text-orange-500 mb-4 group-hover:animate-bounce" />
            <h3 className="text-2xl font-bold text-white tracking-wide">
              LGPD Compliant
            </h3>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-widest">
              Conformidade com a Lei Geral de Proteção de Dados
            </p>
            <span className="mt-3 text-sm text-orange-400 uppercase tracking-wide font-semibold">
              Clique para saber mais
            </span>

            {/* Pequeno efeito visual tipo “ripple” ao hover */}
            <motion.span
              className="absolute inset-0 rounded-2xl border border-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </div>

    </section>
  );
}