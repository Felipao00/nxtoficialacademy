"use client";

import { TOOLS_CATEGORIES } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Categories() {
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

  const icons = {
    "Produtividade": "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    "Criação de Conteúdo": "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    "Programação": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    "Dia a Dia": "M13 10V3L4 14h7v7l9-11h-7z"
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
            Um arsenal de ferramentas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 animate-shimmer-text">
              em um só lugar.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-0">
            Em vez de perder horas pesquisando, você encontra uma seleção
            organizada de ferramentas para diferentes necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {TOOLS_CATEGORIES.map((category, index) => (
            <div
              key={category.name}
              className={`card-dark p-5 sm:p-8 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-xl sm:rounded-2xl border border-emerald-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[category.name as keyof typeof icons] || icons["Dia a Dia"]} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}