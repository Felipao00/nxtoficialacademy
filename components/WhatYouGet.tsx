"use client";

import { WHAT_YOU_GET } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function WhatYouGet() {
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
    <section ref={sectionRef} className="py-10 sm:py-16 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
            O que você encontra{" "}
            <span className="text-emerald-400">dentro do NXT AI PACK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {WHAT_YOU_GET.map((item, index) => (
            <div key={index} className={`card-dark p-3 sm:p-5 flex items-start gap-2 sm:gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1">{item.title}</h3>
                <p className="text-[10px] sm:text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] sm:text-sm text-gray-400">
          Tudo organizado para você encontrar rapidamente o que precisa.
        </p>
      </div>
    </section>
  );
}