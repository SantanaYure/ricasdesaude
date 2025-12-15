import { Button } from './Button';
import { Star, GraduationCap, Heart, Instagram } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-dark-800 to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="aspect-3/4 rounded-2xl overflow-hidden relative border border-white/10">
                 <img 
                  src="https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/quezia-hero.jpg" 
                  alt="Quezia Reis" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-2xl font-bold">Quezia Reis</p>
                    <p className="text-pink-500 text-sm">Personal Trainer</p>
                </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <span className="text-pink-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                Sua Mentora
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
                Quezia <span className="font-bold italic">Reis</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Especialista em transformação física feminina e criadora do Método Ricas de Saúde. Minha missão não é apenas te fazer emagrecer, mas devolver sua autoestima e vitalidade.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Diferente de personal trainers comuns que apenas contam repetições, eu atuo como uma estrategista do seu corpo. Entendo a rotina da mulher moderna, os desafios hormonais e a necessidade de otimização de tempo.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Já ajudei centenas de mulheres a saírem do "efeito sanfona" e conquistarem um corpo estético e funcional, sem precisarem morar na academia.
              </p>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <a 
                  href="https://www.instagram.com/queziareisrs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-pink-500 transition-colors"
                >
                  <Instagram size={16} />
                  <span>@queziareisrs</span>
                </a>
                
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};