import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066cc]/10 rounded-full blur-[120px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6600]/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF6600] font-semibold text-sm mb-8 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6600] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6600]"></span>
              </span>
              Operação 24 Horas em São Paulo
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Sua Logística <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#3399ff]">Na Velocidade</span> <br />
              Do Seu Negócio
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Mais de 9 anos de excelência em entregas rápidas e coletas estratégicas. Agilidade total na Capital e Grande São Paulo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#contato" 
                className="inline-flex justify-center items-center gap-3 bg-[#FF6600] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#E65C00] transition-all transform hover:scale-105 shadow-xl shadow-[#FF6600]/20 text-lg"
              >
                Solicitar Coleta
                <ArrowRight size={22} />
              </a>
              <a 
                href="#servicos" 
                className="inline-flex justify-center items-center gap-3 bg-white/5 text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl font-black text-white">9+</p>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#FF6600]">24h</p>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Disponibilidade</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0066cc]">100%</p>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Comprometimento</p>
              </div>
            </div>
          </motion.div>

          {/* New High Quality Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white/5 shadow-2xl shadow-black/50 aspect-[4/5] lg:aspect-auto">
              <img 
                src="/imagens/hero1.png" 
                alt="Motoboy Profissional Coopstar Express" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Status Card Overlay */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-5 border border-slate-100 hidden md:flex"
            >
              <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                 <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status de Entrega</p>
                <p className="text-lg font-black text-slate-900 italic">SEGURANÇA TOTAL</p>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(#ffffff20_2px,transparent_2px)] [background-size:24px_24px] z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

