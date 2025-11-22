import React, { useEffect, useRef } from "react";
import "./CarruselAntiguo.css";

function CarruselAntiguo() {
  const carruselRef = useRef(null);

  const imagenes = [
    { img: "/Adriana/imagenes/galeria1.jpeg" },
    { img: "/Adriana/imagenes/galeria2.jpeg" },
    { img: "/Adriana/imagenes/galeria3.jpeg" },
    { img: "/Adriana/imagenes/galeria4.jpeg" },
    { img: "/Adriana/imagenes/galeria1.jpeg" },
    { img: "/Adriana/imagenes/galeria2.jpeg" },
    { img: "/Adriana/imagenes/galeria3.jpeg" },
    { img: "/Adriana/imagenes/galeria4.jpeg" }
  ];

  useEffect(() => {
    const carrusel = carruselRef.current;
    let angle = 0;
    let isDragging = false;
    let startX = 0;
    let autoRotateInterval;
    let lastMoveTime = 0;

    const rotate = () => {
      angle = (angle + 0.3) % 360;
      updateRotation();
    };

    const updateRotation = () => {
      carrusel.style.transform = `perspective(1200px) rotateY(${angle}deg)`;
    };

    const startAutoRotate = () => {
      if (!autoRotateInterval) {
        autoRotateInterval = setInterval(rotate, 30);
      }
    };

    const stopAutoRotate = () => {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    };

    const startDrag = (x) => {
      isDragging = true;
      stopAutoRotate();
      startX = x;
    };

    const moveDrag = (x) => {
      if (!isDragging) return;
      const delta = x - startX;
      angle += delta * 0.4;
      angle = angle % 360;
      updateRotation();
      startX = x;
      lastMoveTime = Date.now();
    };

    const endDrag = () => {
      isDragging = false;
      setTimeout(() => {
        if (Date.now() - lastMoveTime > 300) startAutoRotate();
      }, 500);
    };

    // Eventos de mouse
    carrusel.addEventListener("mousedown", e => startDrag(e.clientX));
    window.addEventListener("mousemove", e => moveDrag(e.clientX));
    window.addEventListener("mouseup", endDrag);

    // Eventos touch
    carrusel.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
    carrusel.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
    carrusel.addEventListener("touchend", endDrag);

    startAutoRotate();

    return () => {
      // Limpieza de eventos
      carrusel.removeEventListener("mousedown", startDrag);
      window.removeEventListener("mousemove", moveDrag);
      window.removeEventListener("mouseup", endDrag);
    };
  }, []);

  return (
    <section className="carusel_3d_Diablada">
      <div className="card-3d_Diablada" ref={carruselRef}>
        {imagenes.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={`galeria-${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarruselAntiguo;
