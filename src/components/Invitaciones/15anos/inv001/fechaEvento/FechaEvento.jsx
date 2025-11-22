import React from "react";
import "./FechaEvento.css";

export default function FechaEvento() {
  const year = 2025;
  const monthIndex = 11; // diciembre
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // empieza lunes
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="fechaEvento-wrap">
      <div className="cal-card">
        <div className="cal-left">
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
                  aria-label={d ? `Día ${d}` : "vacío"}
                >
                  {d && isEvento ? (
                    <div className="dia-especial">
                      <span className="corazon">❤</span>
                      <span className="numero-dia">{d}</span>
                    </div>
                  ) : d ? (
                    d
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
