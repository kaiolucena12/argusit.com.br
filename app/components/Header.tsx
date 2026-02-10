"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#081f2d] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3" aria-label="Ir para a página inicial">
          <Image
            src="/logo-argus.png" // <-- usa o nome correto do arquivo em /public
            alt="Argus IT"
            width={110}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/quem-somos" className="hover:text-orange-400 transition">
            Quem Somos
          </Link>

          <Link href="/assistencia-tecnica" className="hover:text-orange-400 transition">
            Assistência Técnica
          </Link>

          <Link href="/infraestrutura-de-tic" className="hover:text-orange-400 transition">
            Infraestrutura de TIC
          </Link>

          <Link href="/gestao-de-ti" className="hover:text-orange-400 transition">
            Gestão de TI
          </Link>

          <Link href="/seguranca-digital" className="hover:text-orange-400 transition">
            Segurança Digital
          </Link>
        </nav>

        {/* BOTÃO WHATSAPP */}
        <a
          href="https://wa.me/5581999776309"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg transition"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}