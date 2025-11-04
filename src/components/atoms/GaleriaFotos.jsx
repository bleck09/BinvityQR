import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import Producto1 from "../../assets/imagenes/hadoop.jpg"; // Imagen interna
import './GaleriaFotos.css'; // Nuevo archivo CSS

function CardTilt({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-tilt"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function GaleriaFotos({
  randomRotation = true,
  sensitivity = 180,
  cardDimensions = { width: 250, height: 350 },
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true
}) {
  const initialCards = [
    { id: 1, title: "Hadoop", img: Producto1, description: "Framework para procesamiento distribuido de datos grandes." },
    { id: 2, title: "Hadoop 2", img: Producto1, description: "Sección de ejemplo con descripción personalizada." },
    { id: 3, title: "Hadoop 3", img: Producto1, description: "Cada carta puede tener su propia información." },
    { id: 4, title: "Hadoop 4", img: Producto1, description: "Puedes modificar título, imagen y descripción." }
  ];

  const [cards, setCards] = useState(initialCards);

  const sendToBack = id => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-gallery"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 800
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardTilt key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="card-mod"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '50% 50%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <img src={card.img} alt={`card-${card.id}`} className="card-mod-image" />
              <div className="card-mod-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </motion.div>
          </CardTilt>
        );
      })}
    </div>
  );
}
