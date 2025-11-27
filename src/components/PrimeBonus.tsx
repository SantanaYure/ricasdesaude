import { Utensils, Bed, Ticket, ArrowRight } from 'lucide-react';

export const PrimeBonus = () => {
  return (
    <section className="py-10 bg-dark-900">
      <div className="container mx-auto px-4">
        {/* Card Container - Changed border/shadow to secondary (orange) */}
        <div className="relative rounded-3xl overflow-hidden bg-dark-900 border border-text-orange-500/30 shadow-2xl shadow-text-orange-500/10">
          
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10 border-r border-text-orange-500/20">
              
              {/* Badge - Changed to secondary */}
              <div className="mb-8">
                <span className="bg-transparent text-orange-500 border border-text-orange-500 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase inline-block">
                  Bônus Exclusivo VIP
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                Assinatura <span className="text-orange-500 font-serif italic font-normal">Prime<br />Gourmet</span><br />
                Inclusa
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Ao fechar o plano de consultoria Anual, você ganha acesso ao clube de vantagens mais exclusivo do Brasil.
              </p>

              {/* List - Icons changed to secondary */}
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Utensils className="w-5 h-5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Comprou um prato, ganhou outro (2 por 1)</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Bed className="w-5 h-5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Descontos exclusivos em hotéis</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 group">
                  <Ticket className="w-5 h-5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Ingressos de cinema e parques em dobro</span>
                </li>
              </ul>

              {/* Link - Changed to secondary */}
              <div>
                <a 
                  href="#plans" 
                  className="inline-flex items-center text-orange-500 font-medium hover:text-white transition-colors group text-sm uppercase tracking-wide border-b border-text-orange-500/30 pb-1 hover:border-white"
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
              
              {/* Floating Badge - Changed to secondary */}
              <div className="absolute bottom-8 right-8 max-w-xs bg-black/90 rounded-xl p-4">
                <p className="text-orange-500 font-bold text-base mb-1">Economia Real</p>
                <p className="text-gray-300 text-base">Recupere o valor do investimento jantando fora.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};