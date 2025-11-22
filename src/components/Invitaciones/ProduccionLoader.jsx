import React from "react";
import { useParams } from "react-router-dom";

// CARGA DINÁMICA DE PRODUCCIONES
const producciones = {
  "15anos": {
    inv001: React.lazy(() => import("./15anos/inv001/ProInv001")),
    inv002: React.lazy(() => import("./15anos/inv002/ProInv002")),
  },
  "boda": {
    binv001: React.lazy(() => import("./boda/bod001/ProBod001")),
  },
  "graduacion": {
    gra001: React.lazy(() => import("./graduacion/gra001/ProGra001")),
  }
};

export default function ProduccionLoader() {
  const { categoria, codigo } = useParams();

  const Categoria = producciones[categoria];
  if (!Categoria) return <div>Producción no disponible</div>;

  const Component = Categoria[codigo];
  if (!Component) return <div>No existe esta versión PRO</div>;

  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <Component />
    </React.Suspense>
  );
}
