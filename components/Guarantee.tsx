"use client";

import { useEffect, useRef, useState } from "react";

export default function Guarantee() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Fundo com brilhos estáticos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Número 7 GIGANTE em background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span 
            className={`text-[200px] sm:text-[350px] lg:text-[500px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-emerald-500/15 to-transparent transition-all duration-2000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            7
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className="relative text-center mb-10 sm:mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            
            {/* SELO ORIGINAL NXT ACADEMY */}
            <div className="inline-flex flex-col items-center gap-4 mb-8 sm:mb-12">
              <div className="relative">
                {/* Anel externo */}
                <svg className="w-40 h-40 sm:w-56 sm:h-56 animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="rgba(16, 185, 129, 0.6)" fontSize="12" fontWeight="bold" letterSpacing="3">
                    <textPath href="#circlePath">
                      NATIVA ACADEMY • GARANTIA DE 7 DIAS • RISCO ZERO • NATIVA ACADEMY •
                    </textPath>
                  </text>
                </svg>

                {/* Anel interno */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-2xl shadow-emerald-500/40 animate-pulse-glow flex items-center justify-center">
                    {/* Escudo */}
                    <svg className="w-14 h-14 sm:w-20 sm:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                {/* Estrelas decorativas */}
                <svg className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 animate-pulse animation-delay-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 animate-shimmer-text inline-block">
                7 dias
              </span>
              <span className="block mt-2 sm:mt-4">de garantia total</span>
            </h2>

            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Entre, explore todo o conteúdo e veja com seus próprios olhos.
              Se por qualquer motivo você não ficar satisfeito, devolvemos
              <span className="text-white font-bold"> 100% do seu dinheiro.</span>
              <br className="hidden sm:block" />
              Sem perguntas, sem burocracia.
            </p>

            {/* Cards de benefícios da garantia */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Risco Zero",
                  description: "Você não tem nada a perder. Se não gostar, devolvemos seu dinheiro."
                },
                {
                  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                  title: "Compra Segura",
                  description: "Pagamento processado com total segurança e criptografia."
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Acesso Imediato",
                  description: "Receba tudo na hora após a confirmação do pagamento."
                }
              ].map((guarantee, index) => (
                <div
                  key={index}
                  className={`card-dark p-6 sm:p-8 text-center group hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={guarantee.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {guarantee.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faixa deslizante FORA do container - atravessa a tela inteira */}
      <div className={`relative w-full overflow-hidden border-y border-emerald-500/20 bg-gradient-to-r from-emerald-950/50 via-emerald-900/30 to-emerald-950/50 py-4 sm:py-5 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: '600ms' }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 sm:gap-16 px-5 sm:px-8">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="flex items-center gap-10 sm:gap-16">
                  <span className="text-base sm:text-xl font-bold text-emerald-400/80 uppercase tracking-wider">
                    Garantia de 7 dias
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-base sm:text-xl font-bold text-emerald-400/60 uppercase tracking-wider">
                    Risco zero
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}