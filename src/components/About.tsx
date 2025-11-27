import { Button } from './Button';
import { Star, GraduationCap, Heart } from 'lucide-react';

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
                Sua Treinadora
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
                Quezia <span className="font-bold italic">Reis</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Criadora do Método Ricas de Saúde, Quezia Reis é a referência para mulheres que buscam não apenas um corpo estético, mas uma transformação de mentalidade e hábitos.
              </p>
            </div>

            <div className="space-y-6">
                <div className="flex gap-5">
                    <div className="shrink-0">
                        <Heart className="w-6 h-6 text-pink-500" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Lifestyle & Equilíbrio</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Compreende na prática a arte de equilibrar família, carreira e bem-estar, oferecendo soluções reais para mulheres que exigem excelência.</p>
                    </div>
                </div>
                
                <div className="flex gap-5">
                    <div className="shrink-0">
                        <GraduationCap className="w-6 h-6 text-pink-500" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Especialização Premium</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Bacharel em Educação Física com Especialização em Saúde da Mulher e certificação internacional NASM.</p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="shrink-0">
                        <Star className="w-6 h-6 text-pink-500" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Formação de Elite</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Background refinado em Dança (Byla Dança) e Pilates, combinando arte, ciência e técnica em cada protocolo.</p>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                 <Button 
                   className="bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-widest font-medium text-xs py-4 px-8 rounded-full"
                   onClick={() => window.open('https://wa.me/5571988895613?text=Oi%20Quezia!%20Gostaria%20de%20agendar%20uma%20consultoria', '_blank')}
                 >
                    Agendar Consultoria
                 </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};