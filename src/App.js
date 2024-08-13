// src/App.js ou onde suas rotas são definidas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SavingsAndChecking from './components/SavingsAndChecking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/contas" element={<SavingsAndChecking />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;
