import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { catalogo } from "@/data/catalogo";

const featured = catalogo.slice(0, 6);

export default function Portfolio() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nossos Trabalhos</h2>
          <p className="section-subtitle mx-auto">
            Cada ensaio é uma história única, contada com luz, emoção e atenção
            aos detalhes.
          </p>
        </div>
        <div className="text-center py-5 mt-12">
          <Link
            to="/catalogo"
            className="inline-block px-10 py-4 border border-foreground text-foreground text-sm font-medium tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Catálogo Completo
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {featured.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden aspect-[4/5]"
            >
              <img
                src={item.src}
                alt={item.nome}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="image-overlay">
                <span className="text-primary-foreground text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.nome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
