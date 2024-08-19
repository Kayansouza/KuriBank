import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';  // Corrigido: Removido o `.js`
import Footer from './Footer';
import PersonalPage from './PersonalPage';
import Support from './Support';
import Chatbot from './Chatbot';
import InsurancePage from './InsurancePage';  // Corrigido: Removido o `.js`



const WelcomePage = () => {
  const [showServices, setShowServices] = useState(true);
  const [showBenefits, setShowBenefits] = useState(true);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // Inicialmente ocultar o chatbot

  const toggleServices = () => setShowServices(!showServices);
  const toggleBenefits = () => setShowBenefits(!showBenefits);
  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-black text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">KuriBank - Feito para você</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <Link to="/open-account" className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm md:text-base">Abrir Conta</Link>
            <Link to="#consultant" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 mt-2 md:mt-0 text-sm md:text-base">Falar com Consultor</Link>
            <Link to="/support" className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700 mt-2 md:mt-0 text-sm md:text-base">Suporte</Link>
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row">
        <aside className="bg-gray-900 text-white p-4 md:w-1/4 shadow-md">
          <section id="services" className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 cursor-pointer" onClick={toggleServices}>
              Serviços
            </h3>
            {showServices ? (
              <div className="space-y-3 bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-lg shadow-lg">
                <div className="service-card bg-gray-900 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <i className="fa-solid fa-building-columns text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold">Contas Correntes</h4>
                  <p className="text-sm">Gerencie suas contas correntes de forma fácil e rápida.</p>
                </div>
                <div className="service-card bg-gray-900 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <i className="fa-solid fa-credit-card text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold">Cartões de Créditos e Débitos</h4>
                  <p className="text-sm">Aproveite os benefícios dos nossos cartões de crédito e débito.</p>
                </div>
                <div className="service-card bg-gray-900 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <i className="fa-solid fa-dollar-sign text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold">Empréstimos Pessoais</h4>
                  <p className="text-sm">Condições especiais para o seu empréstimo pessoal.</p>
                </div>
                <div className="service-card bg-gray-900 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <i className="fa-solid fa-chart-line text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold">Investimentos</h4>
                  <p className="text-sm">Diversifique seus investimentos com a KuriBank.</p>
                </div>
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
                {/* Benefícios */}
              </div>
            ) : (
              <p className="text-gray-400">Benefícios ocultos.</p>
            )}
          </section>
        </aside>

        <main className="flex-grow p-6 md:p-8">
          <section className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-lg mb-8">
            {/* Seção com celular e textos */}
          </section>
          <PersonalPage />
        </main>
      </div>

      <Footer className="bg-gray-800 text-white py-4 mt-auto" />

      {isChatbotVisible && <Chatbot toggleChatbot={toggleChatbot} />}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <i className="fa-solid fa-comments text-xl"></i>
      </button>
    </div>
  );
};

export default WelcomePage;
