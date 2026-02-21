"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#061923]/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-argus.png"
            alt="Argus IT"
            width={110}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            href="/quem-somos"
            className="hover:text-orange-400 transition"
          >
            Quem Somos
          </Link>

          <Link
            href="/assistencia-tecnica"
            className="hover:text-orange-400 transition"
          >
            Assistência Técnica
          </Link>

          <Link
            href="/infraestrutura-de-tic"
            className="hover:text-orange-400 transition"
          >
            Infraestrutura
          </Link>

          <Link
            href="/gestao-de-ti"
            className="hover:text-orange-400 transition"
          >
            Gestão de TI
          </Link>

          <Link
            href="/seguranca-digital"
            className="hover:text-orange-400 transition"
          >
            Segurança Digital
          </Link>

        </nav>

        {/* BOTÃO WHATSAPP */}
        <a
          href="https://wa.me/5581999776309"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700 
                     text-white text-sm px-4 py-2 rounded-lg transition"
        >
          Falar com Especialista
        </a>

      </div>
    </header>
  );
}