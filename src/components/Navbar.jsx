import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#top" className="nav-logo">
        <img src={logo} alt="FlowCAM" />
      </a>
      
      <ul 
        className="nav-links" 
        style={menuOpen ? {
          display: 'flex', flexDirection: 'column', position: 'fixed',
          top: '64px', left: '0', right: '0', background: 'rgba(255,255,255,.98)',
          boxShadow: '0 8px 24px -8px rgba(10,29,61,.25)', padding: '24px 32px', gap: '18px'
        } : {}}
      >
        <li><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a></li>
        <li><a href="#tecnologia" onClick={() => setMenuOpen(false)}>Tecnologia</a></li>
        <li><a href="#cobertura" onClick={() => setMenuOpen(false)}>Cobertura ao vivo</a></li>
        <li><a href="#vantagens" onClick={() => setMenuOpen(false)}>Vantagens</a></li>
      </ul>

      <div className="nav-right">
        <a href="#vantagens" className="btn btn-primary nav-cta">Falar com a FlowCAM</a>
        <button className="nav-toggle" aria-label="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}