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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative pt-8 flex flex-col ${plan.highlight ? 'order-first md:order-last' : 'order-last md:order-first'}`}
            >
              {/* Discount Tag (Top Left) */}
              <div className="absolute top-0 left-6 z-10">
                 <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
                   {plan.discountTag}
                 </span>
              </div>

              {/* Special Tag (Top Right) for Highlighted Plan */}
              {plan.specialTag && (
                <div className="absolute top-0 right-6 z-10">
                   <span className="bg-dark-900 border border-pink-500 text-pink-500 text-xs font-bold italic px-4 py-1 uppercase tracking-wider">
                     {plan.specialTag}
                   </span>
                </div>
              )}

              {/* Card */}
              <div className={`p-8 pt-10 rounded-2xl border flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-transparent border-pink-500/50' 
                  : 'bg-transparent border-gray-700'
              }`}>
                <div className="mb-8">
                  <h3 className="text-pink-500 uppercase tracking-widest text-sm mb-4 font-semibold">{plan.name}</h3>
                  
                  <p className="text-gray-500 text-sm line-through">
                    De R$ {plan.originalPrice}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl text-white font-light">Por</span>
                    <span className="text-5xl md:text-6xl font-light text-pink-500">R$ {plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 grow">
                  {plan.features.map((feature, idx) => {
                    const isSeparator = feature === "e mais...";
                    return (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        {/* Diamond bullet point */}
                        {!isSeparator && (
                          <div className="mt-1.5 w-2 h-2 border border-pink-500 rotate-45 shrink-0" />
                        )}
                        <span className={`${isSeparator ? 'text-pink-500 font-bold italic pl-5' : 'text-gray-300 font-light'}`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Button 
                  fullWidth 
                  variant={plan.buttonVariant}
                  className={plan.highlight 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-widest font-medium text-xs py-4 rounded-full border-0' 
                    : 'bg-transparent border border-gray-600 text-white hover:bg-white/5 uppercase tracking-widest font-medium text-xs py-4 rounded-full'
                  }
                  onClick={() => window.open(plan.link, '_blank')}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};