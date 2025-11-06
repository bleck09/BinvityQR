import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useVistaScroll } from '../../hooks/useVistaScroll';
import "./CardModerno.css";

const cards = [
  { title: "Productos exclusivos", desc: "Artículos únicos y de calidad seleccionada solo para ti." },
  { title: "Envío rápido", desc: "Recibe tus pedidos en tiempo récord con nuestro servicio express." },
  { title: "Soporte 24/7", desc: "Estamos disponibles para ayudarte en cualquier momento del día." },
  { title: "Garantía de calidad", desc: "Todos nuestros productos tienen garantía de satisfacción." },
  { title: "Ofertas especiales", desc: "Promociones y descuentos exclusivos para nuestros clientes." },
];

function CardModerno() {
  const [ref, visible] = useVistaScroll({ threshold: 0.3 });

  const trail = useTrail(cards.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 100, friction: 20 },
  });

  return (
    <div ref={ref} className="cards-container">
      {trail.map((style, index) => (
        <animated.div key={index} style={style} className="card">
          <h2>{cards[index].title}</h2>
          <p>{cards[index].desc}</p>
          
        </animated.div>
      ))}
    </div>
  );
}

export default CardModerno;
