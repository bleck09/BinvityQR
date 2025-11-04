import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-card">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="back-home-btn">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Error404;
