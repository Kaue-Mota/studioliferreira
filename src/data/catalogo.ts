import outros1 from "/images/ensaios/ensaio (1).jpeg";
import outros2 from "/images/ensaios/ensaio (2).jpeg";
import outros3 from "/images/ensaios/ensaio (3).jpeg";
import outros4 from "/images/ensaios/ensaio (4).jpeg";
import outros5 from "/images/ensaios/ensaio (5).jpeg";
import outros6 from "/images/ensaios/ensaio (6).jpeg";

import outros8 from "/images/ensaios/ensaio (9).jpeg";
import outros9 from "/images/ensaios/ensaio (10).jpeg";

export type Categoria = "natal" | "aniversario" | "dia-das-maes" | "recem-nascido" | "outros";

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
  { value: "recem-nascido", label: "Recém Nascido" },
  { value: "outros", label: "Outros" },
];

export const catalogo: EnsaioItem[] = [
  { id: "1", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros1 },
  { id: "2", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros2 },
  { id: "3", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros3 },
  { id: "4", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros4 },
  { id: "5", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros5 },
  { id: "6", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros6 },
  { id: "8", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros8 },
  { id: "9", nome: "Ensaio Recém Nascido", categoria: "recem-nascido", src: outros9 },
];
