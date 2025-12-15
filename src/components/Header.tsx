import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'O MÉTODO', href: '#about' },
  { label: 'MENTORA', href: '#about' },
  { label: 'RESULTADOS', href: '#testimonials' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="relative z-40 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold text-pink-500 tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          QUEZIA REIS
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => handleScrollTo('#plans')}
            className="bg-linear-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 cursor-pointer"
          >
            Quero ser Aluna
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/98 backdrop-blur-sm border-b border-white/5 md:hidden">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium tracking-wide py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleScrollTo('#plans')}
                className="bg-linear-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 w-full mt-2 cursor-pointer"
              >
                Quero ser Aluna
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
