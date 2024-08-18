import React, { useState } from 'react';
import { BriefcaseIcon, ChartBarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

function ContaCorrentePage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">Conta Corrente</h1>
        <p className="mt-4 text-lg text-gray-700">
          A conta que combina com você, oferecendo praticidade e benefícios exclusivos.
        </p>
      </header>

      {/* Section 1: Features */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Praticidade no Dia a Dia</h2>
        <p className="text-gray-700 mb-4">
          Com a conta corrente do KuriBank, você tem acesso a um mundo de facilidades e segurança. Acompanhe suas transações, faça pagamentos e muito mais com nosso aplicativo intuitivo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <BriefcaseIcon className="h-8 w-8 text-blue-700 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Transações Rápidas</h3>
              <p className="text-gray-600">
                Realize transações instantâneas com segurança e praticidade diretamente pelo aplicativo.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <ChartBarIcon className="h-8 w-8 text-blue-700 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Gestão Inteligente</h3>
              <p className="text-gray-600">
                Acompanhe suas despesas e receitas de forma fácil e eficiente com relatórios detalhados.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <ChatBubbleLeftIcon className="h-8 w-8 text-blue-700 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">
                Nossa equipe está disponível a qualquer momento para ajudar com suas dúvidas e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Benefícios Exclusivos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <BriefcaseIcon className="h-12 w-12 text-blue-700 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Ofertas Especiais</h3>
            <p className="text-gray-700">Aproveite promoções e ofertas exclusivas para nossos clientes.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <ChartBarIcon className="h-12 w-12 text-blue-700 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Cartões Sem Anuidade</h3>
            <p className="text-gray-700">Receba cartões de crédito sem taxa de anuidade.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <ChatBubbleLeftIcon className="h-12 w-12 text-blue-700 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Segurança Avançada</h3>
            <p className="text-gray-700">Proteção reforçada para suas transações e dados pessoais.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <BriefcaseIcon className="h-12 w-12 text-blue-700 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Acesso Global</h3>
            <p className="text-gray-700">Acesso aos serviços bancários em qualquer lugar do mundo.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Opening Account */}
      <section className="bg-blue-900 text-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Abra sua Conta Agora</h2>
        <p className="mb-6">
          Comece a aproveitar todos os benefícios da conta corrente do KuriBank. Rápido, fácil e totalmente online.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Documentos Simples</h3>
            <p className="text-gray-700">Envie seus documentos com facilidade e segurança.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Abertura Online</h3>
            <p className="text-gray-700">Faça tudo sem sair de casa, sem complicações.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Acesso Imediato</h3>
            <p className="text-gray-700">Sua conta estará ativa e disponível imediatamente.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Sem Burocracia</h3>
            <p className="text-gray-700">Sem taxas e sem processos complicados.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Acompanhamento Personalizado</h3>
            <p className="text-gray-700">Receba suporte dedicado ao longo do processo.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Ofertas Exclusivas</h3>
            <p className="text-gray-700">Benefícios e ofertas especiais só para você.</p>
          </div>
          {/* Card 7 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Proteção Total</h3>
            <p className="text-gray-700">Proteção total para suas transações e dados.</p>
          </div>
          {/* Card 8 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Facilidade de Uso</h3>
            <p className="text-gray-700">Interface amigável e fácil de usar.</p>
          </div>
        </div>
        <a href="#open-account-form" className="mt-6 inline-block bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400">Abrir Conta</a>
      </section>

      {/* Section 4: FAQ */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border-b border-gray-300 pb-4">
            <h3 
              className="text-lg font-semibold text-blue-900 cursor-pointer"
              onClick={() => toggleFAQ(1)}
            >
              Como posso abrir uma conta?
            </h3>
            {activeFAQ === 1 && (
              <p className="text-gray-700 mt-2">
                Você pode abrir uma conta através do nosso site. Basta clicar em "Abrir Conta" e seguir as instruções para completar o processo online.
              </p>
            )}
          </div>
          {/* FAQ Item 2 */}
          <div className="border-b border-gray-300 pb-4">
            <h3 
              className="text-lg font-semibold text-blue-900 cursor-pointer"
              onClick={() => toggleFAQ(2)}
            >
              Quais documentos são necessários?
            </h3>
            {activeFAQ === 2 && (
              <p className="text-gray-700 mt-2">
                Para abrir uma conta, você precisará de um documento de identidade válido e um comprovante de residência.
              </p>
            )}
          </div>
          {/* FAQ Item 3 */}
          <div className="border-b border-gray-300 pb-4">
            <h3 
              className="text-lg font-semibold text-blue-900 cursor-pointer"
              onClick={() => toggleFAQ(3)}
            >
              Como posso entrar em contato com o suporte?
            </h3>
            {activeFAQ === 3 && (
              <p className="text-gray-700 mt-2">
                Nosso suporte está disponível 24/7. Você pode entrar em contato pelo chat ao vivo no nosso site ou por e-mail.
              </p>
            )}
          </div>
          {/* FAQ Item 4 */}
          <div className="border-b border-gray-300 pb-4">
            <h3 
              className="text-lg font-semibold text-blue-900 cursor-pointer"
              onClick={() => toggleFAQ(4)}
            >
              Quais são as taxas associadas à conta corrente?
            </h3>
            {activeFAQ === 4 && (
              <p className="text-gray-700 mt-2">
                A conta corrente do KuriBank não possui taxas de manutenção. No entanto, podem existir taxas para serviços adicionais.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContaCorrentePage;
