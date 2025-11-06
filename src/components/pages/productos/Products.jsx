import React from 'react';
import GaleriaFotos from '../../atoms/GaleriaFotos';
import bodas from '/imagenes/hadoop.jpg';
import bodas1 from '/imagenes/hadoop.jpg';


function Products() {
  const boda = [
  { id: 1, title: "Boda 1", img: bodas, description: "Invitación elegante y romántica.", boton: "/boda/Binv001" },
  { id: 2, title: "Boda 2", img: bodas1, description: "Diseño moderno para bodas minimalistas.", boton: "/boda/Binv002" },
  { id: 3, title: "Boda 3", img: "/imagenes/hadoop.jpg", description: "Plantilla con flores naturales.", boton: "/boda/Binv003" },
  { id: 4, title: "Boda 4", img: "/imagenes/hadoop.jpg", description: "Estilo clásico y elegante.", boton: "/boda/Binv004" }
];

const bautizo = [
  { id: 1, title: "Bautizo 1", img: "/imagenes/hadoop.jpg", description: "Diseño dulce y tierno para bebés.", boton: "/bautizo/Binv001" },
  { id: 2, title: "Bautizo 2", img: "/imagenes/hadoop.jpg", description: "Plantilla celestial y brillante.", boton: "/bautizo/Binv002" },
  { id: 3, title: "Bautizo 3", img: "/imagenes/hadoop.jpg", description: "Colores suaves y tipografía amigable.", boton: "/bautizo/Binv003" },
  { id: 4, title: "Bautizo 4", img: "/imagenes/hadoop.jpg", description: "Ideal para invitaciones digitales.", boton: "/bautizo/Binv004" }
];

const graduaciones = [
  { id: 1, title: "Graduación 1", img: "/imagenes/hadoop.jpg", description: "Plantilla para fin de año escolar.", boton: "/graduacion/Binv001" },
  { id: 2, title: "Graduación 2", img: "/imagenes/hadoop.jpg", description: "Estilo elegante para universitarios.", boton: "/graduacion/Binv002" },
  { id: 3, title: "Graduación 3", img: "/imagenes/hadoop.jpg", description: "Diseño formal con diplomas.", boton: "/graduacion/Binv003" },
  { id: 4, title: "Graduación 4", img: "/imagenes/hadoop.jpg", description: "Plantilla animada moderna.", boton: "/graduacion/Binv004" }
];

  return (
    <div className="TransicionesModernas">
      <h2>💍 Invitaciones de Boda</h2>
      <GaleriaFotos cards={boda} />

      <h2>👶 Invitaciones de Bautizo</h2>
      <GaleriaFotos cards={bautizo} />

      <h2>🎓 Invitaciones de Graduación</h2>
      <GaleriaFotos cards={graduaciones} />

      <img src="/imagenes/hadoop.jpg" alt="Prueba" style={{ width: '200px' }} />

    </div>
  );
}

export default Products;
