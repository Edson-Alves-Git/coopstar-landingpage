import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0066cc]/5 -skew-x-12 transform origin-top translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#FF6600] font-bold tracking-widest uppercase text-sm mb-4">Contato Oficial</h2>
            <h3 className="text-5xl font-black mb-8 text-white leading-tight">
              Vamos Agilizar Sua <span className="text-[#0066cc]">Próxima Entrega?</span>
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-lg">
              Atendimento especializado 24 horas para empresas que não podem parar. Solicite sua cotação agora mesmo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Telefones</p>
                    <p className="text-lg font-bold">(11) 5052-3563</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">E-mail</p>
                    <p className="text-lg font-bold truncate">coopstar@hotmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Localização</p>
                    <p className="text-lg font-bold">Moema, São Paulo</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group text-[#FF6600]">
                  <div className="h-12 w-12 bg-[#FF6600]/10 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-tighter">Status</p>
                    <p className="text-lg font-black uppercase italic">Disponível 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
               <div className="bg-[#0066cc] text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                 Cotação Rápida
               </div>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Nome/Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-[#0066cc] outline-none transition-all text-slate-900 font-medium"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-[#0066cc] outline-none transition-all text-slate-900 font-medium"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-[#0066cc] outline-none transition-all text-slate-900 font-medium"
                  placeholder="exemplo@empresa.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Sua Necessidade</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-[#0066cc] outline-none transition-all text-slate-900 font-medium whitespace-pre-wrap"
                  placeholder="Descreva o serviço..."
                ></textarea>
              </div>
              <button 
                className="w-full bg-[#0066cc] hover:bg-slate-900 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl shadow-blue-900/20 text-lg uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Solicitar Agora
                <ArrowRight size={22} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

