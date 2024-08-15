import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import PersonalPage from './PersonalPage';

const services = [
  {
    title: "Contas Correntes e Poupança",
    description: "Gerencie seu dinheiro com facilidade e segurança.",
    icon: "💰",
    link: "/contas",
  },
  {
    title: "Cartões de Crédito e Débito",
    description: "Cartões com ótimos benefícios e taxas.",
    icon: "💳",
    link: "/cartoes",
  },
  {
    title: "Empréstimos Pessoais",
    description: "Empréstimos rápidos e com as melhores taxas.",
    icon: "💸",
    link: "/emprestimos",
  },
  {
    title: "Investimentos",
    description: "Faça seu dinheiro crescer com segurança.",
    icon: "📈",
    link: "/investimentos",
  },
];

const benefits = [
  {
    title: "Atendimento 24h",
    description: "Suporte completo a qualquer hora do dia.",
    icon: "🕒",
    link: "/atendimento",
  },
  {
    title: "Segurança Garantida",
    description: "Nossas medidas de segurança mantêm seus dados protegidos.",
    icon: "🔒",
    link: "/seguranca",
  },
  // Adicione mais benefícios aqui se necessário
];

const WelcomePage = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeBenefit, setActiveBenefit] = useState(null);
  const [showServices, setShowServices] = useState(true);
  const [showBenefits, setShowBenefits] = useState(true);

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
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">KuriBank - Feito para você</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <Link to="/open-account" className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm md:text-base">Abrir Conta</Link>
            <Link to="#consultant" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 mt-2 md:mt-0 text-sm md:text-base">Falar com Consultor</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white p-4 md:w-1/4 shadow-md">
          <section id="services" className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 cursor-pointer" onClick={toggleServices}>
              Serviços
            </h3>
            {showServices ? (
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-3 rounded-md shadow transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => setActiveService(service.title)}
                  >
                    <h4 className="flex items-center text-md md:text-lg font-semibold mb-1">
                      <span className="mr-1 text-xl">{service.icon}</span> {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base mb-1">{service.description}</p>
                    <Link to={service.link} className="text-indigo-400 hover:text-indigo-600 text-sm md:text-base">Saiba mais</Link>
                    {activeService === service.title && (
                      <div className="mt-2 text-gray-300 text-sm md:text-base">
                        <p>Mais informações sobre {service.title}.</p>
                        <button onClick={() => setActiveService(null)} className="mt-2 text-red-400 hover:text-red-600">
                          Fechar
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">Serviços ocultos.</p>
            )}
          </section>
          <section id="benefits" className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 cursor-pointer" onClick={toggleBenefits}>
              Benefícios
            </h3>
            {showBenefits ? (
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-3 rounded-md shadow transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => setActiveBenefit(benefit.title)}
                  >
                    <h4 className="flex items-center text-md md:text-lg font-semibold mb-1">
                      <span className="mr-1 text-xl">{benefit.icon}</span> {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base mb-1">{benefit.description}</p>
                    <Link to={benefit.link} className="text-indigo-400 hover:text-indigo-600 text-sm md:text-base">Saiba mais</Link>
                    {activeBenefit === benefit.title && (
                      <div className="mt-2 text-gray-300 text-sm md:text-base">
                        <p>Mais informações sobre {benefit.title}.</p>
                        <button onClick={() => setActiveBenefit(null)} className="mt-2 text-red-400 hover:text-red-600">
                          Fechar
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">Benefícios ocultos.</p>
            )}
          </section>
        </aside>
        
        {/* Main Content */}
        <main className="flex-grow p-6 md:p-8">
          {/* Nova seção com celular e textos */}
          <section className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-lg mb-8">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <img src="url-da-imagem-do-celular.png" alt="Celular" className="w-full rounded" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Conheça o App do KuriBank</h2>
              <p className="text-gray-700 mb-4">Gerencie suas finanças com facilidade, segurança e agilidade com o nosso aplicativo móvel. Baixe agora e tenha acesso a todos os serviços do banco na palma da sua mão.</p>
              <Link to="/open-account" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Abrir minha conta</Link>
            </div>
          </section>

          <PersonalPage />
        </main>
      </div>

      {/* Footer */}
      <Footer className="bg-gray-800 text-white py-4 mt-auto" />
    </div>
  );
};

export default WelcomePage;
