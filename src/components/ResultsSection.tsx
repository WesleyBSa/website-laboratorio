import React from 'react';

const ResultsSection: React.FC = () => {
  return (
    <section id="resultados" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Resultados de Exames</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Login" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Senha"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors duration-300"
            >
              Acessar Resultados
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;