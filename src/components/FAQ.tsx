import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Qual o horário de atendimento da Coopstar Express?",
      answer: "Nossas operações de entregas e coletas funcionam 24 horas por dia, de segunda a segunda-feira, mediante agendamento com hora marcada para garantir a pontualidade."
    },
    {
      question: "Atendem fora da cidade de São Paulo?",
      answer: "Sim! Além da Capital, atendemos a Grande São Paulo, ABCD, Litoral e Interior. Para viagens de longa distância, possuímos tabelas competitivas baseadas na quilometragem."
    },
    {
      question: "Como funciona a implantação de delivery para e-commerce?",
      answer: "Avaliamos seu volume de saídas e alocamos profissionais dedicados ou em sistema de coleta programada, otimizando seus custos de logística última milha."
    },
    {
      question: "Quais são as formas de faturamento para empresas?",
      answer: "Trabalhamos com faturamento quinzenal ou mensal para clientes cadastrados, facilitando a gestão financeira do seu negócio."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0066cc] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Suporte e Dúvidas
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Perguntas <span className="text-[#FF6600]">Frequentes</span>
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-3xl transition-all duration-300 ${openIndex === index ? 'bg-slate-50 border border-[#0066cc]/20 shadow-xl shadow-blue-900/5' : 'bg-white border border-slate-100 hover:border-[#0066cc]/30'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-[#0066cc]' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#0066cc]' : 'text-slate-300'}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0 text-slate-500 text-lg leading-relaxed">
                      <div className="pt-4 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

