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

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
            O problema não é{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              encontrar uma IA.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Existem centenas de ferramentas surgindo todos os dias.
          </p>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            O problema é descobrir quais realmente valem a pena, entender para que
            servem e encontrar aquela ferramenta perfeita para cada situação.
          </p>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
            <svg className="w-8 h-8 text-emerald-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-2xl font-bold text-white">
              Foi por isso que criamos o NXT AI Pack.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}