import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet="https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/quezia-about-mobile.png" 
          />
          <img 
            src="https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/quezia-about.png" 
            alt="Woman working out" 
            className="w-full h-full object-cover opacity-60"
          />
        </picture>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-left mt-16">
        
        <div className="mb-8">
           <span className="text-xs md:text-sm tracking-[0.2em] text-pink-500 uppercase border border-pink-500 px-4 py-2 rounded-full font-medium inline-block">
             Consultoria Online Premium
           </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight drop-shadow-lg">
          Transforme seu <br/>
          corpo e <span className="font-bold italic text-pink-500">mente</span>
        </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl font-light drop-shadow">
            Treinos personalizados para mulheres que buscam excelência em todas as áreas da vida
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button 
            variant="primary" 
            className="bg-pink-500 text-white rounded-full font-bold uppercase tracking-wider shadow-lg hover:bg-pink-600 transition-colors duration-200 px-10 py-4"
            onClick={() => document.getElementById('plans')?.scrollIntoView()}>
            Começar Agora
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-colors duration-200 px-10 py-4"
            onClick={() => document.getElementById('about')?.scrollIntoView()}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};