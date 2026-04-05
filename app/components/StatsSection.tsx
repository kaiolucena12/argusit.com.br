"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { number: 6, suffix: "+", label: "Anos de Experiência" },
    { number: 30, suffix: "+", label: "Empresas Atendidas" },
    { number: 120, suffix: "+", label: "Projetos Entregues" },
  ];

  return (
    <section className="relative py-32 bg-[#04131c]">

      {/* Linha superior elegante */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Título corporativo */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Número */}
              <h3 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                <Counter value={item.number} suffix={item.suffix} />
              </h3>

              {/* Linha sutil */}
              <div className="w-10 h-[2px] bg-orange-500 mt-4 mb-4 transition-all duration-300 group-hover:w-16" />

              {/* Label */}
              <p className="text-gray-400 uppercase tracking-wider text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}