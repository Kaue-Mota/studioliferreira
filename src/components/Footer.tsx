import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl font-semibold mb-4">Studio Lí Ferreira</h3>
          <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
            Transformando momentos em memórias eternas com arte e sensibilidade.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium uppercase tracking-widest mb-4">Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Início</Link>
            <Link to="/catalogo" className="hover:text-primary-foreground transition-colors">Catálogo</Link>
            <a href="/#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a>
            <a href="/#contato" className="hover:text-primary-foreground transition-colors">Contato</a>
          </nav>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium uppercase tracking-widest mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/studioli_ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/55889697-2432"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} Studio Lí Ferreira. Todos os direitos reservados.
      </div>
    </footer>
  );
}
