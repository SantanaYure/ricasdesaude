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
          <div className="space-y-8 px-4">
            <h3 className="text-xl font-bold text-gray-400 mb-2 border-b border-gray-800 pb-4 inline-block w-full text-left">
              Tentando Sozinha
            </h3>
            <ul className="space-y-6">
              {[
                "Treinos aleatórios do YouTube sem progressão",
                "Desânimo por falta de resultados visíveis",
                "Risco de lesões por execução errada",
                "Dieta restritiva que não dura uma semana"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-400">
                  <X className="w-6 h-6 text-feedback-error shrink-0 mt-0.5" />
                  <span className="text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Way - Card */}
          <div className="relative">
             {/* Subtle Glow */}
             <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl opacity-40"></div>
            
            <div className="relative bg-[#111] border border-primary/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                <div className="bg-primary rounded-full p-1 shadow-lg shadow-primary/40">
                     <Check className="w-5 h-5 text-white" strokeWidth={3} /> 
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Com Quezia Reis
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  "Plano 100% personalizado para seu corpo",
                  "Acompanhamento diário e motivação",
                  "Correção de movimentos por vídeo",
                  "Estratégias reais para perder gordura e ganhar massa"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 font-medium text-white">
                    <Check className="w-5 h-5 text-feedback-success shrink-0 mt-1" />
                    <span className="text-lg font-light">{item}</span>
                  </li>
                ))}
                
                {/* Last item highlighted */}
                  <li className="flex items-start space-x-4 font-bold text-pink-50">
                    <Check className="w-5 h-5 text-feedback-success shrink-0 mt-1" />
                    <span className="text-lg text-pink-500 font-bold">Bônus Exclusivos & App Premium</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};