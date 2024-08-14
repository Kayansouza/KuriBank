import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <Link to="/cadastro">Cadastre-se</Link> {/* Link para a página de cadastro */}
      {/* Outros conteúdos */}
    </div>
  );
}

export default WelcomePage;
