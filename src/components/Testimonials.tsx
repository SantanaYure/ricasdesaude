const testimonials = [
  "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento1.jpeg",
  "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento2.jpeg",
  "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento3.jpeg",
  "https://quezia-lp-assets.s3.sa-east-1.amazonaws.com/depoimento4.jpeg"
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-light mb-6">
            Histórias de <span className="font-bold italic text-primary">Sucesso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira o que dizem quem já transformou o corpo e a mente com o Método.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {testimonials.map((imgSrc, i) => (
            <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/5 bg-dark-800 shadow-lg">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none z-10"></div>
              <img 
                src={imgSrc} 
                alt={`Depoimento de aluna ${i + 1}`} 
                className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};