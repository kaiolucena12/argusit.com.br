"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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
  return (
    <section className="relative py-28 bg-[#04131c] overflow-hidden">

      {/* Grid tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center relative z-10">

        {[
          { number: 6, suffix: "+", label: "Anos de Experiência" },
          { number: 30, suffix: "+", label: "Empresas Atendidas" },
          { number: 120, suffix: "+", label: "Projetos Entregues" },
          { number: 99, suffix: "%", label: "Disponibilidade Média" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-5xl font-bold text-orange-500 hero-glow">
              <Counter value={item.number} suffix={item.suffix} />
            </h3>

            <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
