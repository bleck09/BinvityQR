import React, { useState, useEffect } from 'react';
import './Principal.css';
import { useVistaScroll } from "../../../hooks/useVistaScroll";

function Principal() {
  const [ref, isVisible] = useVistaScroll({ threshold: 0.1 });
  const text = "Binvity QR";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isVisible) {
      setDisplayedText(""); // reiniciar el texto antes de animar
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        if (index >= text.length) clearInterval(interval);
      }, 150); // velocidad de aparición letra por letra
    }
  }, [isVisible]);

  return (
    <div className="PrincipalUnique" ref={ref}>
      <h1 className="PrincipalText">
        {displayedText.split("").map((char, i) => {
          let className = i < 7 ? "PrincipalBinvity" : "PrincipalQR";
          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </h1>
    </div>
  );
}

export default Principal;
