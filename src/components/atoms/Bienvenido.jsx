import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useVistaScroll } from "../../hooks/useVistaScroll";

function Bienvenido() {
  const [ref, visible] = useVistaScroll({ threshold: 0.3 });

  const welcomeAnimation = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(50px)",
    config: { duration: 800 },
  });

  return (
    <animated.div ref={ref} style={welcomeAnimation} className="welcome-section">
      <h1 className="welcome-title">
        Tu celebración es <span className="neon-text">única</span>, y tu invitación digital también.
      </h1>
      <p className="welcome-description">
        Creamos invitaciones digitales <strong>exclusivas y personalizadas</strong> para todo tipo de eventos. Trabajamos con un número limitado de clientes para garantizar la mejor experiencia y que cada invitación sea especial.
      </p>
      <p className="welcome-cta">
        Elige tu plan y empieza hoy mismo.
      </p>
    </animated.div>
  );
}

export default Bienvenido;
