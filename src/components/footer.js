// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">KuriBank - Feito para você</h2>
        <p className="mb-4">© 2024 KuriBank. Todos os direitos reservados.</p>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-400">Política de Privacidade</a></li>
          <li><a href="#" className="hover:text-gray-400">Termos de Serviço</a></li>
          <li><a href="#" className="hover:text-gray-400">Suporte</a></li>
          <li><a href="#" className="hover:text-gray-400">Seguros</a></li>
        </ul>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
