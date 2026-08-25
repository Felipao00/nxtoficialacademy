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
    { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: "Módulos organizados" },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Acesso imediato" },
    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Conteúdo atualizado" }
  ];

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
            Um arsenal de ferramentas de IA{" "}
            <span className="text-emerald-400">em um só lugar.</span>
          </h2>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
            O NXT AI PACK reúne ferramentas e recursos de IA organizados dentro de uma área de membros própria.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {indicators.map((indicator, index) => (
            <div 
              key={index}
              className={`card-dark p-3 sm:p-5 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={indicator.icon} />
                </svg>
              </div>
              <span className="text-[10px] sm:text-sm text-gray-300">{indicator.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}