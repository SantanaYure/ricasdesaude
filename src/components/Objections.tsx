import { Clock, DollarSign, Dumbbell, MapPin, Calendar, Brain } from 'lucide-react';
import { Button } from './Button';

const objections = [
  {
    icon: Clock,
    objection: '"Não tenho tempo"',
    answer: 'Você não precisa de muito tempo, você precisa de método e constância. Com apenas 30-45 minutos por dia, você consegue resultados reais.',
  },
  {
    icon: DollarSign,
    objection: '"É muito caro"',
    answer: 'Caro é continuar investindo em dietas que não funcionam, suplementos errados e médicos para tratar doenças evitáveis. Saúde é o investimento com maior retorno.',
  },
  {
    icon: Dumbbell,
    objection: '"Não sei treinar"',
    answer: 'Você não precisa saber. É por isso que existe acompanhamento profissional. Cada exercício tem vídeo explicativo e eu estou aqui para tirar suas dúvidas.',
  },
  {
    icon: MapPin,
    objection: '"Moro longe / Não tenho academia"',
    answer: 'O método é 100% online e adaptável. Posso montar treinos para academia, casa ou onde você estiver. A distância não é mais desculpa.',
  },
  {
    icon: Calendar,
    objection: '"Vou começar segunda-feira"',
    answer: 'A melhor hora para começar era ontem. A segunda melhor é agora. Cada dia que passa é um dia de resultados perdidos.',
  },
  {
    icon: Brain,
    objection: '"Já tentei de tudo e nada funciona"',
    answer: 'Você não tentou de tudo. Você tentou sem método, sem acompanhamento e sem constância. Dessa vez vai ser diferente porque você não estará sozinha.',
  },
];

export const Objections = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Será que isso é <span className="font-bold font-serif italic text-pink-500">pra mim?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Eu sei que você tem dúvidas. Todas nós temos. Mas deixa eu te mostrar por que essas "desculpas" não vão mais te impedir:
          </p>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objections.map((item, index) => (
            <div 
              key={index}
              className="group bg-black/50 border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-pink-500" />
              </div>
              
              {/* Objection */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-pink-500 transition-colors">
                {item.objection}
              </h3>
              
              {/* Answer */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 max-w-3xl">
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6">
              A única coisa que separa você dos seus resultados é a{' '}
              <span className="text-pink-500 font-bold">decisão de começar</span>.
              <br />
              <span className="text-gray-400 text-lg">E eu vou estar com você em cada passo.</span>
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-pink-500/30 blur-xl rounded-full"></div>
              <Button 
                className="relative bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-widest font-medium text-sm py-4 px-10 rounded-full"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
