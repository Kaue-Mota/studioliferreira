import natal1 from "@/assets/catalog/natal1.jpg";
import natal2 from "@/assets/catalog/natal2.jpg";
import aniversario1 from "@/assets/catalog/aniversario1.jpg";
import aniversario2 from "@/assets/catalog/aniversario2.jpg";
import maes1 from "@/assets/catalog/maes1.jpg";
import maes2 from "@/assets/catalog/maes2.jpg";
import pais1 from "@/assets/catalog/pais1.jpg";
import outros1 from "@/assets/catalog/outros1.jpg";
import outros2 from "@/assets/catalog/outros2.jpg";

export type Categoria = "natal" | "aniversario" | "dia-das-maes" | "dia-dos-pais" | "outros";

export interface EnsaioItem {
  id: string;
  nome: string;
  categoria: Categoria;
  src: string;
}

export const categorias: { value: Categoria | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "natal", label: "Natal" },
  { value: "aniversario", label: "Aniversário" },
  { value: "dia-das-maes", label: "Dia das Mães" },
  { value: "dia-dos-pais", label: "Dia dos Pais" },
  { value: "outros", label: "Outros" },
];

export const catalogo: EnsaioItem[] = [
  { id: "1", nome: "Ensaio Natal em Família", categoria: "natal", src: natal1 },
  { id: "2", nome: "Natal Romântico", categoria: "natal", src: natal2 },
  { id: "3", nome: "Festa de Aniversário", categoria: "aniversario", src: aniversario1 },
  { id: "4", nome: "Debutante Rosa", categoria: "aniversario", src: aniversario2 },
  { id: "5", nome: "Amor de Mãe", categoria: "dia-das-maes", src: maes1 },
  { id: "6", nome: "Mãe e Filho", categoria: "dia-das-maes", src: maes2 },
  { id: "7", nome: "Pai e Filho", categoria: "dia-dos-pais", src: pais1 },
  { id: "8", nome: "Ensaio Newborn", categoria: "outros", src: outros1 },
  { id: "9", nome: "Ensaio Casal", categoria: "outros", src: outros2 },
];
