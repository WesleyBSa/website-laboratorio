import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/api/placeholder/600/400" alt="Equipe médica" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-4">
              A Clínica Saúde nasceu com o objetivo de oferecer atendimento médico de alta qualidade, combinando tecnologia de ponta e profissionais altamente qualificados.
            </p>
            <p className="text-lg mb-4">
              Com mais de 15 anos de experiência, nos tornamos referência em cuidados médicos, priorizando sempre o bem-estar e a saúde de nossos pacientes.
            </p>
            <p className="text-lg">
              Nossa missão é proporcionar um atendimento humanizado, com ética e respeito, garantindo a melhor experiência possível para cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;