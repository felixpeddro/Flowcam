import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo-chip"><img src={logo} alt="FlowCAM" /></span>
          <p>Rede de videomonitoramento urbano por assinatura. Infraestrutura, tecnologia e comercialização em um único serviço.</p>
        </div>
        {/* ... Outras colunas do Footer ... */}
      </div>
      <div className="footer-wordmark">FLOWCAM</div>
      <div className="footer-bottom">
        <span>© 2026 FlowCAM. Todos os direitos reservados.</span>
        <span>Feito para comércios que não querem vigiar sozinhos.</span>
      </div>
    </footer>
  );
}