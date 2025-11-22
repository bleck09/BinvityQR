import React from "react";
import { useParams } from "react-router-dom";

// Import dinámico de TODAS las plantillas
const templates = {
  "15anos": {
    inv001: React.lazy(() => import("./15anos/inv001/Inv001")),
    inv002: React.lazy(() => import("./15anos/inv002/Inv002")),
    inv003: React.lazy(() => import("./15anos/inv003/Inv003")),
  },
  "graduacion": {
    gra001: React.lazy(() => import("./graduacion/gra001/Gra001")),
    gra002: React.lazy(() => import("./graduacion/gra002/Gra002")),
  },
  "boda": {
    bod001: React.lazy(() => import("./boda/bod001/Bod001")),
  },
};

export default function InvitacionLoader() {
  const { categoria, codigo } = useParams();

  const Categoria = templates[categoria];
  if (!Categoria) return <div>Categoría no encontrada</div>;

  const Component = Categoria[codigo];
  if (!Component) return <div>Invitación no encontrada</div>;

  return (
    <React.Suspense fallback={<div>Cargando invitación...</div>}>
      <Component />
    </React.Suspense>
  );
}
