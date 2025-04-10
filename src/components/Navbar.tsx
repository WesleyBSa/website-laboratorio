import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Função para lidar com scroll e fixar a navbar
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 0) {
          navbarRef.current.classList.add('bg-white', 'shadow-md');
        } else {
          navbarRef.current.classList.remove('bg-white', 'shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      ref={navbarRef}
      className="fixed w-full py-4 transition-all duration-300 z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Clínica Saúde</a>
        </div>
        
        {/* Menu para desktop */}
        <div className="hidden md:flex items-center">
          <ul className="flex">
            <NavLink href="#sobre" title="Sobre nós" onClick={closeMenu} />
            <NavLink href="#convenios" title="Convênios" onClick={closeMenu} />
            <NavLink href="#unidades" title="Unidades" onClick={closeMenu} />
            <NavLink href="#contato" title="Contato" onClick={closeMenu} />
          </ul>
          <a 
            href="#resultados" 
            className="ml-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#resultados')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Resultados
          </a>
        </div>
        
        {/* Botão de menu para mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <ul className="flex flex-col">
            <NavLink href="#sobre" title="Sobre nós" onClick={closeMenu} />
            <NavLink href="#convenios" title="Convênios" onClick={closeMenu} />
            <NavLink href="#unidades" title="Unidades" onClick={closeMenu} />
            <NavLink href="#contato" title="Contato" onClick={closeMenu} />
            <li className="my-2">
              <a 
                href="#resultados" 
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#resultados')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                  closeMenu();
                }}
              >
                Resultados
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;