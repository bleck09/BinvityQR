import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // Validación local temporal
    if (email === "bleck@gmail.com" && password === "123abc") {
      toast.success("Bienvenido, Bleck 👋");
      setTimeout(() => navigate("/"), 1500);
    } else {
      toast.error("Correo o contraseña incorrectos ❌");
    }
  };

  return (
    <div className="login-page">
      <Toaster position="top-right" />
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Correo electrónico</label>
            <input type="email" name="email" placeholder="Ingrese su correo" required />
          </div>

          <div className="input-group password-group">
            <label>Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Ingrese su contraseña"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Ingresar
          </button>
        </form>

        <p className="signup-text">
          ¿No tienes cuenta? <span className="signup-link">Regístrate</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
