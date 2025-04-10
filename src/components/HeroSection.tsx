import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Clínica Saúde</h1>
        <p className="text-xl md:text-2xl mb-8">Cuidando de você e sua família com excelência</p>
        <a 
          href="#resultados" 
          className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-medium transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#resultados')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          Acessar Resultados
        </a>
      </div>
    </section>
  );
};

export default HeroSection;