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
    { icon: "M5 13l4 4L19 7", text: "20 IAs poderosas" },
    { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", text: "4 categorias" },
    { icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7", text: "Bônus exclusivos" },
    { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", text: "NXT Academy" },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Acesso imediato" },
    { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Pagamento único" }
  ];

  return (
    <section ref={sectionRef} id="oferta" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4">
            Oferta{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              Especial
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400">Aproveite essa condição exclusiva</p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Card principal da oferta */}
          <div className="relative bg-gradient-to-br from-[#0a0f0a] to-[#111] border-2 border-emerald-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
            {/* Badge de desconto */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-green-500 text-black font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-bl-xl sm:rounded-bl-2xl shadow-lg">
              <span className="text-sm sm:text-lg">-43% OFF</span>
            </div>

            {/* Brilho superior */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="p-5 sm:p-8 lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-4 sm:px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs sm:text-sm font-bold text-emerald-400 mb-4 sm:mb-6 tracking-widest uppercase">
                  NXT AI PACK
                </span>

                {/* Preço com promoção */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-3xl text-gray-500 line-through">R$ 69,90</span>
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                      R$ 39,90
                    </span>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-400">Pagamento único • Acesso vitalício</p>
                </div>
              </div>

              {/* Benefícios em grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 bg-emerald-500/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/10">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                    <span className="text-xs sm:text-base text-gray-300 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a 
                href={CHECKOUT_URL} 
                className="btn-primary w-full text-base sm:text-xl py-4 sm:py-6 relative overflow-hidden group animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  QUERO MEU ACESSO AGORA
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              {/* Garantias */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Garantia de 7 dias
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Compra segura
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}