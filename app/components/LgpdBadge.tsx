"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function LgpdBadge() {
  return (
    <section className="relative py-24 bg-[#04131c] text-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex flex-col items-center border border-orange-500/30 bg-white/5 backdrop-blur-xl p-4 rounded-2xl shadow-[0_0_40px_rgba(255,106,0,0.2)]"
      >
        <ShieldCheck className="w-14 h-14 text-orange-500 mb-4" />

        <h3 className="text-2xl font-bold text-white tracking-wide">
          LGPD Compliant
        </h3>

        <p className="mt-2 text-gray-400 text-sm uppercase tracking-widest">
          Conformidade com a Lei Geral de Proteção de Dados
        </p>
      </motion.div>
    </section>
  );
}
