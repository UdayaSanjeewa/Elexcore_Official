import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProductTrading from './pages/ProductTrading';
import Contact from './pages/Contact';
import ElectricalSolutions from './pages/services/ElectricalSolutions';
import AutomobileServices from './pages/services/AutomobileServices';
import EVBattery from './pages/services/EVBattery';
import SolarPower from './pages/services/SolarPower';
import PowerBackup from './pages/services/PowerBackup';
import SmartHome from './pages/services/SmartHome';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
        <Header />
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/about" element={<><ScrollToTop /><About /></>} />
          <Route path="/services" element={<><ScrollToTop /><Services /></>} />
          <Route path="/services/electrical-solutions" element={<><ScrollToTop /><ElectricalSolutions /></>} />
          <Route path="/services/automobile-services" element={<><ScrollToTop /><AutomobileServices /></>} />
          <Route path="/services/ev-battery" element={<><ScrollToTop /><EVBattery /></>} />
          <Route path="/services/solar-power" element={<><ScrollToTop /><SolarPower /></>} />
          <Route path="/services/power-backup" element={<><ScrollToTop /><PowerBackup /></>} />
          <Route path="/services/smart-home" element={<><ScrollToTop /><SmartHome /></>} />
          <Route path="/projects" element={<><ScrollToTop /><Projects /></>} />
          <Route path="/product-trading" element={<><ScrollToTop /><ProductTrading /></>} />
          <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
