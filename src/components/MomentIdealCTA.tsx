export const MomentIdealCTA = () => (
  <section className="py-24 bg-black text-white">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
        Talvez você esteja esperando o <span className="text-pink-500 font-bold italic">momento ideal</span>,<br />
        mas deixa eu te contar uma coisa:
        <span className="block text-gray-400 text-2xl mt-4">esse momento nunca chega.</span>
        <span className="block text-white font-bold text-3xl mt-2">É você que precisa criar.</span>
      </h2>
      <div className="relative inline-block mt-8">
        <div className="absolute inset-0 bg-pink-500/30 blur-xl rounded-full"></div>
        <button
          className="relative bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-widest font-medium text-sm py-4 px-10 rounded-full cursor-pointer"
          onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero começar agora
        </button>
      </div>
    </div>
  </section>
);
