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
    { number: "04", title: "Comece a explorar", description: "Encontre tudo organizado." }
  ];

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
            Seu acesso fica organizado{" "}
            <span className="text-emerald-400">em um único lugar.</span>
          </h2>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto">
            Depois da compra, você recebe acesso à área de membros do NXT AI PACK, onde encontra os módulos e conteúdos disponibilizados para você.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`card-dark p-4 sm:p-6 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 block mb-2 sm:mb-3">
                {step.number}
              </span>
              <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
              <p className="text-[10px] sm:text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}