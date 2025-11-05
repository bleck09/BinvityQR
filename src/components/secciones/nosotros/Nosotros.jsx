import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <motion.h2
        className="nosotros-titulo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ve lo que podemos hacer por ti ✨
      </motion.h2>

      <motion.p
        className="nosotros-descripcion"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        En <strong>Binvity QR</strong> nos especializamos en crear{" "}
        <span className="resalte">invitaciones digitales únicas</span> que
        reflejan tu estilo y el significado de cada celebración. Ya sea{" "}
        <em>boda, bautizo, cumpleaños, graduación o fecha especial</em>,
        diseñamos experiencias memorables totalmente personalizadas.
      </motion.p>

      <motion.p
        className="nosotros-detalle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Nuestras invitaciones te permiten compartir información esencial,
        recibir confirmaciones, mostrar galerías, mapas, cuenta regresiva
        y mucho más — todo desde un solo lugar. Sin envíos físicos, sin
        retrasos y con el toque digital que sorprenderá a tus invitados.
      </motion.p>

      <motion.p
        className="nosotros-final"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Y si también deseas invitaciones impresas, te regalamos un{" "}
        <span className="qr-text">código QR exclusivo</span> que conecta tus
        invitaciones físicas con tu versión digital. 💫
      </motion.p>
      <motion.p
        className="nosotros-final"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
      <Link to="/productos" className="btn-nosotros">
        🌸 Ver ejemplos
      </Link>
      </motion.p>
      
    </section>
  );
};

export default Nosotros;
