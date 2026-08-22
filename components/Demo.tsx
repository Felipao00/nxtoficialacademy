"use client";

import { useEffect, useRef, useState } from "react";

export default function Demo() {
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

  // Benefícios genéricos - sem nomes de ferramentas
  const benefits = [
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Ferramentas de pesquisa",
      description: "Encontre informações com mais rapidez e precisão."
    },
    {
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: "Ferramentas de criação",
      description: "Crie conteúdos, imagens e muito mais com IA."
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Ferramentas de programação",
      description: "Acelere seu desenvolvimento com assistência inteligente."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Ferramentas de produtividade",
      description: "Automatize tarefas e ganhe tempo no dia a dia."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Veja o que você{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 animate-shimmer">
              pode encontrar
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            O NXT AI PACK reúne diferentes tipos de ferramentas de IA para facilitar sua rotina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card-dark p-5 sm:p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          E muito mais dentro do pack.
        </p>
      </div>
    </section>
  );
}