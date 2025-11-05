// Tarjetas.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Tarjetas.css';

const Tarjetas = () => {
  const eventos = ['15 años', 'Bautizo', 'Boda', 'Fechas Especiales', 'Graduaciones'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % eventos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [eventos.length]);

  return (
    <div className="tarjetas-section">
      <span className="fixed-text">Invitación digitales </span>
      <div className="evento-container">
        <div className="evento-background">
          <AnimatePresence mode="wait">
            <motion.span
              key={eventos[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="evento-text"
            >
              {eventos[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
