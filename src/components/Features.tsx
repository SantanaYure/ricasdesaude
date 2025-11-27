import { Diamond, ShieldCheck, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Diamond className="w-8 h-8 text-primary" />,
    title: "Treino Exclusivo",
    description: "Cada protocolo é único, criado especificamente para seu biotipo, rotina e objetivo."
  },
  {
    // Changed text-secondary to text-primary
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Comunidade & Segurança",
    description: "Acompanhamento premium para ajustar sua técnica e garantir sua saúde muscular."
  },
  {
    icon: <Trophy className="w-8 h-8 text-primary" />,
    title: "Resultados de Elite",
    description: "Método comprovado para atingir a estética que você deseja sem extremos."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Método <span className="font-bold text-primary italic">Ricas de Saúde</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            O programa desenvolvido para mulheres que não aceitam menos que a excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 bg-dark-700 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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