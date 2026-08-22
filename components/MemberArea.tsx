"use client";

import { useEffect, useRef, useState } from "react";

export default function MemberArea() {
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

  const steps = [
    { number: "01", title: "Faça sua compra", description: "Pagamento único e seguro." },
    { number: "02", title: "Receba seu acesso", description: "Liberação imediata após confirmação." },
    { number: "03", title: "Entre na área de membros", description: "Acesse com seu email." },
    { number: "04", title: "Comece a explorar os packs", description: "Encontre tudo organizado." }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Seu acesso fica organizado{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              em um único lugar.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Depois da compra, você recebe acesso à área de membros do NXT AI PACK, onde encontra os packs e conteúdos disponibilizados para você.
          </p>
        </div>

        {/* Janela de navegador com imagem da área de membros */}
        <div className={`mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
            {/* Barra do navegador */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#111] border-b border-white/10">
              {/* Três bolinhas */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              {/* Barra de endereço */}
              <div className="flex-1 max-w-xs sm:max-w-sm mx-auto">
                <div className="bg-black/50 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-500 text-center truncate">
                  www.seusite.com.br
                </div>
              </div>
            </div>
            {/* Imagem da área de membros */}
            <img
              src="/images/area-de-membros.jpg"
              alt="Área de membros do NXT AI PACK"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Passo a passo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`card-dark p-6 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 block mb-3">
                {step.number}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}