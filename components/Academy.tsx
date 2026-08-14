"use client";

export default function Academy() {
  const highlights = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Biblioteca",
      description: "Seus materiais reunidos em um único lugar.",
      animation: "group-hover:rotate-12 group-hover:scale-110"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Atualizações",
      description: "Novas ferramentas e conteúdos podem ser adicionados.",
      animation: "group-hover:scale-110 group-hover:-rotate-12"
    },
    {
      icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
      title: "Bônus",
      description: "Novos materiais exclusivos podem entrar na Academy.",
      animation: "group-hover:scale-110 group-hover:rotate-12"
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img
                src="/logo/nxt-academy.png"
                alt="NXT Academy"
                className="h-8 w-8 sm:h-12 sm:w-12"
              />
              <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider">NXT ACADEMY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-6">
              Seu acesso{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                não termina no download.
              </span>
            </h2>
            <p className="text-sm sm:text-xl text-gray-400 leading-relaxed">
              Ao adquirir o NXT AI Pack, você também recebe acesso à NXT Academy,
              onde seus materiais ficam organizados e novos conteúdos podem ser
              adicionados ao longo do tempo.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="card-dark p-4 sm:p-8 flex items-start gap-3 sm:gap-6 group"
              >
                <div className={`w-11 h-11 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-xl sm:rounded-2xl border border-emerald-500/20 transition-all duration-500 ${highlight.animation}`}>
                  <svg className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={highlight.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-lg text-gray-400 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}