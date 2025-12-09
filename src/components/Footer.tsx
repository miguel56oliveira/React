import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <strong>Loja de Jogos</strong>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Loja de Jogos.</p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/jogos">Jogos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>

          {/* redes sociais removidas */}
        </div>
      </div>
    </footer>
  );
}
