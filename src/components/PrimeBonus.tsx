import { Check, Gift } from 'lucide-react';

export const PrimeBonus = () => {
  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24">
      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Background com gradiente */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&auto=format&fit=crop&q=80&blur=10"
            alt="Gourmet beverage background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
        </div>

        {/* Badge Sobreposto - Canto Superior Direito */}


        {/* Conteúdo Principal - Layout Horizontal */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 md:p-12 lg:p-16">
          
          {/* Coluna Esquerda - 65% */}
          <div className="flex-1 lg:w-[65%] space-y-6">
            {/* Eyebrow */}
            <div>
              <span className="text-xs md:text-sm tracking-[0.2em] text-orange-400 uppercase font-medium">
                Presente exclusivo para novas alunas
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white block">Ganhe 1 Ano de</span>
              <span className="text-orange-500 block">Prime Gourmet</span>
            </h1>

            {/* Descrição */}
            <p className="text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed">
              Ao fechar o <strong className="text-white">Plano Anual</strong> hoje, você ganha de presente a assinatura do clube de vantagens para frequentar os melhores restaurantes. Coma pratos incríveis pagando a metade do preço.
            </p>

            {/* Selo Informativo */}
            <div className="inline-flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-3">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-white text-sm md:text-base font-medium">
                100% Gratuito na Assinatura
              </span>
            </div>
          </div>

          {/* Coluna Direita - 35% */}
          <div className="flex-1 lg:w-[35%] w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
                alt="Restaurante sofisticado com vista externa" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};