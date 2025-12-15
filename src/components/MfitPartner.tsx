import { Check, Smartphone, CheckCircle2 } from 'lucide-react';

export const MfitPartner = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-pink-500 font-bold tracking-widest text-xs uppercase">
              
              
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Sua academia <br />
              <span className="text-pink-500 font-serif italic font-bold">na palma da mão</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Tenha acesso total ao seu plano personalizado através do App MFIT. A melhor tecnologia do mercado para você treinar em casa, na academia ou em viagens.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Vídeos demonstrativos de cada exercício</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Chat direto com a Quezia para tirar dúvidas</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Cronograma ajustável à sua rotina</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Registro de evolução com fotos e medidas</span>
              </li>
            </ul>

            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Garantir meu acesso
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
             <div className="relative bg-white rounded-4xl p-4 shadow-2xl border border-gray-800">
                <img 
                  src="https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/mfit.jpeg" 
                  alt="Interface MFIT Personal" 
                  className="w-full h-auto rounded-4xl shadow-inner"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-4 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Powered by</p>
                        <p className="text-white font-bold text-sm">MFIT Personal</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
