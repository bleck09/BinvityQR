import React from "react";
import Bienvenido from "../../atoms/Bienvenido";
import CardModerno from "../../atoms/CardModerno";
import CTA from "../../atoms/CTA";

import Tarjetas from "../../secciones/tarjetas/Tarjetas";
import Nosotros from "../../secciones/nosotros/Nosotros";
import "./Home.css";
import Principal from "../../secciones/principal/Principal";
import Catalogo from "../../secciones/catagolo/Catalogo";


const Home = () => {


  return (
    <div className="TransicionesModernas">
      <div className="fondoImagen">
        <Principal />

        <Tarjetas />
      </div>
      <Nosotros />
      <Catalogo/>

      {/* Sección de bienvenida */}
      <Bienvenido />

      {/* Sección de características - Card moderno */}
      <CardModerno />

      {/* Sección de carrusel moderno */}

     


      {/* Sección CTA */}
      <CTA />
    </div>
  );
};

export default Home;
