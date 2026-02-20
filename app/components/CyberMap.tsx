"use client";

import { motion } from "framer-motion";

export default function CyberMap() {
  return (
    <section className="relative py-32 bg-[#031018] overflow-hidden">

      {/* Grid tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-20 hero-glow">
          Monitoramento e Proteção 24/7
        </h2>

        <div className="relative w-full h-[420px] border border-white/10 rounded-2xl backdrop-blur-xl bg-white/5 overflow-hidden">

          {/* Pontos piscando */}
          {[
            { top: "20%", left: "30%" },
            { top: "50%", left: "60%" },
            { top: "35%", left: "75%" },
            { top: "65%", left: "40%" },
            { top: "25%", left: "55%" },
          ].map((point, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_#ff6a00]"
              style={{ top: point.top, left: point.left }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
