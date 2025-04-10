import React from 'react';

const LocationsSection: React.FC = () => {
  return (
    <section id="unidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Unidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unidade 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Unidade Centro" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Unidade Centro</h3>
              <p className="text-gray-600 mb-4">Rua Principal, 123 - Centro</p>
              <p className="mb-4">Segunda a Sexta: 7h às 19h<br />Sábado: 7h às 12h</p>
              <p className="text-blue-600 font-medium">Tel: (11) 1234-5678</p>
            </div>
          </div>
          
          {/* Unidade 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Unidade Norte" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Unidade Norte</h3>
              <p className="text-gray-600 mb-4">Av. Norte, 456 - Bairro Norte</p>
              <p className="mb-4">Segunda a Sexta: 7h às 19h<br />Sábado: 7h às 12h</p>
              <p className="text-blue-600 font-medium">Tel: (11) 2345-6789</p>
            </div>
          </div>
          
          {/* Unidade 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Unidade Sul" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Unidade Sul</h3>
              <p className="text-gray-600 mb-4">Av. Sul, 789 - Bairro Sul</p>
              <p className="mb-4">Segunda a Sexta: 7h às 19h<br />Sábado: 7h às 12h</p>
              <p className="text-blue-600 font-medium">Tel: (11) 3456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;