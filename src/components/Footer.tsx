import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10">
          <div>
            <Logo className="h-10 mb-6" />
            <p className="max-w-xs text-sm leading-relaxed">
              Especialistas em logística expressa, motofrete e delivery corporativo em São Paulo e região.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
             <nav className="flex gap-6 text-sm font-bold uppercase tracking-widest text-white/50">
               <a href="#inicio" className="hover:text-[#0066cc] transition-colors">Início</a>
               <a href="#sobre" className="hover:text-[#0066cc] transition-colors">Sobre</a>
               <a href="#servicos" className="hover:text-[#0066cc] transition-colors">Serviços</a>
               <a href="#contato" className="hover:text-[#0066cc] transition-colors">Contato</a>
             </nav>
             <div className="text-xs text-slate-600 mt-4">
               &copy; {currentYear} Coopstar Express. Todos os direitos reservados.
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

