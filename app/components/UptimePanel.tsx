"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function UptimePanel() {
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(99.9); // fixo para visual enterprise
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-[#021018] text-center overflow-hidden">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 hero-glow">
          Disponibilidade do Sistema
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border border-green-500/30 bg-green-500/5 backdrop-blur-xl rounded-2xl p-12 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
        >
          <div className="text-6xl font-bold text-green-400">
            {uptime}%
          </div>

          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Uptime Médio Anual
          </p>
        </motion.div>
      </div>
    </section>
  );
}
