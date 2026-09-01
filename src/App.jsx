import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Process from './components/Process.jsx';
import Tech from './components/Tech.jsx';
import Promo from './components/Promo.jsx';
import LiveMonitor from './components/LiveMonitor.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Tech />
      <Promo />
      <LiveMonitor />
      <CtaFinal />
      <Footer />
    </>
  );
}