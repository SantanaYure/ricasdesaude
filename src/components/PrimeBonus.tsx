import { Utensils, Bed, Ticket, ArrowRight } from 'lucide-react';

export const PrimeBonus = () => {
  return (
    <section className="py-10 bg-dark-900">
      <div className="container mx-auto px-4">
        {/* Card Container - Changed border/shadow to secondary (orange) */}
        <div className="relative rounded-3xl overflow-hidden bg-dark-800 border border-secondary/20 shadow-2xl shadow-secondary/5">
          
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              
              {/* Badge - Changed to secondary */}
              <div className="mb-8">
                <span className="bg-orange-950/30 text-secondary border border-secondary/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase inline-block">
                  Bônus Exclusivo VIP
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                Assinatura <span className="text-secondary font-serif italic font-medium">Prime Gourmet</span><br />
                Inclusa
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Ao fechar o plano de consultoria Anual, você ganha acesso ao clube de vantagens mais exclusivo do Brasil.
              </p>

              {/* List - Icons changed to secondary */}
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Utensils className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Comprou um prato, ganhou outro (2 por 1)</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Bed className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Descontos exclusivos em hotéis</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Ticket className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Ingressos de cinema e parques em dobro</span>
                </li>
              </ul>

              {/* Link - Changed to secondary */}
              <div>
                <a 
                  href="#plans" 
                  className="inline-flex items-center text-secondary font-medium hover:text-white transition-colors group text-sm uppercase tracking-wide border-b border-secondary/30 pb-1 hover:border-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Garantir meu bônus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[300px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                alt="Jantar Prime Gourmet" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay gradient to merge with left side on desktop and top on mobile */}
              <div className="absolute inset-0 bg-linear-to-t from-dark-800 via-dark-800/80 to-transparent lg:bg-linear-to-l lg:from-dark-800 lg:to-transparent"></div>

              {/* Floating Badge - Changed to secondary */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 max-w-xs bg-black/60 backdrop-blur-md p-4 rounded-lg border-l-4 border-secondary border-t border-r border-b border-white/5 shadow-xl">
                <p className="text-secondary font-bold text-sm mb-1">Economia Real</p>
                <p className="text-gray-300 text-xs">Recupere o valor do investimento jantando fora.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};