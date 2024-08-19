import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">KuriBank</div>
        <div className="space-x-4">
          <Link to="/open-account" className="text-white hover:text-gray-400">Abrir Conta</Link>
          <Link to="/consultant" className="text-white hover:text-gray-400">Falar com Consultor</Link>
          <Link to="/support" className="text-white hover:text-gray-400">Suporte</Link>
          <Link to="/seguros" className="text-white hover:text-gray-400">Seguros</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
