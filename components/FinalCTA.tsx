import { CHECKOUT_URL } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-16 bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
          Pronto para usar a IA de um jeito{" "}
          <span className="text-emerald-400">mais inteligente?</span>
        </h2>
        <p className="text-xs sm:text-base text-gray-400 mb-5 sm:mb-8">
          Tenha acesso ao NXT AI PACK e descubra ferramentas que podem tornar sua rotina mais rápida e produtiva.
        </p>
        <a href={CHECKOUT_URL} className="btn-primary text-sm sm:text-lg px-6 sm:px-12 py-3 sm:py-5">
          QUERO ACESSAR O NXT AI PACK
        </a>
      </div>
    </section>
  );
}