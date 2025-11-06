import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Productos.css";

import quinceAnios from "/src/assets/imagenes/15años/15años.webp";
import boda from "/src/assets/imagenes/boda/Boda.jpeg";
import bautizo from "/src/assets/imagenes/bautizo/Bautizo.jpg";
import graduacion from "/src/assets/imagenes/graduacion/Graduacion.jpg";
import fechasEspeciales from "/src/assets/imagenes/fechasepeciales/FechasEspeciales.jpg";
import unanio from "/src/assets/imagenes/1año/1año.webp";

const DEFAULT_ITEMS = [
  { id: "b1", category: "Boda", title: "Boda Romántica", img: boda, description: "Invitación elegante y romántica para matrimonios clásicos.", route: "/boda/Binv001" },
  { id: "b2", category: "Boda", title: "Boda Minimalista", img: boda, description: "Diseño moderno y minimalista para parejas contemporáneas.", route: "/boda/Binv002" },
  { id: "ba1", category: "Bautizo", title: "Bautizo Dulce", img: bautizo, description: "Estética tierna y limpia para el primer sacramento.", route: "/bautizo/Binv001" },
  { id: "g1", category: "Graduaciones", title: "Graduación Estelar", img: graduacion, description: "Diseño moderno para celebrar tu logro académico.", route: "/graduacion/Binv001" },
  { id: "15a", category: "15 Años", title: "Quinceañera Clásica", img: quinceAnios, description: "Invitaciones encantadoras para una noche inolvidable.", route: "/15/Binv001" },
  { id: "fs1", category: "Fechas Especiales", title: "Aniversario Chic", img: fechasEspeciales, description: "Personaliza tu evento especial con estilo.", route: "/fechas/FE001" },
  { id: "1a", category: "1 Año", title: "Primer Año", img: unanio, description: "Invitaciones tiernas para la celebración del primer año.", route: "/1ano/ANV001" },
];

const CATEGORIES = ["Todo", "Boda", "Bautizo", "Graduaciones", "15 Años", "Fechas Especiales", "1 Año"];

export default function Products() {
  const [items] = useState(DEFAULT_ITEMS);
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = items.filter(it => (activeCategory === "Todo" ? true : it.category === activeCategory));
    if (q) {
      result = result.filter(it => (it.title + " " + it.description + " " + it.category).toLowerCase().includes(q));
    }
    return result;
  }, [items, activeCategory, query]);

  return (
    <div className="products-page">
      <motion.div
        className="products-hero"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">✨Invitaciones Digitales</h1>
        <p className="hero-sub">
          Invitaciones modernas y personalizadas para cada ocasión bodas, bautizos, graduaciones y más. 
          Elige un estilo, mira ejemplos y personaliza el tuyo.
        </p>

        <div className="controls-row">
          <div className="search-wrap">
            <input
              aria-label="Buscar invitaciones"
              placeholder="Buscar por nombre, descripción o categoría..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-ghost" onClick={() => setQuery("")} aria-label="Borrar búsqueda">✕</button>
          </div>

          <div className="filters-wrap">
            <div className="categories-scroll" role="tablist" aria-label="Categorías">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-chip ${activeCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.main className="products-grid-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>Sin resultados</h3>
            <p>Prueba con otra búsqueda o categoría — tenemos muchas plantillas hermosas.</p>
          </div>
        ) : (
          <div className="cards-grid">
            {filtered.map((card, i) => (
              <motion.article
                key={card.id}
                className="product-card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="card-media" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-category">{card.category}</span>
                  </div>

                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.description}</p>

                  <div className="card-footer">
                    <Link to={card.route} className="btn-ghost">Ver ejemplo</Link>
                    <button className="btn-primary">Personalizar</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </motion.main>
    </div>
  );
}
