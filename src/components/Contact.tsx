import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento para um ensaio fotográfico.";

  return (
    <section id="contato" className="section-padding bg-secondary">
      <div ref={ref} className="max-w-3xl mx-auto text-center scroll-reveal">
        <h2 className="section-title mb-4">Fale Conosco</h2>
        <p className="section-subtitle mx-auto mb-12">
          Pronto para registrar seus momentos especiais? Entre em contato e vamos criar algo incrível juntos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase hover:bg-foreground/80 transition-all duration-300"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="https://instagram.com/lumierestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-foreground text-foreground text-sm font-medium tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Instagram size={20} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
