import React from 'react';
import { Menu, X, Wine } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Wine className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-serif text-white">Vineyard Estate</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Wines', 'Visit', 'About', 'Shop', 'Join'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
            {['Wines', 'Visit', 'About', 'Shop', 'Join'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-white hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;