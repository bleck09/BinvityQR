import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import { useVistaScroll } from '../../hooks/useVistaScroll';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();
  const [ref, visible] = useVistaScroll({ threshold: 0.3 });

  const animation = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(50px)',
    config: { duration: 800 },
  });

  return (
    <animated.div ref={ref} style={animation} className="cta-section">
      <h2>¿Listo para comenzar?</h2>
      <button onClick={() => navigate("/productos")} className="cta-btn">
        Explorar productos
      </button>
    </animated.div>
  );
};

export default CTA;
