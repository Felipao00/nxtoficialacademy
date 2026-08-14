"use client";

import { useEffect, useRef, useState } from "react";

export default function Audience() {
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

  const audiences = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Para quem estuda",
      description: "Acelere seus estudos com as melhores ferramentas de IA.",
      color: "from-emerald-500 to-green-600",
      animation: "animate-float"
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Para quem trabalha",
      description: "Aumente sua produtividade e destaque-se no trabalho.",
      color: "from-green-500 to-emerald-600",
      animation: "animate-float animation-delay-200"
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Para criadores de conteúdo",
      description: "Crie conteúdos incríveis com auxílio da inteligência artificial.",
      color: "from-emerald-600 to-green-500",
      animation: "animate-float animation-delay-400"
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Para programadores",
      description: "Desenvolva mais rápido com ferramentas de código inteligentes.",
      color: "from-green-600 to-emerald-500",
      animation: "animate-float animation-delay-600"
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Para quem quer descobrir",
      description: "Explore novas possibilidades e ferramentas inovadoras.",
      color: "from-emerald-400 to-green-500",
      animation: "animate-float"
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-green-500 rounded-full blur-3xl animate-float animation-delay-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-6">
            Feito para quem quer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              aproveitar melhor a IA.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`card-dark p-4 sm:p-8 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${audience.color} rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:shadow-emerald-500/40 transition-all duration-300 ${audience.animation}`}>
                <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={audience.icon} />
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white text-center mb-1.5 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                {audience.title}
              </h3>
              <p className="text-xs sm:text-base text-gray-400 text-center leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}