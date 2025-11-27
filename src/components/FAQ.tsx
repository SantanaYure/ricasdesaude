import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como recebo meu treino?",
    answer: "Seu treino será disponibilizado através da plataforma MFIT Personal. Você receberá um login exclusivo para acessar vídeos, contagem de séries e registrar sua evolução."
  },
  {
    question: "O Prime Gourmet é vitalício?",
    answer: "A assinatura do Prime Gourmet é válida pelo período contratado do plano Anual, permitindo que você economize milhares de reais em restaurantes e viagens."
  },
  {
    question: "Serve para iniciantes?",
    answer: "Com certeza! O Método Ricas de Saúde é totalmente adaptável. Se você nunca treinou, começaremos do zero, respeitando seu ritmo e limitações."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-white">
          Perguntas <span className="font-bold font-serif italic text-primary">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-dark-900 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg md:text-xl text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};