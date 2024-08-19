// src/components/PersonalPage.js
import React, { useState } from 'react';

const services = [
  {
    title: "Contas Correntes",
    description: "Gerencie seu dinheiro com facilidade e segurança.",
    details: "Detalhes completos sobre Contas Correntes: como abrir, benefícios, taxas e muito mais.",
  },
  {
    title: "Cartões de Crédito e Débito",
    description: "Cartões com ótimos benefícios e taxas.",
    details: "Detalhes completos sobre Cartões de Crédito e Débito: tipos de cartões, benefícios e como solicitar.",
  },
  {
    title: "Empréstimos Pessoais",
    description: "Empréstimos rápidos e com as melhores taxas.",
    details: "Detalhes completos sobre Empréstimos Pessoais: requisitos, taxas de juros e como solicitar.",
  },
  {
    title: "Investimentos",
    description: "Faça seu dinheiro crescer com segurança.",
    details: "Detalhes completos sobre Investimentos: opções disponíveis, retornos esperados e como começar a investir.",
  },
];

const PersonalPage = () => {
  const [activeService, setActiveService] = useState(services[0].title);

  const handleTabClick = (title) => {
    setActiveService(title);
  };

  const activeServiceDetails = services.find(service => service.title === activeService);

  return (
    <div>
           {/* Main Content */}
      <main className="py-12">
      <h2 className="text-3xl font-bold mb-6"> "Unidos por mais de 30.000.000 de clientes, KuriBank transforma sua vida financeira com transparência, simplicidade e inovação. Descubra o melhor do banco, no Brasil e no mundo, e faça parte da escolha que define um novo padrão de excelência!"

</h2>
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          

          {/* Services Section */}
          <section id="services" className="mb-12">
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex border-b">
                {services.map(service => (
                  <button
                    key={service.title}
                    onClick={() => handleTabClick(service.title)}
                    className={`px-6 py-3 flex-1 text-lg font-semibold ${activeService === service.title ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'} transition duration-300`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeServiceDetails.title}</h3>
                <p className="text-gray-700 mb-4">{activeServiceDetails.description}</p>
                <p>{activeServiceDetails.details}</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="bg-gray-200 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Benefícios Exclusivos</h2>
            <p className="text-gray-700 mb-6">
            
            </p>
            {/* Add more benefits as needed */}
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contato</h2>
            <p className="text-gray-700 mb-4">Telefone: (11) 1234-5678</p>
            <p className="text-gray-700 mb-4">Email: suporte@kuribank.com</p>
            <p className="text-gray-700">Endereço: Rua Exemplo, 123, São Paulo - SP</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 KuriBank - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalPage;
