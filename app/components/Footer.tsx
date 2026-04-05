"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b12] text-gray-400 pt-28 pb-12 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <Image
              src="/logo-argus.png"
              alt="Argus IT"
              width={170}
              height={60}
              className="mb-6"
            />

            <p className="text-sm leading-relaxed max-w-xs">
              Consultoria estratégica em tecnologia, segurança da informação
              e infraestrutura corporativa. Capacitando empresas com soluções
              seguras, escaláveis e orientadas a resultados.
            </p>
          </div>

          {/* SOLUÇÕES */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Soluções
            </h3>

            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-orange-500 transition">Gestão de TI</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Infraestrutura</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Cybersecurity</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Cloud & Backup</Link></li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Contato
            </h3>

            {/* MAPA */}
            <div className="w-full h-40 mb-5 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Av.+Eng.+Domingos+Ferreira,+2050,+Boa+Viagem,+Recife&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-4 text-sm">

              <a
                href="https://wa.me/5581999776309"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <Phone size={16} />
                <span>(81) 99977-6309</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span>Recife - PE, Brasil</span>
              </div>

              <div className="flex items-center gap-3 text-green-400">
                <ShieldCheck size={16} />
                <span>LGPD Compliant</span>
              </div>

            </div>
          </div>

        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-white/10 mt-20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>
            © {new Date().getFullYear()} Argus IT. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-orange-500 transition">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              Termos de Uso
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}