export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-lg font-bold text-white">NXT AI PACK</span>
        <p className="text-sm text-gray-500 mt-2">
          Ferramentas de IA para uma rotina mais produtiva.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <p className="text-xs text-gray-600 mt-6">
          © 2026 NXT AI PACK. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}