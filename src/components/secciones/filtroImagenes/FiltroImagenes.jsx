import React, { useState } from "react";
import { motion } from "motion/react";
import GaleriaFotos from "../galeriaFotos/GaleriaFotos";
import bodas from "/imagenes/hadoop.jpg";
import "./FiltroImagenes.css";

function Products() {
  const categorias = {
    boda: [
      { id: 1, title: "Boda 1", img: bodas, description: "Invitación elegante y romántica.", boton: "/Login" },
      { id: 2, title: "Boda 2", img: bodas, description: "Diseño moderno para bodas minimalistas.", boton: "/boda/Binv002" },
      { id: 3, title: "Boda 3", img: bodas, description: "Plantilla con flores naturales.", boton: "/boda/Binv003" },
      { id: 4, title: "Boda 4", img: bodas, description: "Estilo clásico y elegante.", boton: "/boda/Binv004" }
    ],
    bautizo: [
      { id: 1, title: "Bautizo 1", img: bodas, description: "Diseño dulce y tierno para bebés.", boton: "/bautizo/Binv001" },
      { id: 2, title: "Bautizo 2", img: bodas, description: "Plantilla celestial y brillante.", boton: "/bautizo/Binv002" },
      { id: 3, title: "Bautizo 3", img: bodas, description: "Colores suaves y tipografía amigable.", boton: "/bautizo/Binv003" },
      { id: 4, title: "Bautizo 4", img: bodas, description: "Ideal para invitaciones digitales.", boton: "/bautizo/Binv004" }
    ],
    graduacion: [
      { id: 1, title: "Graduación 1", img: bodas, description: "Plantilla para fin de año escolar.", boton: "/graduacion/Binv001" },
      { id: 2, title: "Graduación 2", img: bodas, description: "Estilo elegante para universitarios.", boton: "/graduacion/Binv002" },
      { id: 3, title: "Graduación 3", img: bodas, description: "Diseño formal con diplomas.", boton: "/graduacion/Binv003" },
      { id: 4, title: "Graduación 4", img: bodas, description: "Plantilla animada moderna.", boton: "/graduacion/Binv004" }
    ]
  };

  const [categoriaActiva, setCategoriaActiva] = useState("boda");
  const [busqueda, setBusqueda] = useState("");

  const categoriasDisponibles = Object.keys(categorias);
  const filtradas = categorias[categoriaActiva].filter((c) =>
    c.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="TransicionesModernas">
      <motion.h1
        className="titulo-principal"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✨ Catálogo de Invitaciones Digitales ✨
      </motion.h1>

      {/* Barra de búsqueda */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar invitación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Filtros de categoría */}
      <div className="filtros">
        {categoriasDisponibles.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`boton-filtro ${categoriaActiva === cat ? "activo" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Galería */}
      <motion.div
        key={categoriaActiva}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contenedor-galeria"
      >
        <GaleriaFotos cards={filtradas} />
      </motion.div>
    </div>
  );
}

export default Products;
