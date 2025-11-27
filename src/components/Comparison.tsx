import { Check, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
            A verdade é <span className="font-bold text-pink-500 italic">simples</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pare de perder tempo com métodos que não funcionam. Escolha o caminho da eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Wrong Way - Left Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-400 border-b border-gray-700 pb-6 w-full text-left">
              Tentando Sozinha
            </h3>
            <ul className="space-y-5">
              {[
                "Treinos aleatórios do YouTube sem progressão",
                "Desânimo por falta de resultados visíveis",
                "Risco de lesões por execução errada",
                "Dieta restritiva que não dura uma semana"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-400">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-base font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Way - Card */}
          <div className="relative">
             {/* Subtle Glow */}
             <div className="absolute inset-0 bg-pink-500/5 blur-3xl rounded-3xl opacity-50"></div>
            
            <div className="relative bg-dark-900 border border-dark-800 rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                <div className="bg-pink-500 rounded-full p-2 shadow-lg shadow-pink-500/40 shrink-0">
                     <Check className="w-5 h-5 text-white" strokeWidth={3} /> 
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Com Quezia Reis
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Plano 100% personalizado para seu corpo",
                  "Acompanhamento diário e motivação",
                  "Correção de movimentos por vídeo",
                  "Estratégias reais para perder gordura e ganhar massa"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-white">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-base font-light">{item}</span>
                  </li>
                ))}
                
                {/* Last item highlighted */}
                  <li className="flex items-start space-x-4 pt-2">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-base text-pink-500 font-bold">Bônus Exclusivos & App Premium</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};