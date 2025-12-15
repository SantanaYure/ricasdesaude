import { Button } from './Button';
import { Check, Star, Gift } from 'lucide-react';

const plans = [
  {
    name: "Trimestral",
    originalPrice: "997,00",
    price: "700",
    period: "/único",
    link: "https://mpago.li/2K7Gb9S",
    features: [
      { text: "Acesso ao App por 3 meses", icon: "check" },
      { text: "Treino Personalizado", icon: "check" },
      { text: "Orientações de Hábitos Saudáveis", icon: "check" },
      { text: "Suporte via App", icon: "check" }
    ],
    highlight: false
  },
  {
    name: "Anual VIP",
    specialTag: "MAIS VANTAJOSO",
    originalPrice: "2.400,00",
    price: "1.500",
    period: "/ano",
    monthlyEquivalent: "125,00",
    link: "https://mpago.la/1NRFg84",
    features: [
      { text: "Tudo do Plano Trimestral", icon: "check" },
      { text: "Acesso por 12 meses", icon: "star" },
      { text: "Whatsapp Pessoal da Mentora", icon: "star" },
      { text: "Análise de Movimento", icon: "star" },
      { text: "BRINDE:   Assinatura Prime Gourmet", icon: "gift" }
    ],
    highlight: true
  }
];

export const Pricing = () => {
  return (
    <section id="plans" className="py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-normal mb-4">
            Escolha sua <span className="text-pink-500">evolução</span>
          </h2>
          <p className="text-gray-400">Condições especiais por tempo limitado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col ${plan.highlight ? 'order-first md:order-last' : 'order-last md:order-first'}`}
            >
              {/* Special Tag (Top Right) for Highlighted Plan */}
              {plan.specialTag && (
                <div className="absolute -top-3 right-6 z-10">
                   <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded uppercase tracking-wider">
                     {plan.specialTag}
                   </span>
                </div>
              )}

              {/* Card */}
              <div className={`p-8 rounded-2xl flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-[#2a1a2a] to-[#1a1a1a] border-2 border-pink-500' 
                  : 'bg-[#0f0f0f] border border-gray-800'
              }`}>
                <div className="mb-8">
                  <h3 className="text-white text-2xl mb-4 font-semibold">{plan.name}</h3>
                  
                  <p className="text-gray-500 text-sm line-through mb-2">
                    De R$ {plan.originalPrice}
                  </p>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-lg text-white font-light">R$</span>
                    <span className="text-6xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  
                  {plan.monthlyEquivalent && (
                    <p className="text-gray-400 text-sm">
                      Equivalente a R$ {plan.monthlyEquivalent}/mês
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-10 grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.icon === 'check' && (
                        <Check className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                      )}
                      {feature.icon === 'star' && (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" />
                      )}
                      {feature.icon === 'gift' && (
                        <Gift className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-white ${feature.icon === 'gift' ? 'font-normal' : ''}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  fullWidth 
                  className={plan.highlight 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white font-bold text-base py-4 rounded-full border-0' 
                    : 'bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500/10 font-normal text-base py-4 rounded-full'
                  }
                  onClick={() => window.open(plan.link, '_blank')}
                >
                  {plan.highlight ? 'Quero o Plano VIP' : 'Selecionar Trimestral'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};