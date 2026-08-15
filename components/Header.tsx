"use client";

import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Travar scroll quando modal aberto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
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
                NXT Academy
              </span>
            </a>

            {/* Desktop - Apenas botões */}
            <div className="hidden md:flex items-center gap-3">
              <a href={CHECKOUT_URL} className="btn-primary !px-6 !py-2.5 text-sm">
                Assine Agora
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="btn-outline !px-6 !py-2.5 text-sm"
              >
                Sou aluno
              </button>
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-emerald-500/20 bg-black">
              <div className="flex flex-col gap-3">
                <a
                  href={CHECKOUT_URL}
                  className="btn-primary w-full text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Assine Agora
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowModal(true);
                  }}
                  className="btn-outline w-full text-center text-sm"
                >
                  Sou aluno
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Modal - Em Desenvolvimento */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal content */}
          <div 
            className="relative bg-gradient-to-br from-[#0a0f0a] to-[#111] border-2 border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl shadow-emerald-500/20 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ícone animado */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-emerald-500/10 rounded-full border border-emerald-500/30">
              <svg className="w-10 h-10 text-emerald-500 animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-3">
              Área de Membros em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                Desenvolvimento
              </span>
            </h3>

            <p className="text-gray-400 text-center mb-6 leading-relaxed">
              Estamos preparando algo incrível para você! A área de membros da NXT Academy estará disponível em breve.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6 text-sm text-emerald-400">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-semibold">Em breve disponível</span>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="btn-primary w-full py-3"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}