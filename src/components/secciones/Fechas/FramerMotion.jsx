import React from "react";
import { motion } from "framer-motion";
import "./FramerMotion.css";

export default function FramerMotion() {
  const year = 2025;
  const monthIndex = 11; // diciembre
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // lunes=0
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Crear array de celdas
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="fechaEvento-wrap">
      <div className="cal-card">
        <div className="cal-left">
          <div className="mes-titulo">Diciembre 2025</div>

          <div className="grid-legend">
            {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>

          <div className="grid-days">
            {cells.map((d, i) => {
              const esEvento = d === 20;
              return (
                <motion.div
                  key={i}
                  className={`dia ${esEvento ? "especial" : d ? "" : "vacio"}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  aria-label={d ? `Día ${d}` : "vacío"}
                >
                  {d ? (
                    esEvento ? (
                      <motion.span
                        className="corazon"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ❤
                      </motion.span>
                    ) : (
                      d
                    )
                  ) : (
                    ""
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
