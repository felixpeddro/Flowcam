import Reveal from './Reveal';

export default function Promo() {
  const cards = [
    { num: '01', title: 'Zero investimento em equipamento', text: 'Nada de comprar, instalar ou dar manutenção em câmeras. A FlowCAM é dona de toda a infraestrutura física.' },
    { num: '02', title: 'Custo dividido, cobertura inteira', text: 'Vários comércios do mesmo perímetro compartilham a mesma rede — o que reduz o valor da assinatura de cada um.' },
    { num: '03', title: 'Acesso imediato, sem burocracia', text: 'Login liberado em minutos, com IA já ativa. Cancele quando quiser, sem multas nem contratos longos.' }
  ];

  return (
    <section className="promo section" id="vantagens">
      <div className="promo-bg" aria-hidden="true">
        <div className="blob blob-a" /><div className="blob blob-b" /><div className="blob blob-c" />
      </div>
      <div className="container">
        <Reveal className="section-head"><span className="kicker"><span className="dot" />POR QUE FLOWCAM</span></Reveal>
        <Reveal><h2 className="promo-headline">Você não compra câmeras. <b>Você assina visibilidade</b> — e deixa toda a infraestrutura por nossa conta.</h2></Reveal>
        
        <div className="promo-grid">
          {cards.map(c => (
            <Reveal key={c.num} className="promo-card">
              <span className="promo-num">{c.num}</span><h4>{c.title}</h4><p>{c.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="promo-cta">
          <p><strong>Pronto para ter cobertura completa sem levantar um poste?</strong>Fale com nosso time e veja a disponibilidade da rede na sua região.</p>
          <a href="#cobertura" className="btn btn-primary">Ver cobertura disponível</a>
        </Reveal>
      </div>
    </section>
  );
}