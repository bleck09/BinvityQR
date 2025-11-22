import React, { useEffect, useState } from "react";
import "./luxury.css";

export default function luxury() {
  const year = 2025;
  const monthIndex = 11; // Diciembre
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // 0 = Lunes
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Crear array de celdas
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  // Confeti
  const [confetti, setConfetti] = useState([]);
  useEffect(() => {
    const colors = ["#fd009c", "#ffd700", "#ff7eb9", "#ff99cc", "#ffb6e0"];
    const confettiArray = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * 2 + "s",
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(confettiArray);
  }, []);

  return (
    <section className="fechaEvento-wrap">
      <div className="cal-card">
        <div className="mes-titulo">Diciembre 2025</div>

        <div className="grid-legend">
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
          <div>Dom</div>
        </div>

        <div className="grid-days">
          {cells.map((d, i) => {
            const isEvento = d === 20;
            return (
              <div
                key={i}
                className={`dia ${isEvento ? "especial" : d ? "" : "vacio"}`}
              >
                {d ? (isEvento ? <span className="corazon">❤</span> : d) : ""}
                {isEvento &&
                  confetti.map((c, idx) => (
                    <span
                      key={idx}
                      className="confeti"
                      style={{
                        left: c.left,
                        animationDelay: c.animationDelay,
                        backgroundColor: c.color,
                      }}
                    ></span>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
