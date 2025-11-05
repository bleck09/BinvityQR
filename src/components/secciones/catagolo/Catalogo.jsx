import React from "react";
import { motion } from "motion/react";
import "./Catalogo.css";
import quinceAnios from "/src/assets/imagenes/15años/15años.webp";
import boda from "/src/assets/imagenes/boda/Boda.jpeg";
import bautizo from "/src/assets/imagenes/bautizo/Bautizo.jpg";
import graduacion from "/src/assets/imagenes/graduacion/Graduacion.jpg";
import fechasEspeciales from "/src/assets/imagenes/fechasepeciales/FechasEspeciales.jpg";
import unanio from "/src/assets/imagenes/1año/1año.webp";

const Catalogo = () => {
  const categorias = [
    {
      titulo: "15 Años",
      descripcion:
        "Diseños encantadores y vibrantes que reflejan la magia de una noche inolvidable.",
      imagen: quinceAnios,
    },
    {
      titulo: "💍 Boda",
      descripcion:
        "Invitaciones elegantes y románticas para el día más importante de tu vida.",
      imagen: boda,
    },
    {
      titulo: "👶 Bautizo",
      descripcion:
        "Modelos dulces y delicados para celebrar la llegada de un nuevo ser.",
      imagen: bautizo,
    },
    {
      titulo: "🎓 Graduaciones",
      descripcion:
        "Diseños modernos que celebran tu esfuerzo y éxito académico.",
      imagen: graduacion,
    },
    {
      titulo: "🎈 Fechas Especiales",
      descripcion:
        "Personaliza cualquier evento: aniversarios, cumpleaños o reuniones familiares.",
      imagen: fechasEspeciales,
    },
    {
      titulo: "🎂 1 Año",
      descripcion:
        "Celebra el primer año de tu bebé con invitaciones tiernas y llenas de alegría para este momento tan especial.",
      imagen: unanio, 
    }
  ];

  return (
    <motion.div
      className="products-section"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* título principal */}
      <motion.h1
        className="products-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✨ Invitaciones Digitales Personalizadas ✨
      </motion.h1>

      {/* subtítulo */}
      <motion.p
        className="products-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Explora nuestras categorías de invitaciones digitales, cada una con un
        estilo único y moderno que puedes personalizar completamente.
      </motion.p>

      {/* tarjetas animadas */}
      <div className="categorias-container">
        {categorias.map((cat, index) => (
          <motion.div
            key={index}
            className="categoria-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {cat.titulo}
            </motion.h2>
            <img
              src={cat.imagen}
              alt={cat.titulo}
              className="categoria-imagen"
            />
            <motion.p
              className="categoria-descripcion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {cat.descripcion}
            </motion.p>

            <motion.button
              className="btn-vermas"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Ver ejemplos
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Catalogo;
