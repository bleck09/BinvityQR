import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/error404/Error404";
import Products from '../components/pages/productos/Products';
import App from '../components/templates/App';
import Home from '../components/pages/home/Home';
import Login from '../components/pages/login/Login';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error404/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path:"/productos",
                element: <Products/>,
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
])

export default router