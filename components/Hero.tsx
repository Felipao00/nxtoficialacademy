"use client";

import { CHECKOUT_URL } from "@/lib/data";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Banner como background */}
        <div className="absolute inset-0">
          <img
            src="/images/banner-nxt.webp"
            alt="NXT Academy Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase">NXT AI PACK</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
              20 IAs poderosas que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 animate-shimmer-text">
                você provavelmente ainda não conhece.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Descubra ferramentas de Inteligência Artificial para produtividade,
              criação de conteúdo, programação e muito mais — reunidas em um único lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href={CHECKOUT_URL} className="btn-primary text-lg px-12 py-5 animate-pulse-glow">
                QUERO ACESSAR O NXT AI PACK
              </a>
              <a href="#o-que-voce-recebe" className="btn-secondary text-lg px-12 py-5">
                VER O QUE VOCÊ VAI RECEBER
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pagamento único
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Acesso imediato
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
                NXT Academy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Faixas deslizantes */}
      <div className="relative bg-black">
        {/* Primeira faixa */}
        <div className="py-3 overflow-hidden border-y border-emerald-500/20 bg-gradient-to-r from-emerald-950/50 via-emerald-900/30 to-emerald-950/50">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="flex items-center gap-8">
                    <span className="text-lg font-bold text-emerald-400/80 uppercase tracking-wider">
                      NXT Academy
                    </span>
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Segunda faixa (reversa) */}
        <div className="py-3 overflow-hidden bg-gradient-to-r from-emerald-950/30 via-transparent to-emerald-950/30">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="flex items-center gap-8">
                    <span className="text-lg font-bold text-emerald-400/60 uppercase tracking-wider">
                      NXT Academy
                    </span>
                    <svg className="w-4 h-4 text-emerald-500/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}