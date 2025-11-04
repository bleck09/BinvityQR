import React, { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"
import { Menu, X } from "lucide-react"
import "./MainHeader.css"

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="main-header">
      <div className="header-container">
        {/* LOGO */}
        <Logo />

        {/* BOTÓN HAMBURGUESA (visible solo en pantallas pequeñas) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className={`menu-nav ${menuOpen ? 'open' : ''}`}>
          <MainMenu onLinkClick={() => setMenuOpen(false)} />
        </nav>

        {/* BOTÓN LOGIN */}
        <div className="header-actions">
          <Link to="/login" className="login-btn">Ingresar</Link>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
