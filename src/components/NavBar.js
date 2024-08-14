// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-white">KuriBank - Feito para você</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="#services" className="text-white hover:text-gray-300 transition duration-300">Serviços</Link>
          <Link to="#about" className="text-white hover:text-gray-300 transition duration-300">Sobre Nós</Link>
          <Link to="#contact" className="text-white hover:text-gray-300 transition duration-300">Contato</Link>
        </div>
        <div className="flex space-x-4">
          <a href="/webbanking" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">Acessar Web Banking</a>
          <a href="/open-account" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">Abrir Minha Conta</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
