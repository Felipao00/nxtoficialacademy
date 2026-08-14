import { CHECKOUT_URL } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
          Descubra uma nova forma de trabalhar com IA.
        </h2>
        
        <div className="space-y-2 mb-10 text-gray-400 text-xl">
          <p>20 ferramentas.</p>
          <p>Bônus exclusivos.</p>
          <p>NXT Academy.</p>
        </div>

        <a href={CHECKOUT_URL} className="btn-primary text-xl px-16 py-5 mb-8">
          QUERO MEU ACESSO
        </a>
        
        <p className="text-3xl font-bold text-white">R$39,90</p>
      </div>
    </section>
  );
}