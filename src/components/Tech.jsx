import Reveal from "./Reveal.jsx";

const hexData = [
  { key: 1, posClass: 'hex-1', icon: <><rect x="3" y="6" width="14" height="12" rx="2" /><path d="M17 9.5 22 7v10l-5-2.5" /></>, frontTitle: 'Leitura de placas', frontSub: 'LPR', backTitle: '📷 LPR', backDetail: '95% de acurácia', backSub: 'Ideal para controle de acesso' },
  { key: 2, posClass: 'hex-2', icon: <><path d="M12 22c5-4 8-8.5 8-13a8 8 0 1 0-16 0c0 4.5 3 9 8 13z" /><circle cx="12" cy="9" r="2.3" /></>, frontTitle: 'Detecção de movimento', frontSub: 'Alertas automáticos', backTitle: '🎯 IA ativa', backDetail: 'Alertas em < 2s', backSub: 'Redução de falsos alarmes', bTitleCls: 'back-title' },
  { key: 3, posClass: 'hex-3', icon: <path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.5 8 4.5 4.5 0 0 1 17 17" />, frontTitle: 'Gravação em nuvem', frontSub: 'Retenção configurável', backTitle: 'Backup automático', backDetail: '30 dias de retenção', backSub: 'Acesso de qualquer lugar', bTitleCls: 'back-title' },
  { key: 4, posClass: 'hex-4', icon: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>, frontTitle: 'Controle de acesso', frontSub: 'Login por empresa', backTitle: 'Autenticação 2FA', backDetail: '👥 Permissões granulares', backSub: 'Logs de auditoria', bTitleCls: 'back-title' },
  { key: 5, posClass: 'hex-5', icon: <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />, frontTitle: 'Alertas em tempo real', frontSub: 'Push e e-mail', backSub: 'Personalizado por evento' },
  { key: 6, posClass: 'hex-6', icon: <path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-4z" />, frontTitle: 'Energia redundante', frontSub: 'Nobreak dedicado', backSub: 'Proteção contra quedas' }
];

export default function Tech() {
  return (
    <section className="tech section" id="tecnologia">
      <div className="container">
        <Reveal className="section-head center">
          <span className="kicker pill" style={{ marginLeft: 'auto', marginRight: 'auto' }}><span className="dot" />TECNOLOGIA</span>
          <h2>Câmera comum grava. A FlowCAM entende o que acontece.</h2>
          <p>Cada assinatura já inclui um núcleo de inteligência artificial rodando sobre as imagens do seu perímetro.</p>
        </Reveal>

        <Reveal className="hive-wrap">
          <svg className="hive-svg-lines" viewBox="0 0 820 760">
            <g stroke="rgba(51,168,255,.15)" strokeWidth="1.5">
              <line x1="410" y1="380" x2="410" y2="80" /><line x1="410" y1="380" x2="698" y2="230" /><line x1="410" y1="380" x2="698" y2="530" />
              <line x1="410" y1="380" x2="410" y2="680" /><line x1="410" y1="380" x2="122" y2="530" /><line x1="410" y1="380" x2="122" y2="230" />
            </g>
            <circle className="moving-dot" r="4" fill="#16C6B6"><animateMotion dur="3s" repeatCount="indefinite" path="M410,380 L410,80" /></circle>
            <circle className="moving-dot" r="4" fill="#33A8FF"><animateMotion dur="3.5s" repeatCount="indefinite" path="M410,380 L698,230" /></circle>
            <circle className="moving-dot" r="4" fill="#16C6B6"><animateMotion dur="3.2s" repeatCount="indefinite" path="M410,380 L698,530" /></circle>
            <circle className="moving-dot" r="4" fill="#33A8FF"><animateMotion dur="3.8s" repeatCount="indefinite" path="M410,380 L410,680" /></circle>
            <circle className="moving-dot" r="4" fill="#16C6B6"><animateMotion dur="3.3s" repeatCount="indefinite" path="M410,380 L122,530" /></circle>
            <circle className="moving-dot" r="4" fill="#33A8FF"><animateMotion dur="3.6s" repeatCount="indefinite" path="M410,380 L122,230" /></circle>
          </svg>

          <div className="hex hex-center">
            <div className="hex-inner">
              <div className="hex-front">
                <svg className="hex-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 12 6 9M12 12l6 3M12 12v-6" />
                </svg>
                <b>Núcleo IA<br />FlowCAM</b>
                <span>Processamento em nuvem</span>
              </div>
            </div>
          </div>

          {hexData.map(h => (
            <div key={h.key} className={`hex hex-sat ${h.posClass}`}>
              <div className="hex-inner">
                <div className="hex-front">
                  <svg className="hex-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{h.icon}</svg>
                  <b>{h.frontTitle}</b><span>{h.frontSub}</span>
                </div>
                <div className="hex-back">
                  {h.backTitle && (h.bTitleCls ? <span className={h.bTitleCls}>{h.backTitle}</span> : <b>{h.backTitle}</b>)}
                  {h.backDetail && <span className="back-detail">{h.backDetail}</span>}
                  <span className="back-sub">{h.backSub}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}