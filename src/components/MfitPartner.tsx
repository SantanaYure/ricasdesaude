import { PlayCircle, TrendingUp, Timer, Smartphone, CheckCircle2 } from 'lucide-react';

export const MfitPartner = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
              <Smartphone className="w-4 h-4" />
              <span>Plataforma Parceira MFIT</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Sua academia <br />
              <span className="text-primary font-serif italic font-bold">na palma da mão</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Para garantir a melhor experiência, utilizo a <strong className="text-white">MFIT Personal</strong>, a plataforma de treinos mais completa do mercado. Através dela, você acessa meu planejamento personalizado para você, vê vídeos demonstrativos e acompanha sua evolução carga por carga.
            </p>

            <div className="space-y-8 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Vídeos Explicativos</h3>
                  <p className="text-gray-500 text-sm">Mais de 1.800 vídeos didáticos na plataforma para execução perfeita.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Controle de Evolução</h3>
                  <p className="text-gray-500 text-sm">Eu acompanho seus gráficos de progresso e histórico de cargas remotamente.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Timer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Timer & Intervalo</h3>
                  <p className="text-gray-500 text-sm">O app avisa a hora exata de descansar e voltar a treinar.</p>
                </div>
              </div>
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
