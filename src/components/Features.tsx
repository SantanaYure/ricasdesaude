import { Dumbbell, Activity, Brain } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="w-8 h-8 text-pink-500" />,
    title: "Treino Feminino Especializado",
    description: "Protocolos desenhados especificamente para o corpo da mulher. Foco em estética, definição e saúde hormonal."
  },
  {
    icon: <Activity className="w-8 h-8 text-pink-500" />,
    title: "Saúde Integral",
    description: "Uma abordagem que vai além do físico. Orientações para melhorar seu sono, disposição e rotina, promovendo saúde de dentro para fora."
  },
  {
    icon: <Brain className="w-8 h-8 text-pink-500" />,
    title: "Mentalidade Blindada",
    description: "Suporte constante para vencer a autosabotagem e transformar a disciplina em um hábito natural e prazeroso."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">
                <span className="text-white">Mais do que treino: </span>
                <span className="text-pink-500">Estratégia de Saúde Integral</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                Abandone as fichas genéricas. Tenha um acompanhamento que une exercícios personalizados e ajuste de hábitos para resultados definitivos.
              </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300 group"
            >
              <div className="mb-6 bg-[#2a2a2a] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};