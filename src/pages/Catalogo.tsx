import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogModal from "@/components/CatalogModal";
import { catalogo, categorias, type EnsaioItem, type Categoria } from "@/data/catalogo";

export default function Catalogo() {
  const [filter, setFilter] = useState<Categoria | "todos">("todos");
  const [selected, setSelected] = useState<EnsaioItem | null>(null);

  const filtered = filter === "todos" ? catalogo : catalogo.filter((i) => i.categoria === filter);

  return (
    <>
      <Header />
      <main className="pt-24 pb-0">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="section-title mb-4">Catálogo</h1>
              <p className="section-subtitle mx-auto">
                Explore nossos ensaios por categoria e encontre a inspiração perfeita para o seu momento.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categorias.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                    filter === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="relative group overflow-hidden aspect-[4/5] cursor-pointer text-left"
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
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {selected && <CatalogModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
