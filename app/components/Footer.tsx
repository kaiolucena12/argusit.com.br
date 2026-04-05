"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck, Server, Shield, Cloud, Toolbox } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b12] text-gray-400 pt-28 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID COM COLUNAS MAIS PRÓXIMAS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* BRAND */}
          <div className="max-w-[250px]">
            <Image
              src="/logo-argus.png"
              alt="Argus IT"
              width={170}
              height={60}
              className="mb-6"
            />
            <p className="text-sm leading-relaxed">
              Consultoria estratégica em tecnologia, segurança da informação
              e infraestrutura corporativa. Capacitando empresas com soluções
              seguras, escaláveis e orientadas a resultados.
            </p>
          </div>

          {/* SOLUÇÕES COM MEGA MENU */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Soluções
            </h3>

            <ul className="space-y-3 text-sm">

              {/* Gestão de TI */}
              <li className="group relative">
                <Link href="/gestao-de-ti" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Server size={16} /> Gestão de TI
                </Link>
                <ul className="absolute left-full top-0 ml-2 w-56 bg-[#020b12] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10 border border-white/10 space-y-2 text-sm">
                  <li><Link href="/gestao-de-ti#planejamento" className="hover:text-orange-500 block">Planejamento Estratégico</Link></li>
                  <li><Link href="/gestao-de-ti#monitoramento" className="hover:text-orange-500 block">Monitoramento de Redes</Link></li>
                  <li><Link href="/gestao-de-ti#suporte" className="hover:text-orange-500 block">Suporte Corporativo</Link></li>
                </ul>
              </li>

              {/* Infraestrutura */}
              <li className="group relative">
                <Link href="/infraestrutura-de-tic" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Toolbox size={16} /> Infraestrutura
                </Link>
                <ul className="absolute left-full top-0 ml-2 w-56 bg-[#020b12] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10 border border-white/10 space-y-2 text-sm">
                  <li><Link href="/infraestrutura-de-tic" className="hover:text-orange-500 block">Servidores & Storage</Link></li>
                  <li><Link href="/infraestrutura-de-tic" className="hover:text-orange-500 block">Redes Corporativas</Link></li>
                </ul>
              </li>

              {/* Cybersecurity */}
              <li className="group relative">
                <Link href="/seguranca-digital" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Shield size={16} /> Cybersecurity
                </Link>
                <ul className="absolute left-full top-0 ml-2 w-56 bg-[#020b12] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10 border border-white/10 space-y-2 text-sm">
                  <li><Link href="/seguranca-digital#firewall" className="hover:text-orange-500 block">Firewall & VPN</Link></li>
                  <li><Link href="/seguranca-digital#auditoria" className="hover:text-orange-500 block">Auditoria de Segurança</Link></li>
                </ul>
              </li>

              {/* Cloud & Backup */}
              <li className="group relative">
                <Link href="/cloud" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Cloud size={16} /> Cloud & Backup
                </Link>
                <ul className="absolute left-full top-0 ml-2 w-56 bg-[#020b12] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10 border border-white/10 space-y-2 text-sm">
                  <li><Link href="/cloud#backup" className="hover:text-orange-500 block">Backup Corporativo</Link></li>
                  <li><Link href="/cloud#cloud" className="hover:text-orange-500 block">Cloud Solutions</Link></li>
                </ul>
              </li>

              {/* Assistência Técnica */}
              <li>
                <Link href="/assistencia-tecnica" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Toolbox size={16} /> Assistência Técnica
                </Link>
              </li>

            </ul>
          </div>

          {/* SOBRE NÓS */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Sobre nós
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/quem-somos" className="hover:text-orange-500 transition">
                  Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">
              Contato
            </h3>

            <div className="w-full h-36 mb-5 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Av.+Eng.+Domingos+Ferreira,+2050,+Boa+Viagem,+Recife&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5581999776309?text=Olá,%20vim%20pelo%20site%20da%20Argus%20IT"
                target="_blank"
                className="flex items-center gap-3 bg-green-600/10 border border-green-500/20 px-4 py-2 rounded-lg hover:bg-green-600/20 transition"
              >
                <Phone size={16} className="text-green-400" />
                <span className="text-green-400 font-medium">Fale no WhatsApp</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-1 text-orange-500" />
                <span>Av. Eng. Domingos Ferreira, 2050 – Boa Viagem, Recife - PE</span>
              </div>

              <div className="flex items-center gap-3 text-green-400">
                <ShieldCheck size={16} />
                <span>LGPD Compliant</span>
              </div>

              <p className="text-xs text-gray-500">Atendimento: Seg - Sex, 8h às 18h</p>
            </div>
          </div>

        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Argus IT. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-orange-500 transition">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-orange-500 transition">
              Termos de Uso
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}