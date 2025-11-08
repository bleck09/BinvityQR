import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ComboPreguntas.css";

const faqs = [
  {
    pregunta: "¿Cuánto cuestan las invitaciones digitales?",
    respuesta:
      "Tenemos tres planes según tu necesidad: Básico (200€), Plus (350€) y Premium (500€). Cada uno incluye distintos niveles de personalización y diseño.",
  },
  {
    pregunta: "¿Qué está incluido en el servicio?",
    respuesta:
      "Diseño personalizado, formulario RSVP, adaptación a móvil y soporte completo. Los planes superiores incluyen extras como dominio propio y asesoramiento en diseño.",
  },
  {
    pregunta: "¿Puedo modificar la página después de publicarla?",
    respuesta:
      "Sí, puedes hacer cambios en cualquier momento: actualizar fotos, textos o detalles del evento.",
  },
  {
    pregunta: "¿Cómo funciona el sistema de confirmación (RSVP)?",
    respuesta:
      "Tus invitados pueden confirmar asistencia en línea, y tú verás todas las respuestas en tiempo real desde una hoja de control.",
  },
  {
    pregunta: "¿Qué tipo de soporte ofrecen?",
    respuesta:
      "Ofrecemos soporte personalizado antes, durante y después del proceso de creación, para que todo funcione perfectamente.",
  },
];

// Respuestas automáticas por palabra clave
const respuestasAuto = {
  precio:
    "💰 Nuestros precios son: Básico (200€), Plus (350€) y Premium (500€).",
  modificar:
    "✏️ Sí, puedes modificar la invitación en cualquier momento, incluso después de publicarla.",
  dominio:
    "🌐 Incluimos dominios personalizados para que tus invitados puedan acceder fácilmente.",
  soporte:
    "🛠️ Contamos con soporte personalizado antes, durante y después del lanzamiento.",
  diseño:
    "🎨 Todos los planes incluyen diseño moderno y adaptable. El Premium ofrece un diseño exclusivo desde cero.",
};

const ComboPreguntas = () => {
  const [search, setSearch] = useState("");

  // Si detecta palabra clave, responde automáticamente
  const respuestaAutomatica = Object.keys(respuestasAuto).find((clave) =>
    search.toLowerCase().includes(clave)
  );

  const filtradas = faqs.filter((faq) =>
    faq.pregunta.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="combo-container">
      <h2 className="combo-header">🤖 Preguntas Frecuentes Inteligentes</h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Buscar o preguntar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="combo-search"
        InputLabelProps={{ style: { color: "#00ffff" } }}
        InputProps={{
          style: {
            color: "#fff",
            borderColor: "#00ffff",
          },
        }}
      />

      {/* Respuesta automática */}
      {respuestaAutomatica && (
        <div className="combo-auto">
          <p>{respuestasAuto[respuestaAutomatica]}</p>
        </div>
      )}

      {/* Resultados filtrados */}
      {filtradas.length > 0 ? (
        filtradas.map((faq, index) => (
          <Accordion key={index} className="combo-acordeon">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#00ffff" }} />}
            >
              <Typography className="combo-question">{faq.pregunta}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="combo-answer">{faq.respuesta}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        !respuestaAutomatica && (
          <p className="combo-no-results">No se encontró ninguna coincidencia.</p>
        )
      )}
    </div>
  );
};

export default ComboPreguntas;
