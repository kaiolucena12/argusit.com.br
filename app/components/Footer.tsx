"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020b12] text-gray-300 pt-20 pb-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LOGO + DESCRIÇÃO */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo-argus.png"
                alt="Argus IT"
                width={200}
                height={60}
                className="mb-4"
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Soluções completas em tecnologia, segurança da informação
              e infraestrutura corporativa. Protegendo empresas com
              inovação, confiabilidade e alta disponibilidade.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="#quem-somos" className="hover:text-orange-500 transition">Quem Somos</Link></li>
              <li><Link href="#gestao" className="hover:text-orange-500 transition">Gestão de TI</Link></li>
              <li><Link href="#infraestrutura" className="hover:text-orange-500 transition">Infraestrutura</Link></li>
              <li><Link href="#seguranca" className="hover:text-orange-500 transition">Segurança Digital</Link></li>
              <li><Link href="#contato" className="hover:text-orange-500 transition">Contato</Link></li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contato
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                Av. Eng. Domingos Ferreira, 2050<br />
                1º andar - Boa Viagem<br />
                Recife - PE, 51111-020
              </li>

              <li>Email: contato@argusit.com.br</li>
              <li>Telefone: (81) 99999-9999</li>
              <li>Atendimento: Seg - Sex, 8h às 18h</li>
              <li className="text-orange-500 font-medium">
                LGPD Compliant
              </li>
            </ul>
          </div>

        </div>

        {/* LINHA INFERIOR */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Argus IT. Todos os direitos reservados.
          <div className="mt-2 space-x-4">
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
