import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const InsuranceSection: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20consultar%20os%20convênios%20disponíveis.";

  return (
    <section id="convenios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Convênios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
            <img src="/api/placeholder/150/80" alt="Convênio 1" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
            <img src="/api/placeholder/150/80" alt="Convênio 2" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
            <img src="/api/placeholder/150/80" alt="Convênio 3" />
          </div>
          <div className="flex items-center justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="rounded-full bg-green-500 text-white p-3 shadow-md">
                {(FaWhatsapp as unknown as React.FC<{ size?: number }>)({
                  size: 32,
                })}
              </div>

              <span className="mt-2 text-sm font-semibold">
                Consultar outros convênios
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
