import { Link } from 'react-router-dom';
import React, { useState } from "react";
//import logo from '../assets/images/Boutique-logo.png'; // Atualize o caminho conforme necessário

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            <div className="logo">
               
            </div>

            <nav className="relative">
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li className="relative">
                        <button onClick={toggleDropdown} className="flex items-center">
                            Categorias
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
                                <li><Link to="/category1" className="block px-4 py-2 hover:bg-gray-100">Categoria 1</Link></li>
                                <li><Link to="/category2" className="block px-4 py-2 hover:bg-gray-100">Categoria 2</Link></li>
                                <li><Link to="/category3" className="block px-4 py-2 hover:bg-gray-100">Categoria 3</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>

            <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Seu código existente... */}
      <div className="flex items-center space-x-4 p-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="p-2 border border-gray-300 rounded-md"
        />
        <Link to="/login" className="text-blue-500">Iniciar Sessão</Link>
        <Link to="/cart" className="text-blue-500">Carrinho</Link>
        <Link to="/favorites" className="text-blue-500">Favoritos</Link>
      </div>
      {/* Resto do seu componente... */}
    </div>
        </header>
    );
}

export default Header;
