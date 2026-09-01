import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import imgFase1 from '../assets/pexels-victor-imesi-3553063-5322002.jpg';
import imgFase2 from '../assets/pexels-caleboquendo-39071423.jpg';
import imgFase3 from '../assets/pexels-pavel-danilyuk-8112186.jpg';

const stepsData = [
  {
    tag: 'Fase 01 · Infraestrutura', title: 'Instalamos os pontos estratégicos do seu perímetro.',
    p: 'Câmeras, nobreaks e conexão de internet dedicada são instalados nos pontos de maior fluxo do seu bairro ou polo industrial — sem custo de obra para o comerciante.',
    img: imgFase1,
    icon: <><path d="M12 22V10M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M6 22h12" /></>,
    items: ['Câmeras em pontos de alto fluxo', 'Nobreak com redundância de energia', 'Conexão de internet própria e estável']
  },
  {
    tag: 'Fase 02 · Tecnologia', title: 'As imagens sobem para uma plataforma centralizada.',
    p: 'Tudo é transmitido em tempo real para a nuvem FlowCAM, com controle de acesso por login, gravações retroativas e inteligência artificial embarcada.',
    img: imgFase2,
    icon: <path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.5 8 4.5 4.5 0 0 1 17 17" />,
    items: ['Leitura automática de placas (LPR)', 'Detecção inteligente de movimento', 'Gravação em nuvem por tempo determinado']
  },
  {
    tag: 'Fase 03 · Comercialização', title: 'Empresas assinam o acesso ao perímetro de interesse.',
    p: 'Comércios e indústrias pagam uma mensalidade para acessar as câmeras do seu perímetro — garantindo vigilância patrimonial sem arcar com toda a infraestrutura física.',
    img: imgFase3,
    icon: <><path d="M12 3 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    items: ['Assinatura mensal, sem contrato de longo prazo', 'Acesso por login individual da empresa', 'Prevenção contra sinistros compartilhada']
  }
];

export default function Process() {
  const trackRef = useRef(null);
  const [dashOffset, setDashOffset] = useState(1000);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const updateRail = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      let progressPx = (vh * 0.72) - rect.top;
      progressPx = Math.max(0, Math.min(rect.height, progressPx));
      const frac = rect.height ? (progressPx / rect.height) : 0;
      setDashOffset(1000 * (1 - frac));

      nodeRefs.current.forEach((node) => {
        if (!node) return;
        const nodeTop = node.getBoundingClientRect().top - rect.top;
        node.classList.toggle('active', progressPx >= nodeTop + 10);
      });
    };

    window.addEventListener('scroll', updateRail);
    window.addEventListener('resize', updateRail);
    updateRail();
    
    return () => {
      window.removeEventListener('scroll', updateRail);
      window.removeEventListener('resize', updateRail);
    };
  }, []);

  return (
    <section className="process section" id="como-funciona">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker"><span className="dot" />COMO FUNCIONA</span>
          <h2>Três etapas entre o ponto vazio e o acesso na sua tela.</h2>
          <p>Nós cuidamos de tudo — do poste até a nuvem — para que você só precise fazer login.</p>
        </Reveal>

        <div className="process-track" id="processTrack" ref={trackRef}>
          <svg className="rail-svg" viewBox="0 0 92 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#33A8FF" />
                <stop offset="100%" stopColor="#16C6B6" />
              </linearGradient>
            </defs>
            <path d="M46,0 C76,150 16,150 46,300 C76,450 16,450 46,600 C76,750 16,750 46,1000" fill="none" stroke="rgba(230,243,255,.08)" strokeWidth="2" />
            <path id="railFillPath" d="M46,0 C76,150 16,150 46,300 C76,450 16,450 46,600 C76,750 16,750 46,1000" fill="none" stroke="url(#railGrad)" strokeWidth="2.4" strokeLinecap="round" pathLength="1000" strokeDasharray="1000" strokeDashoffset={dashOffset} style={{ filter: 'drop-shadow(0 0 5px rgba(51,168,255,.55))' }} />
          </svg>

          {stepsData.map((step, idx) => (
            <div key={idx} className="phase">
              <div className="rail-node" ref={el => nodeRefs.current[idx] = el}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{step.icon}</svg>
              </div>
              <div className="phase-content">
                <span className="phase-tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.p}</p>
                <ul className="phase-list">
                  {step.items.map((item, i) => (
                    <li key={i}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="phase-visual">
                <img className="phase-img" src={step.img} alt={`Fase ${idx + 1}`} />
                <div className="phase-blur" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}