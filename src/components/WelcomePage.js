// src/components/WelcomePage.js
import React, { useState } from 'react';

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

const WelcomePage = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 p-4 rounded-t-lg">
        <ul className="flex justify-around text-white">
          <li><a href="#services" className="hover:text-indigo-200">Serviços</a></li>
          <li><a href="#about" className="hover:text-indigo-200">Sobre Nós</a></li>
          <li><a href="#contact" className="hover:text-indigo-200">Contato</a></li>
        </ul>
      </nav>
      <div className="flex-grow flex">
        <aside className="w-1/4 bg-white p-4 shadow-md">
          <section id="services" className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Nossos Serviços</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                  onClick={() => setActiveService(service.title)}
                >
                  <h4 className="flex items-center text-lg font-bold mb-2">
                    <span className="mr-2">{service.icon}</span> {service.title}
                  </h4>
                  <p className="text-gray-700 mb-2">{service.description}</p>
                  <a href={service.link} className="text-indigo-600 hover:text-indigo-800">Saiba mais</a>
                  {activeService === service.title && (
                    <div className="mt-2 text-gray-600">
                      <p>Mais informações sobre {service.title}.</p>
                      <button onClick={() => setActiveService(null)} className="mt-2 text-red-600 hover:text-red-800">
                        Fechar
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>
        <main className="flex-grow p-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Bem-vindo ao nosso banco!</h2>
            <p className="mb-4">
              Obrigado por se cadastrar. Explore nosso site para conhecer mais sobre nossos serviços.
            </p>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
                Abrir Conta
              </button>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Solicitar Cartão
              </button>
            </div>
            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">O que nossos clientes dizem</h3>
              <blockquote className="italic text-gray-600">
                "Excelente atendimento e ótimas taxas de juros!"
              </blockquote>
              <p className="text-right">- Maria Silva</p>
            </section>
            <section id="contact" className="my-8">
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p>Telefone: (11) 1234-5678</p>
              <p>Email: suporte@seubanco.com</p>
              <p>Endereço: Rua Exemplo, 123, São Paulo - SP</p>
            </section>
            <div className="flex justify-center mt-8">
              <a href="#" className="mx-2 text-indigo-600 hover:text-indigo-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="mx-2 text-indigo-600 hover:text-indigo-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mx-2 text-indigo-600 hover:text-indigo-800"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
              <details className="mb-2">
                <summary className="font-semibold text-gray-800">Como faço para abrir uma conta?</summary>
                <p className="pl-4">
                  Você pode abrir uma conta diretamente em nosso site ou visitar uma de nossas agências.
                </p>
              </details>
              <details className="mb-2">
                <summary className="font-semibold text-gray-800">Quais são as taxas de juros para empréstimos?</summary>
                <p className="pl-4">
                  As taxas variam dependendo do tipo de empréstimo e do perfil do cliente. Entre em contato para mais
                  informações.
                </p>
              </details>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WelcomePage;
