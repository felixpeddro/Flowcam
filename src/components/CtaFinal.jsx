import Reveal from './Reveal.jsx';

export default function CtaFinal() {
  return (
    <>
      <section className="cta-final">
        <Reveal className="cta-final-inner">
          <h2>Pronto para parar de vigiar sozinho?</h2>
          <p>Informe o e-mail da sua empresa e receba a cobertura disponível para o seu endereço em minutos.</p>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="seuemail@empresa.com" required />
            <button type="submit" className="btn btn-light">Ver disponibilidade</button>
          </form>
        </Reveal>
      </section>

      <div className="wave-divider on-blue" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path className="wave" d="M0,45 C200,15 400,60 600,40 C800,20 1000,65 1200,35 L1200,80 L0,80 Z" fill="#061024" />
          <path className="wave wave2" d="M0,58 C220,32 420,72 620,52 C820,32 1020,68 1200,48 L1200,80 L0,80 Z" fill="#061024" opacity="0.55" />
        </svg>
      </div>
    </>
  );
}