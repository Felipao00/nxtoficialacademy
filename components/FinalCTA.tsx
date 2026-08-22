import { CHECKOUT_URL } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Pronto para usar a IA de um jeito{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
            mais inteligente?
          </span>
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Tenha acesso ao NXT AI PACK e descubra ferramentas que podem tornar sua rotina mais rápida e produtiva.
        </p>
        <a href={CHECKOUT_URL} className="btn-primary text-lg px-12 py-5">
          QUERO ACESSAR O NXT AI PACK
        </a>
      </div>
    </section>
  );
}