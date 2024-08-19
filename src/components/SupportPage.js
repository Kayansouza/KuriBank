import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SupportPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const goToHomePage = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  const faqs = [
    { question: "Como posso entrar em contato com o suporte?", answer: "Você pode entrar em contato com o suporte através do chat no site ou pelo e-mail suporte@kuribank.com." },
    { question: "Quais são os horários de atendimento?", answer: "Nosso suporte está disponível 24 horas por dia, 7 dias por semana." },
    { question: "Como faço para atualizar minhas informações pessoais?", answer: "Você pode atualizar suas informações pessoais acessando a seção 'Minha Conta' no nosso site." },
    { question: "O que fazer se eu esquecer minha senha?", answer: "Se você esquecer sua senha, utilize a opção 'Esqueci minha senha' na página de login para redefini-la." }
  ];

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      <h1 className='text-3xl font-bold mb-6'>Central de Suporte</h1>
      
      {/* FAQ Section */}
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='bg-gray-800 shadow rounded-md p-4'>
            <div
              className='cursor-pointer font-semibold text-lg hover:text-blue-400'
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeFAQ === index && (
              <div className='mt-2 text-gray-300'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Contact Form Section */}
      <div className='bg-gray-800 shadow rounded-md p-6 mt-6'>
        <h2 className='text-2xl font-bold mb-4'>Formulário de Contato</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-300'>Nome:</label>
            <input type='text' className='w-full p-2 border border-gray-600 rounded bg-gray-900 text-white' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-300'>E-mail:</label>
            <input type='email' className='w-full p-2 border border-gray-600 rounded bg-gray-900 text-white' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-300'>Mensagem:</label>
            <textarea className='w-full p-2 border border-gray-600 rounded bg-gray-900 text-white' rows='4' required></textarea>
          </div>
          <button type='submit' className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'>
            Enviar
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className='bg-gray-800 shadow rounded-md p-6 mt-6'>
        <h2 className='text-2xl font-bold mb-4'>Informações de Contato</h2>
        <p className='text-gray-300'>Telefone: +55 11 1234-5678</p>
        <p className='text-gray-300'>E-mail: suporte@kuribank.com</p>
        <p className='text-gray-300'>Siga-nos nas redes sociais:</p>
        <ul className='flex space-x-4'>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Facebook</a></li>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Twitter</a></li>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Instagram</a></li>
        </ul>
      </div>

      {/* Documentation and Guides Section */}
      <div className='bg-gray-800 shadow rounded-md p-6 mt-6'>
        <h2 className='text-2xl font-bold mb-4'>Documentação e Guias</h2>
        <ul className='list-disc pl-5 text-gray-300'>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Guia do Usuário</a></li>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Perguntas Frequentes (FAQ)</a></li>
          <li><a href='#' className='text-blue-400 hover:text-blue-500'>Tutoriais de Vídeo</a></li>
        </ul>
      </div>

      {/* User Feedback Section */}
      <div className='bg-gray-800 shadow rounded-md p-6 mt-6'>
        <h2 className='text-2xl font-bold mb-4'>Deixe seu Feedback</h2>
        <textarea className='w-full p-2 border border-gray-600 rounded bg-gray-900 text-white' rows='4' placeholder='Sua opinião é importante para nós'></textarea>
        <button className='bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700'>
          Enviar Feedback
        </button>
      </div>

      {/* Live Chat Button */}
      <div className='bg-gray-800 shadow rounded-md p-6 mt-6 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Chat ao Vivo</h2>
        <p className='text-gray-300'>Estamos aqui para ajudar! Clique no botão abaixo para iniciar uma conversa com um representante do suporte.</p>
        <button className='bg-blue-600 text-white p-2 rounded mt-2 hover:bg-blue-700'>
          Iniciar Chat
        </button>
      </div>

      {/* Back to Home Button */}
      <div className='mt-6 text-center'>
        <button
          className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
          onClick={goToHomePage}
        >
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
}

export default SupportPage;
