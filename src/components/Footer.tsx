import { Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 text-sm text-gray-500">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Método Ricas de Saúde</h3>
            <p className="max-w-xs">
              Transformando vidas através do movimento, nutrição inteligente e mentalidade forte.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Início</a></li>
              <li><a href="#plans" className="hover:text-pink-500 transition-colors">Planos</a></li>
              <li><a href="#about" className="hover:text-pink-500 transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/queziareisrs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-pink-500/10 transition-all text-pink-500"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5571988895613?text=Oi%20Quezia!%20Vim%20pelo%20site%20e%20quero%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-green-500/10 transition-all text-green-500"
                aria-label="WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-12 mt-12 border-t border-white/5 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Quezia Reis Personal Trainer. Todos os direitos reservados.</p>
          <p className="mt-4">
            Criado por{' '}
            <a 
              href="https://meu-portfolio-25xr9d90s-santanayures-projects.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Yure Santana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};