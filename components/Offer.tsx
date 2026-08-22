"use client";

import { CHECKOUT_URL } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Offer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Acesso ao NXT AI PACK",
    "Área de membros própria",
    "Packs organizados",
    "Acesso imediato após confirmação do pagamento"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black border-y border-white/5">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Comece a explorar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 animate-shimmer">
              o universo da IA.
            </span>
          </h2>
        </div>

        {/* Card estilo TERMINAL */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
            {/* Barra do terminal */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#111] border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-500">NXT AI PACK</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8 sm:p-10 text-center">
              {/* Badge do produto */}
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm font-bold text-emerald-400 mb-6">
                NXT AI PACK
              </span>

              {/* Preço */}
              <div className="mb-4">
                <span className="block text-5xl sm:text-6xl font-extrabold text-white">
                  R$39,90
                </span>
                <span className="text-gray-400 text-sm">Pagamento único</span>
              </div>

              {/* Parcelamento destacado */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm font-bold text-emerald-400">
                    9x de R$ 5,24 no cartão
                  </span>
                </div>
              </div>

              {/* Benefícios */}
              <div className="text-left max-w-xs mx-auto mb-8">
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão */}
              <a href={CHECKOUT_URL} className="btn-primary w-full py-5 text-lg">
                QUERO MEU ACESSO
              </a>

              {/* Selos de segurança */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Compra segura
                </span>
                <span className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Acesso imediato
                </span>
                <span className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Acesso vitalício
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}