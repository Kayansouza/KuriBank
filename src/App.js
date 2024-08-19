import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ServicesPage from './components/ServicePage';
import BenefitsPage from './components/BeneficiosPage';
import SupportPage from './components/SupportPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import InsurancePage from './components/InsurancePage';
import OpenAccountPage from './components/OpenAccountPage';
import ConsultantPage from './components/ConsultantPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/open-account" element={<OpenAccountPage />} />
        <Route path="/consultant" element={<ConsultantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
