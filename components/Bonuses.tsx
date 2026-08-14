"use client";

import { useEffect, useRef, useState } from "react";

export default function Bonuses() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <svg className="w-6 h-6 text-emerald-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-emerald-400 font-bold tracking-wider">BÔNUS EXCLUSIVOS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
            E ainda tem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              bônus especiais!
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Ao adquirir o NXT AI Pack, você terá acesso a materiais extras
            que vão potencializar ainda mais seus resultados.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", 
                label: "Ferramentas Premium",
                animation: "animate-float"
              },
              { 
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", 
                label: "Conteúdo Exclusivo",
                animation: "animate-float animation-delay-200"
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z", 
                label: "Resultados Rápidos",
                animation: "animate-float animation-delay-400"
              }
            ].map((item, index) => (
              <div key={index} className="card-dark p-8 group">
                <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300 ${item.animation}`}>
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <p className="text-lg font-bold text-white">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
            <svg className="w-6 h-6 text-emerald-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-300 font-medium">
              Conteúdo revelado somente dentro do pack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}