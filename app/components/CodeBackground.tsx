"use client";

import { useEffect, useState } from "react";

const codeLines = [
  "Initializing security protocols...",
  "Firewall: ACTIVE",
  "Encryption: AES-256",
  "Monitoring traffic...",
  "Threat detection: ENABLED",
  "Argus IT System Online",
  "Connection secured...",
  "Scanning vulnerabilities...",
  "Network integrity: OK",
  "System status: PROTECTED",
];

export default function CodeBackground() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const nextLine =
          codeLines[Math.floor(Math.random() * codeLines.length)];
        return [...prev.slice(-15), nextLine];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden pointer-events-none opacity-10 blur-[0.5px]">
      <div className="flex flex-col justify-end h-full animate-[scrollUp_20s_linear_infinite] font-mono text-green-400 text-xs">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          from {
            transform: translateY(20%);
          }
          to {
            transform: translateY(-20%);
          }
        }
      `}</style>
    </div>
  );
}
