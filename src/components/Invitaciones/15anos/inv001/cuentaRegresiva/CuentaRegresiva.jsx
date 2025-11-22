import React from 'react';
import Countdown from 'react-countdown';
import './CuentaRegresiva.css';

const FechaEvento = new Date('2025-12-20T18:00:00'); // Fecha del evento

export default function CuentaRegresiva() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="countdown-completo">🎉 ¡El evento ha comenzado! 🎉</div>;
    } else {
      return (
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="numero">{days}</span>
            <span className="label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="numero">{hours}</span>
            <span className="label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="numero">{minutes}</span>
            <span className="label">Min</span>
          </div>
          <div className="countdown-item">
            <span className="numero">{seconds}</span>
            <span className="label">Seg</span>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={FechaEvento} renderer={renderer} />;
}
