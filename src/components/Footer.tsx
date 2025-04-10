import React from 'react';
import { Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Nos acompanhe em nossas redes sociais</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Instagram size={28} />
            </a>
            <a href="https://wa.me/5511123456789" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
              <MessageSquare size={28} />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Clínica Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;