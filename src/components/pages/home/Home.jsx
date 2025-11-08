import React from "react";
import Tarjetas from "../../secciones/tarjetas/Tarjetas";
import Nosotros from "../../secciones/nosotros/Nosotros";
import "./Home.css";
import Principal from "../../secciones/principal/Principal";
import Catalogo from "../../secciones/catagolo/Catalogo";

import ChatResp from "../../secciones/chatResp/chatResp";


const Home = () => {


  return (
    <div className="TransicionesModernas">
      <div className="fondoImagen">
        <Principal />

        <Tarjetas />
      </div>
      <Nosotros />
      <Catalogo/>
      <ChatResp/>
     

    </div>
  );
};

export default Home;
