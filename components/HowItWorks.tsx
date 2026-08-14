"use client";

import { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Faça sua inscrição",
      description: "Clique no botão e realize o pagamento único de R$ 39,90 para garantir seu acesso.",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    },
    {
      number: "02",
      title: "Acesse a NXT Academy",
      description: "Após a confirmação do pagamento, você recebe acesso imediato à plataforma.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      number: "03",
      title: "Explore as ferramentas",
      description: "Descubra as 20 IAs organizadas por categorias e veja o que cada uma faz.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      number: "04",
      title: "Aplique no seu dia a dia",
      description: "Use as ferramentas para estudar, trabalhar, criar e programar com muito mais eficiência.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              funciona
            </span>
          </h2>
        </div>

        {/* Cards empilhados */}
        <div className="relative space-y-3 sm:space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ 
                transitionDelay: `${index * 250}ms`,
                zIndex: steps.length - index 
              }}
            >
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Número do passo */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-xl sm:rounded-2xl">
                  <span className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                    {step.number}
                  </span>
                </div>

                {/* Card de conteúdo */}
                <div className="flex-1 bg-[#0a0f0a] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-base text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 sm:left-10 top-14 sm:top-24 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 sm:mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
        >
          <a 
            href="#oferta" 
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30 text-sm sm:text-base"
          >
            COMEÇAR AGORA
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}