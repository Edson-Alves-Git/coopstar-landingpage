import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Equipe Especializada',
      description: 'Profissionais treinados e uniformizados para garantir a melhor imagem e segurança nas suas entregas.',
      color: 'bg-[#0066cc]'
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Foco no Prazo',
      description: 'Nosso compromisso é o seu horário. Tecnologia de ponta para agendamentos e rotas otimizadas.',
      color: 'bg-[#FF6600]'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: 'Destaque no Mercado',
      description: 'Mais de 9 anos de história construídos com base na confiança e agilidade em cada coleta.',
      color: 'bg-slate-900'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-logistics.png" 
                alt="Operação Logística" 
                className="w-full aspect-video md:aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066cc]/40 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-100 hidden md:block">
              <p className="text-5xl font-black text-slate-900 mb-1">9+</p>
              <p className="text-sm font-bold text-[#FF6600] uppercase tracking-tighter">Anos de Sucesso</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#0066cc] font-bold tracking-widest uppercase text-sm mb-4"
              >
                Conheça a Coopstar
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
              >
                Tradição que gera <br />
                <span className="text-[#FF6600]">Resultados Reais</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                A <strong>Coopstar Express</strong> não apenas entrega pacotes; nós entregamos tranquilidade para o seu negócio. Nossa infraestrutura é moldada para agilizar processos e garantir o êxito em cada etapa logística.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-md transition-shadow"
                >
                  <div className={`flex-shrink-0 h-16 w-16 rounded-xl ${card.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{card.title}</h4>
                    <p className="text-slate-500 leading-snug">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

