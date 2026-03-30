import { X } from "lucide-react";
import type { EnsaioItem } from "@/data/catalogo";

interface Props {
  item: EnsaioItem;
  onClose: () => void;
}

export default function CatalogModal({ item, onClose }: Props) {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Olá, tenho interesse no ensaio "${item.nome}" e gostaria de um orçamento.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
      <div
        className="relative bg-background max-w-3xl w-full max-h-[90vh] overflow-auto animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <img
          src={item.src}
          alt={item.nome}
          className="w-full max-h-[60vh] object-cover"
        />

        <div className="p-8">
          <h3 className="font-display text-2xl font-medium mb-6">{item.nome}</h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase hover:bg-foreground/80 transition-all duration-300"
          >
            Tenho Interesse
          </a>
        </div>
      </div>
    </div>
  );
}
