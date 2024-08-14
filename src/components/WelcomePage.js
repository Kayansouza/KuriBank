import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'; // Importando o componente NavBar
import Footer from './Footer'; // Importando o componente Footer
import PersonalPage from './PersonalPage'; // Importando o componente PersonalPage

const services = [
  // Seu array de serviços
];

const benefits = [
  // Seu array de benefícios
];

const WelcomePage = () => {
  const [activeService, setActiveService] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const toggleBenefits = () => {
    setShowBenefits(!showBenefits);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">KuriBank - Feito para você</h1>
          </div>
          <div className="flex space-x-4">
            <Link to="/open-account" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Abrir Conta</Link>
            <Link to="#consultant" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Falar com Consultor</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex">
        <aside className="w-1/4 bg-gray-900 text-white p-4 shadow-md">
          <section id="services" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 cursor-pointer" onClick={toggleServices}>
              Serviços
            </h3>
            {showServices && (
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => setActiveService(service.title)}
                  >
                    <h4 className="flex items-center text-lg font-bold mb-2">
                      <span className="mr-2">{service.icon}</span> {service.title}
                    </h4>
                    <p className="text-gray-400 mb-2">{service.description}</p>
                    <a href={service.link} className="text-indigo-400 hover:text-indigo-600">Saiba mais</a>
                    {activeService === service.title && (
                      <div className="mt-2 text-gray-300">
                        <p>Mais informações sobre {service.title}.</p>
                        <button onClick={() => setActiveService(null)} className="mt-2 text-red-400 hover:text-red-600">
                          Fechar
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
          <section id="benefits" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 cursor-pointer" onClick={toggleBenefits}>
              Benefícios
            </h3>
            {showBenefits && (
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </aside>
        <main className="flex-grow p-8">
          <PersonalPage /> {/* Exibindo o componente PersonalPage */}
        </main>
      </div>

      {/* Footer */}
      <Footer className="bg-gray-800 text-white py-4 mt-auto" />
    </div>
  );
};

export default WelcomePage;
