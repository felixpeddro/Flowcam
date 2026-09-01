import Reveal from './Reveal';
import fundoVideo from '../assets/fundo.mp4';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={fundoVideo} type="video/mp4" />
      </video>
      <div className="hero-inner">
        <Reveal className="hero-copy">
          <span className="kicker pill"><span className="dot" />VIGILÂNCIA URBANA COMO SERVIÇO</span>
          <h1>Seu negócio sob um <span>olhar constante</span>, sem instalar uma câmera sequer.</h1>
          <p className="lead">A FlowCAM instala, mantém e transmite. Você assina o acesso às câmeras do seu perímetro — com leitura de placas, detecção de movimento e gravação em nuvem — sem arcar sozinho com a infraestrutura.</p>
          <div className="hero-actions">
            <a href="#vantagens" className="btn btn-primary">Quero proteger meu negócio</a>
            <a href="#cobertura" className="btn btn-ghost">Ver cobertura ao vivo</a>
          </div>
          <div className="hero-microcopy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5-4 8-8.5 8-13a8 8 0 1 0-16 0c0 4.5 3 9 8 13z" /><circle cx="12" cy="9" r="2.5" /></svg>
            Instalação, manutenção e monitoramento inclusos — sem obra, sem equipamento próprio.
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="cam-stage">
            <div className="stage-grid" />
            <div className="corner tl" /><div className="corner tr" /><div className="corner bl" /><div className="corner br" />
            <span className="cam-badge online"><span className="b-dot" />ONLINE</span>
            <span className="cam-badge ia">IA ATIVA</span>
            <span className="cam-badge status">CAM-014 · CRUZAMENTO CENTRAL</span>

            <svg className="cam-svg" viewBox="0 0 400 320">
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#0F274F" />
                  <stop offset="100%" stopColor="#081633" />
                </radialGradient>
                <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0C1F3F" />
                  <stop offset="100%" stopColor="#091A33" />
                </linearGradient>
              </defs>
              <rect width="400" height="320" fill="url(#bgGrad)" />

              <g stroke="#33A8FF" fill="none" opacity="0.35">
                <circle cx="200" cy="160" r="40" />
                <circle cx="200" cy="160" r="80" />
                <circle cx="200" cy="160" r="120" />
              </g>
              <circle className="radar-ring" cx="200" cy="160" r="40" stroke="#16C6B6" fill="none" />
              <circle className="radar-ring" cx="200" cy="160" r="40" stroke="#16C6B6" fill="none" style={{ animationDelay: '1.1s' }} />
              <circle className="radar-ring" cx="200" cy="160" r="40" stroke="#16C6B6" fill="none" style={{ animationDelay: '2.2s' }} />

              <g fill="#0A1D3D" stroke="rgba(230,243,255,.06)">
                <rect x="12" y="12" width="150" height="100" />
                <rect x="238" y="12" width="150" height="100" />
                <rect x="12" y="208" width="150" height="100" />
                <rect x="238" y="208" width="150" height="100" />
              </g>

              <rect x="0" y="130" width="400" height="60" fill="url(#roadGrad)" />
              <rect x="170" y="0" width="60" height="320" fill="url(#roadGrad)" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(230,243,255,.35)" strokeWidth="2" strokeDasharray="10 8" />
              <line x1="200" y1="0" x2="200" y2="320" stroke="rgba(230,243,255,.35)" strokeWidth="2" strokeDasharray="10 8" />

              <g fill="rgba(230,243,255,.28)">
                <rect x="176" y="134" width="6" height="16" /><rect x="188" y="134" width="6" height="16" />
                <rect x="206" y="134" width="6" height="16" /><rect x="218" y="134" width="6" height="16" />
                <rect x="176" y="170" width="6" height="16" /><rect x="188" y="170" width="6" height="16" />
                <rect x="206" y="170" width="6" height="16" /><rect x="218" y="170" width="6" height="16" />
              </g>

              <g transform="translate(150,160)">
                <g className="ped-dot">
                  <circle r="10" fill="none" stroke="#33A8FF" strokeWidth="1.2" strokeDasharray="2.5 2.5" />
                  <circle r="3.2" fill="#33A8FF" />
                </g>
              </g>

              <g transform="translate(200,160)">
                <g className="tracked-car">
                  <rect className="track-box" x="-19" y="-13" width="38" height="26" rx="3" fill="none" stroke="#16C6B6" strokeWidth="1.4" strokeDasharray="4 3" />
                  <line x="-19" y1="-13" x2="-13" y2="-13" stroke="#16C6B6" strokeWidth="2" />
                  <path d="M-19,-7 L-19,-13 L-13,-13" fill="none" stroke="#16C6B6" strokeWidth="2" />
                  <path d="M19,-13 L13,-13" fill="none" />
                  <path d="M13,-13 L19,-13 L19,-7" fill="none" stroke="#16C6B6" strokeWidth="2" />
                  <path d="M-19,7 L-19,13 L-13,13" fill="none" stroke="#16C6B6" strokeWidth="2" />
                  <path d="M19,7 L19,13 L13,13" fill="none" stroke="#16C6B6" strokeWidth="2" />
                  <rect x="-11" y="-5" width="22" height="10" rx="3" fill="#33A8FF" />
                  <text className="track-label" x="0" y="-18" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#16C6B6">VEÍCULO · 98%</text>
                </g>
              </g>

              <line x1="368" y1="320" x2="368" y2="230" stroke="#33A8FF" strokeWidth="3" />
              <circle cx="368" cy="228" r="5" fill="#16C6B6" />
              <rect x="352" y="212" width="32" height="16" rx="4" fill="#0F274F" stroke="#33A8FF" strokeWidth="1.4" />
            </svg>

            <div className="hud-panel">
              <div className="hud-row"><span>OBJ. DETECT.</span><b>1</b></div>
              <div className="hud-row"><span>CONFIANÇA</span><b>98.2%</b></div>
              <div className="hud-row"><span>REDE</span><b>ESTÁVEL</b></div>
              <div class="hud-row"><span>STATUS</span><span><span className="hud-cursor" /></span></div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}