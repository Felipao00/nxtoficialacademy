"use client";

import { useEffect, useRef, useState } from "react";

export default function Solution() {
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

  const indicators = [
    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Área de membros própria" },
    { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: "Conteúdo organizado" },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Acesso imediato" },
    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Conteúdo atualizado" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Um arsenal de ferramentas de IA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 animate-shimmer">
              em um só lugar.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            O NXT AI PACK reúne ferramentas e recursos de IA organizados dentro de uma área de membros própria.
          </p>
        </div>

        {/* Mockup da área de membros - UM ÚNICO PACK */}
        <div className={`mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
            {/* Barra do navegador */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#111] border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 max-w-xs sm:max-w-sm mx-auto">
                <div className="bg-black/50 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-500 text-center truncate">
                  wwww.seusite.com.br
                </div>
              </div>
            </div>

            {/* Conteúdo do mockup - UM PACK */}
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  Seu Pack
                </span>
              </div>
              
              {/* Card único do pack */}
              <div className={`max-w-md mx-auto bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/10 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-emerald-500/20 rounded-xl">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">NXT AI PACK</h3>
                    <p className="text-gray-400 text-sm">Ferramentas de IA organizadas para você</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {indicators.map((indicator, index) => (
            <div 
              key={index}
              className={`card-dark p-4 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={indicator.icon} />
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-gray-300">{indicator.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}