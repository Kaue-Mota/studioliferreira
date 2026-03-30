import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento para um ensaio fotográfico.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
          Lumière Studio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-body font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-foreground/80"
          >
            Fazer Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase text-center"
            >
              Fazer Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
