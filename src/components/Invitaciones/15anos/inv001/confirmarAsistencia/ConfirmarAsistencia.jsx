import React from 'react'
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import './ConfirmarAsistencia.css';

function ConfirmarAsistencia() {
    const whatsappNumber = "+59168580574";
    const mensaje = encodeURIComponent(
        "¡Hola! Gracias por la invitación, confirmo mi asistencia al XV de Adriana Belén..."
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensaje}`;

    return (
        <div>
            <div className="confirmar-actions">
                <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="confirmar-btn"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <motion.div
                        className="confirmar-icon"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                        <FaCheckCircle />
                    </motion.div>
                    Confirmar asistencia
                </motion.a>
            </div>
        </div>
    )
}

export default ConfirmarAsistencia;
