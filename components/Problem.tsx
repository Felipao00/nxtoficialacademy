"use client";

import { useEffect, useRef, useState } from "react";

export default function Problem() {
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

  const problems = [
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Perde tempo procurando ferramentas",
      description: "Horas gastas pesquisando e testando ferramentas que não funcionam para você."
    },
    {
      icon: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Fica perdido com tantas opções",
      description: "Centenas de ferramentas surgem todos os dias. Difícil saber por onde começar."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Poderia fazer tarefas muito mais rápido",
      description: "Tarefas simples que poderiam ser automatizadas com as ferramentas certas."
    }
  ];

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
            Você não precisa de mais uma{" "}
            <span className="text-emerald-400">lista de ferramentas.</span>
          </h2>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
            Existem centenas de ferramentas de IA surgindo todos os dias. O problema é descobrir quais realmente podem ser úteis para você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card-dark p-3 sm:p-5 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={problem.icon} />
                </svg>
              </div>
              <h3 className="text-xs sm:text-base font-bold text-white mb-1">{problem.title}</h3>
              <p className="text-[10px] sm:text-sm text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm sm:text-lg font-bold text-white">
          Foi para simplificar esse processo que criamos o{" "}
          <span className="text-emerald-400">NXT AI PACK</span>.
        </p>
      </div>
    </section>
  );
}