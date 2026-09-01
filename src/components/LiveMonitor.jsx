import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const cams = [
  'CAM-002 · ZONA CENTRAL', 'CAM-009 · SETOR INDUSTRIAL', 
  'CAM-014 · QUADRA 12', 'CAM-021 · ZONA COMERCIAL'
];

export default function LiveMonitor() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const pad = (n) => n.toString().padStart(2, '0');
    const tick = () => {
      const d = new Date();
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="live-section" id="cobertura">
      <div className="container">
        <Reveal className="section-head" style={{ maxWidth: '620px' }}>
          <span className="kicker"><span className="dot" />COBERTURA AO VIVO</span>
          <h2>Veja o que sua assinatura enxerga.</h2>
          <p>Um recorte da rede FlowCAM em funcionamento agora — cada assinante acessa apenas o seu próprio perímetro.</p>
        </Reveal>

        <div className="live-layout">
          <Reveal className="live-grid">
            {cams.map((cam, i) => (
              <div key={i} className="live-tile">
                <div className="rec-badge"><span className="rec-dot" />REC</div>
                <div className="live-tag">AO VIVO</div>
                <div className="scanline" />
                <div className="timestamp">{time}</div>
                <div className="street-tag">{cam}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="map-card">
            <h4>Densidade da rede</h4>
            <p>Pontos ativos por região nas últimas 24h</p>
            <svg className="map-svg" viewBox="0 0 260 220" fill="none">
                <rect width="260" height="220" rx="12" fill="#081633" />
                <g stroke="rgba(230,243,255,.08)" strokeWidth="1">
                    <line x1="0" y1="55" x2="260" y2="55" /><line x1="0" y1="110" x2="260" y2="110" /><line x1="0" y1="165" x2="260" y2="165" />
                    <line x1="65" y1="0" x2="65" y2="220" /><line x1="130" y1="0" x2="130" y2="220" /><line x1="195" y1="0" x2="195" y2="220" />
                </g>
                <g>
                    <circle cx="60" cy="60" r="4" fill="#16C6B6"><animate attributeName="r" values="4;7;4" dur="2.6s" repeatCount="indefinite" /></circle>
                    <circle cx="130" cy="90" r="5" fill="#33A8FF"><animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="185" cy="60" r="4" fill="#16C6B6"><animate attributeName="r" values="4;7;4" dur="2.2s" repeatCount="indefinite" /></circle>
                    <circle cx="90" cy="150" r="4" fill="#33A8FF"><animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="150" r="6" fill="#16C6B6"><animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" /></circle>
                    <circle cx="150" cy="180" r="4" fill="#33A8FF"><animate attributeName="r" values="4;7;4" dur="3.2s" repeatCount="indefinite" /></circle>
                    <line x1="60" y1="60" x2="130" y2="90" stroke="rgba(51,168,255,.35)" strokeWidth="1" />
                    <line x1="130" y1="90" x2="185" y2="60" stroke="rgba(51,168,255,.35)" strokeWidth="1" />
                    <line x1="130" y1="90" x2="90" y2="150" stroke="rgba(51,168,255,.35)" strokeWidth="1" />
                    <line x1="90" y1="150" x2="200" y2="150" stroke="rgba(51,168,255,.35)" strokeWidth="1" />
                    <line x1="200" y1="150" x2="150" y2="180" stroke="rgba(51,168,255,.35)" strokeWidth="1" />
                </g>
            </svg>
            <div className="map-legend">
              <div><span className="legend-dot" style={{ background: '#16C6B6' }} />Alta densidade de câmeras</div>
              <div><span className="legend-dot" style={{ background: '#33A8FF' }} />Expansão em andamento</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}