"use client";

import { useEffect, useState } from "react";

const lines = [
  "Initializing Argus IT Security...",
  "Checking network integrity...",
  "Firewall status: ACTIVE",
  "Data encryption: ENABLED",
  "Monitoring clients: 30+",
  "System status: PROTECTED",
];

export default function HeroTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const text = lines[currentLine];
    let index = 0;

    const typing = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typing);

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, text]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }, 500);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [currentLine]);

  return (
    <div className="mt-12 w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-left font-mono text-sm text-green-400 shadow-[0_0_40px_rgba(0,255,170,0.1)]">

      {displayedLines.map((line, index) => (
        <div key={index} className="mb-1">
          <span className="text-green-500">&gt;</span> {line}
        </div>
      ))}

      {currentLine < lines.length && (
        <div>
          <span className="text-green-500">&gt;</span> {currentText}
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  );
}
