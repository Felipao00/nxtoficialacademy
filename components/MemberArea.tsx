"use client";

import { useEffect, useRef, useState } from "react";

export default function MemberArea() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "Acesso Exclusivo",
      description: "Área protegida com seus materiais e ferramentas.",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      title: "Conteúdo Premium",
      description: "Materiais organizados e atualizados regularmente.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Novidades Constantes",
      description: "Novas ferramentas e conteúdos adicionados sempre.",
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background dinâmico com mouse tracking */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-float animation-delay-400" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card principal com efeito glassmorphism */}
        <div className={`relative bg-gradient-to-br from-emerald-950/20 via-[#0a0f0a] to-green-950/20 border-2 border-emerald-500/20 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-500/10 backdrop-blur-sm transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          {/* Brilho superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          
          {/* Conteúdo */}
          <div className="p-6 sm:p-10 lg:p-16">
            <div className="text-center mb-10 sm:mb-16">
              {/* Badge animado */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 sm:mb-8 animate-glow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-widest uppercase">
                  Em Desenvolvimento
                </span>
              </div>

              {/* Título grande com efeito */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Área de Membros{" "}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 animate-shimmer-text">
                  NXT Academy
                </span>
              </h2>

              <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Estamos construindo algo extraordinário para você. Um espaço exclusivo
                onde todos os seus materiais, ferramentas e conteúdos estarão organizados
                em um só lugar.
              </p>
            </div>

            {/* Features em cards com hover 3D */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-[#0a0f0a] border border-emerald-500/10 rounded-2xl p-5 sm:p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Ícone com gradiente */}
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-base sm:text-xl font-bold text-white text-center mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Barra de progresso premium */}
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
            >
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 animate-spin" style={{ animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Desenvolvimento em andamento
                  </span>
                  <span className="text-xs sm:text-sm text-emerald-400 font-bold">75%</span>
                </div>
                <div className="w-full h-3 bg-emerald-900/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-400 rounded-full transition-all duration-2000 relative"
                    style={{ width: isVisible ? '75%' : '0%' }}
                  >
                    {/* Efeito shimmer na barra */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-text" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA discreto */}
            <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
            >
              <p className="text-xs sm:text-sm text-gray-500">
                Fique atento! Em breve você terá acesso a essa área exclusiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}