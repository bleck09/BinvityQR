// FechaEvento2.jsx
import React from "react";
import "./Glassmorphism.css";

export default function Glassmorphism() {
  const year = 2025;
  const monthIndex = 11; // diciembre
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="fecha2-wrap">
      <div className="cal-card2">
        <div className="mes-titulo2">Diciembre 2025</div>
        <div className="grid-legend2">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="grid-days2">
          {cells.map((d, i) => {
            const isEvento = d === 20;
            return (
              <div
                key={i}
                className={`dia2 ${isEvento ? "especial2" : d ? "" : "vacio2"}`}
              >
                {d ? (isEvento ? <span className="corazon2">💖</span> : d) : ""}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
