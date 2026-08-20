"use client";

import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-xl border-b border-emerald-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo/nxt-academy.png"
              alt="NXT Academy"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-base sm:text-lg font-bold text-white">
              Nativa Academy
            </span>
          </a>

          {/* Desktop - Apenas um botão */}
          <div className="hidden md:block">
            <a href={CHECKOUT_URL} className="btn-primary !px-8 !py-2.5 text-sm">
              Assine Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Apenas um botão */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/20 bg-black">
            <div className="flex flex-col">
              <a
                href={CHECKOUT_URL}
                className="btn-primary w-full text-center text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Assine Agora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}