export default function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 py-12 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo/nxt-academy.png"
              alt="Nativa Academy"
              className="h-10 w-10"
            />
            <div>
              <span className="text-lg font-bold text-white">Nativa Academy</span>
              <p className="text-sm text-gray-500 mt-1">
                Ferramentas, conhecimento e tecnologia para quem quer evoluir.
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
              Termos
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
              Privacidade
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Nativa Academy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}