import { ChevronDown } from "lucide-react";
import heroBg from "/images/hero/herobg2.jpeg";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Estúdio fotográfico profissional"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          className="drop-shadow-lg font-display text-4xl md:text-5xl lg:text-7xl font-medium text-primary-foreground leading-tight mb-6 animate-fade-up"
        >
          Momentos que se tornam eternos
        </h1>
        <p
          className="drop-shadow-lg font-body text-primary-foreground/80 text-base md:text-lg font-light leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Capturamos a essência de cada instante com arte, sensibilidade e técnica impecável.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento para um ensaio fotográfico."
          target="_blank"
          rel="noopener noreferrer"
          className="drop-shadow-lg inline-block px-10 py-4 bg-primary-foreground text-foreground text-sm font-medium tracking-widest uppercase hover:bg-primary-foreground/90 transition-all duration-300 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Solicitar Orçamento
        </a>
      </div>

      <button
        onClick={scrollToPortfolio}
        className="drop-shadow-lg absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/70 animate-bounce-subtle"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
