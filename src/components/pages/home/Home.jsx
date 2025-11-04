import React from "react";
import Bienvenido from "../../atoms/Bienvenido"; 
import CardModerno from "../../atoms/CardModerno";
import CTA from "../../atoms/CTA";
import GaleriaFotos from '../../atoms/GaleriaFotos';
import "./Home.css";
import Principal from "../../secciones/principal/Principal";


const Home = () => {
 

  return (
    <div className="TransicionesModernas">
      <Principal/>
      {/* Sección de bienvenida */}
      <Bienvenido />

      {/* Sección de características - Card moderno */}
      <CardModerno />

      {/* Sección de carrusel moderno */}
     
      <GaleriaFotos/>


      {/* Sección CTA */}
      <CTA />
    </div>
  );
};

export default Home;
