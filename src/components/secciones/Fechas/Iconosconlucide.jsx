// FechaEventoEspecial.jsx
import React, { useEffect } from "react";
import "./Iconosconlucide.css";

export default function Iconosconlucide() {
  const year = 2025;
  const monthIndex = 11; // diciembre
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // lunes=0
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  useEffect(() => {
    const hearts = document.querySelectorAll(".corazonEspecial");
    hearts.forEach((heart) => heart.classList.add("brillo"));
  }, []);

  return (
    <section className="fechaEspecial-wrap">
      <div className="cal-cardEspecial">
        <div className="mes-tituloEspecial">Diciembre 2025</div>
        <div className="grid-legendEspecial">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="grid-daysEspecial">
          {cells.map((d, i) => {
            const isEvento = d === 20;
            return (
              <div
                key={i}
                className={`diaEspecial ${isEvento ? "especialEspecial" : d ? "" : "vacioEspecial"}`}
              >
                {d ? (
                  isEvento ? (
                    <>
                      <span className="corazonEspecial">💖</span>
                      <div className="confetiDia20">
                        {[...Array(15)].map((_, idx) => (
                          <div key={idx} className="confetiMini" style={{ "--i": idx }}></div>
                        ))}
                      </div>
                    </>
                  ) : (
                    d
                  )
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
