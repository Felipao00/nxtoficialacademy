import { WHAT_YOU_GET } from "@/lib/data";

export default function WhatYouGet() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            O que você encontra{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              dentro do NXT AI PACK
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {WHAT_YOU_GET.map((item, index) => (
            <div key={index} className="card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400">
          Tudo organizado para você encontrar rapidamente o que precisa.
        </p>
      </div>
    </section>
  );
}