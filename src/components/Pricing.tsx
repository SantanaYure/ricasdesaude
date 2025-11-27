import { Button } from './Button';

const plans = [
  {
    name: "Trimestral",
    discountTag: "30% OFF",
    originalPrice: "1.000",
    price: "700",
    link: "https://mpago.li/2K7Gb9S",
    features: [
      "Protocolo de treino exclusivo",
      "Assinatura Prime Gourmet",
      "Suporte prioritário via WhatsApp",
      "3 sessões de consultoria online"
    ],
    highlight: false,
    buttonVariant: 'outline' as const
  },
  {
    name: "Anual",
    discountTag: "50% OFF",
    specialTag: "Mais Escolhido",
    originalPrice: "3.000",
    price: "1.500",
    link: "https://mpago.la/1NRFg84",
    features: [
      "Protocolo de treino exclusivo",
      "Assinatura Prime Gourmet",
      "Suporte VIP via WhatsApp",
      "20 sessões de consultoria online",
      "e mais...",
      "Kit premium com mini band",
      "Ebook digital exclusivo"
    ],
    highlight: true,
    buttonVariant: 'primary' as const
  }
];

export const Pricing = () => {
  return (
    <section id="plans" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-light mb-4">
            Planos <span className="font-bold italic text-pink-500">Exclusivos</span>
          </h2>
          <p className="text-gray-400">Escolha o plano e comece sua transformação ainda hoje.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-dark-900 border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
                  : 'bg-dark-900 border-primary/30 hover:border-primary/60'
              }`}
            >
              {/* Discount Tag (Top Left) */}
              <div className="absolute -top-4 left-8">
                 <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                   {plan.discountTag}
                 </span>
              </div>

              {/* Special Tag (Top Right) for Highlighted Plan */}
              {plan.specialTag && (
                <div className="absolute -top-3 right-8">
                   <span className="bg-dark-900 border border-primary text-pink-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                     {plan.specialTag}
                   </span>
                </div>
              )}

              <div className="mb-8 mt-4">
                <h3 className="text-pink-500 uppercase tracking-widest text-sm mb-4 font-medium">{plan.name}</h3>
                
                <p className="text-gray-500 text-sm line-through decoration-gray-500 decoration-1">
                  De R$ {plan.originalPrice}
                </p>
                
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl text-white font-light">Por</span>
                  <span className="text-4xl md:text-5xl font-light text-pink-500 ml-1">R$ {plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => {
                  const isSeparator = feature === "e mais...";
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      {/* Diamond bullet point */}
                      <div className={`mt-1.5 w-2.5 h-2.5 border border-primary rotate-45 flex-shrink-0 ${isSeparator ? 'opacity-0' : ''}`} />
                      <span className={`${isSeparator ? 'text-pink-500 font-bold italic' : 'text-gray-300 font-light'}`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button 
                fullWidth 
                variant={plan.buttonVariant}
                className={plan.buttonVariant === 'outline' ? 'border-primary/50 text-white hover:bg-primary/10 hover:text-white uppercase tracking-widest font-normal text-xs py-4' : 'uppercase tracking-widest font-normal text-xs py-4 text-white'}
                onClick={() => window.open(plan.link, '_blank')}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};