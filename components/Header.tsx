"use client";

import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold text-white">
            NXT AI PACK
          </a>
          <a href={CHECKOUT_URL} className="btn-primary !px-6 !py-2.5 text-sm">
            QUERO MEU ACESSO
          </a>
        </div>
      </nav>
    </header>
  );
}