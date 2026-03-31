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
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.082768934225!2d-39.3136!3d-7.2314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a17884ef04976f%3A0xf2415309e8d9604b!2sAv.%20N.Senhora%20Aparecida%2C%20700%20-%20Jo%C3%A3o%20Cabral%2C%20Juazeiro%20do%20Norte%20-%20CE%2C%2063051-170!5e0!3m2!1spt-BR!2sbr!4v1774984877517!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Studio Lí Ferreira"
              className="w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Av. N.Senhora Aparecida, <br />
                  700 - João Cabral, <br />
                  Juazeiro do Norte - CE, 63051-170
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium mb-1">Horário de Funcionamento</h3>
                <div className="text-muted-foreground font-light space-y-1">
                  <p>Terça a Sábado: 8h — 12h</p>
                  <p>Sábado: Fechado</p>
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
