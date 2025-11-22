import React from 'react';
import { createHashRouter } from "react-router-dom"; // 👈 cambia aquí
import Error404 from "../components/pages/error404/Error404";
import Products from '../components/pages/productos/Products';
import App from '../components/templates/App';
import Home from '../components/pages/home/Home';
import Login from '../components/pages/login/Login';
import InvitacionLoader from '../components/Invitaciones/InvitacionLoader';
import ProduccionLoader from '../components/Invitaciones/ProduccionLoader';


const router = createHashRouter([  // 👈 también aquí
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
   // 🔥 Ruta que carga CUALQUIER invitación automáticamente
  { path: "/invitaciones/:categoria/:codigo", element: <InvitacionLoader /> },
  {
  path: "/invitaciones/:categoria/:codigo/pro",
  element: <ProduccionLoader />
  }
]);

export default router;
