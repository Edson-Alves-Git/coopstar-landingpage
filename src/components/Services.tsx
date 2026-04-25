import { motion } from 'framer-motion';
import { Package, Truck, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=800&auto=format&fit=crop",
      title: 'Moto Frete Prime',
      tag: 'Agilidade Máxima',
      description: 'Entregas ultra-rápidas de documentos, cartórios e serviços bancários com motofretistas especializados.',
      color: 'bg-[#0066cc]'
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1588636184285-d72b22588147?q=80&w=800&auto=format&fit=crop",
      title: 'Delivery Corporativo',
      tag: 'Logística B2B',
      description: 'Gestão completa para Food, Farma e Varejo. Implantamos equipe dedicada para o seu fluxo de pedidos.',
      color: 'bg-[#FF6600]'
    },
    {
      icon: <Package className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop",
      title: 'Fora da Capital',
      tag: 'Grande SP e Interior',
      description: 'Logística de longa distância com monitoramento. Atendimento em todo o estado de São Paulo.',
      color: 'bg-slate-900'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FF6600] font-bold tracking-widest uppercase text-sm mb-4"
            >
              Soluções Logísticas
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Nossa Missão é <br />
              <span className="text-[#0066cc]">Movimentar Sua Empresa</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg max-w-sm"
          >
            Serviços especializados com foco no cumprimento rigoroso de prazos e segurança total da carga.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className={`absolute top-6 right-6 ${service.color} p-4 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  {service.icon}
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
                    {service.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0066cc] transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href="#contato" 
                  className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-[#FF6600] transition-colors"
                >
                  Saiba mais <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

