import { useScrollReveal } from "@/hooks/useScrollReveal";
import studioImg from "@/assets/studio.jpg";

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              src={studioImg}
              alt="Interior do Lumière Studio"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-[400px] lg:h-[560px] object-cover"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Sobre o Estúdio</h2>
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
              <p>
                O <strong className="font-medium text-foreground">Lumière Studio</strong> nasceu da paixão por transformar momentos
                cotidianos em obras de arte atemporais. Com mais de uma década de experiência,
                nosso estúdio combina técnica impecável com sensibilidade artística.
              </p>
              <p>
                Equipado com tecnologia de ponta e cenários exclusivos, oferecemos uma experiência
                completa — do planejamento criativo à entrega final. Cada ensaio é pensado nos
                mínimos detalhes para que você se sinta confortável e os resultados superem expectativas.
              </p>
              <p>
                Acreditamos que uma boa fotografia vai além do clique: ela conta uma história,
                desperta emoções e preserva memórias para sempre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
