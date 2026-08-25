"use client";

export default function MarqueeBand() {
  return (
    <div className="relative bg-black py-8 sm:py-12 overflow-hidden">
      {/* Primeira faixa - inclinada para direita */}
      <div className="relative z-10 bg-emerald-500 overflow-hidden py-2 sm:py-3 rotate-2">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="flex items-center gap-6 sm:gap-10">
                  <span className="text-sm sm:text-lg font-extrabold text-black uppercase tracking-wider">
                    NATIVA ACADEMY
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Segunda faixa - inclinada para esquerda, cruzando a primeira */}
      <div className="relative z-20 -mt-4 sm:-mt-6 bg-emerald-950/90 backdrop-blur-sm border-y border-emerald-500/30 overflow-hidden py-2 sm:py-3 -rotate-2 shadow-xl">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="flex items-center gap-6 sm:gap-10">
                  <span className="text-sm sm:text-lg font-extrabold text-emerald-400 uppercase tracking-wider">
                    NATIVA ACADEMY
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}