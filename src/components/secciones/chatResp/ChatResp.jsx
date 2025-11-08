import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./ChatResp.css";

const ChatResp = () => {
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: `👋 ¡Hola! Soy la asistente virtual de <span class="binvity-text">Binvity</span><span class="QR-text"> QR</span>. ¿En qué puedo ayudarte hoy?`,
            hasButton: false,
        },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input, hasButton: false };
        setMessages((prev) => [...prev, userMessage]);

        const lower = input.toLowerCase();
        let botResponse = "";
        let hasButton = false;

        if (lower.includes("básico") || lower.includes("basico")) {
            botResponse = `💰 El **Plan Básico (200€)** incluye una invitación digital elegante, texto editable, galería de fotos y acceso por código QR. 
Ideal si buscas algo sencillo, profesional y económico. 😊`;

        } else if (lower.includes("plus")) {
            botResponse = `🌟 El **Plan Plus (350€)** ofrece un diseño más personalizado, animaciones suaves, música de fondo y soporte para videos cortos. 
Perfecto si deseas una invitación moderna y diferente. ✨`;

        } else if (lower.includes("premium")) {
            botResponse = `👑 El **Plan Premium (500€)** incluye todo: diseño exclusivo, mapa interactivo, confirmación de asistencia, galería ilimitada y animaciones de lujo. 
Ideal si buscas algo único y totalmente personalizado. 💫`;

        } else if (lower.includes("precio") || lower.includes("cuánto") || lower.includes("cuanto")) {
            botResponse = `💰 Tenemos tres planes disponibles:
- Básico: 200€
- Plus: 350€
- Premium: 500€
Cada uno con distintos niveles de personalización y funciones. 🎨`;

        } else if (lower.includes("hola")) {
            botResponse = `👋 ¡Hola! Somos Binvity QR. Puedes hacer cualquier pregunta relacionada con nuestras invitaciones digitales. 
Si no puedo responder algo, puedes contactar directamente con nuestro equipo. 💬`;

        } else if (lower.includes("catalogo") || lower.includes("catálogo") || lower.includes("productos")) {
            botResponse = `📦 Tenemos un catálogo con todas nuestras invitaciones digitales. 
Puedes ver los estilos, animaciones y precios actualizados aquí 👇`;
            hasButton = true;

        } else if (/^[a-zA-Z]*$/.test(lower) && lower.length < 5) {
            // Mensajes sin sentido o cortos
            botResponse = `🤖 Lo siento, no logré entender tu mensaje.  
¿Podrías repetirlo o escribirlo de otra forma? 😊  
Recuerda que puedo ayudarte con temas como *precio*, *planes* o *catálogo*.`;

        } else {
            // Mensaje fuera del alcance del bot
            botResponse = `🤖 Lo siento, esa pregunta está fuera de mi alcance por ahora.  
Aún no estoy programada para responder ese tipo de consultas, pero puedo ayudarte con temas básicos como precios, diseño o soporte.  

📞 Si deseas una respuesta más detallada, puedes contactar directamente con el equipo de **Binvity QR** al número **+591 700-00000** o escribirnos por WhatsApp. 💬`;
            hasButton = false;
        }

        // Mensaje final siempre presente
        botResponse += `\n\n💬 Si tienes alguna duda, estoy aquí para ayudarte 😊`;

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: botResponse, hasButton },
            ]);
        }, 600);

        setInput("");
    };

    return (
        <>
            <motion.h1
                className="chatResp-title"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Chat Binvity
            </motion.h1>
            <div className="ChatResp-container">
                <div className="ChatResp-window">
                    {messages.map((msg, i) => (
                        <div key={i} className={`ChatResp-msg ${msg.from}`}>
                            <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                            {msg.hasButton && (
                                <div className="ChatResp-footer">
                                    <Link to="/Productos" className="ChatResp-btn">
                                        Ver ejemplos
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="ChatResp-inputArea">
                    <input
                        type="text"
                        placeholder="Escribe tu mensaje..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button onClick={handleSend}>Enviar</button>
                </div>
            </div>
        </>

    );
};

export default ChatResp;
