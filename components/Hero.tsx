"use client";

import { CHECKOUT_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4 sm:mb-8">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] sm:text-sm font-semibold text-emerald-400">NXT AI PACK</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-6">
            Tenha as ferramentas de IA certas para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              acelerar sua produtividade.
            </span>
          </h1>

          <p className="text-xs sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            Um pack de ferramentas de Inteligência Artificial selecionadas para você descobrir novas possibilidades, economizar tempo e tornar sua rotina muito mais produtiva.
          </p>

          <a href={CHECKOUT_URL} className="btn-primary text-sm sm:text-lg px-6 sm:px-12 py-3 sm:py-5">
            QUERO ACESSAR O NXT AI PACK
          </a>

          <p className="text-[10px] sm:text-sm text-gray-500 mt-3 sm:mt-6">
            Acesso imediato • Área de membros • Pagamento único
          </p>
        </div>
      </div>
    </section>
  );
}