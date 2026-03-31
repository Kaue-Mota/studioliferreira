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
    "https://wa.me/5588996972432?text=Olá, gostaria de solicitar um orçamento para um ensaio fotográfico.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black backdrop-blur-sm shadow-sm"
          : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        
        <Link to="/" className=" drop-shadow-lg font-display flex items-center text-xl md:text-2xl font-semibold tracking-tight text-white">
        <img src="/images/logo/logo_no_bg_v2.png" width={100} alt="logo" className="rounded-3xl" />
          Studio Lí Ferreira
        </Link>

        {/* Desktop nav */}
        <nav className="drop-shadow-lg hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-body font-medium tracking-wide text-white hover:scale-110 transition-scale duration-300 uppercase"
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/80"
          >
            Fazer Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
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
