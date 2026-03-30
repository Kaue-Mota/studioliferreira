import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock } from "lucide-react";

export default function Location() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="localizacao" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Localização</h2>
          <p className="section-subtitle mx-auto">Venha nos conhecer pessoalmente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6544!3d-23.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lumière Studio"
              className="w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Rua Augusta, 1200 — Sala 302<br />
                  Consolação, São Paulo — SP<br />
                  CEP 01304-001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium mb-1">Horário de Funcionamento</h3>
                <div className="text-muted-foreground font-light space-y-1">
                  <p>Segunda a Sexta: 9h — 19h</p>
                  <p>Sábado: 9h — 16h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
