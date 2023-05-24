import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={menuOpen ? 'open' : ''}>
        <div className="logo">
        <div className="flex text-2xl">
              <h1 className="font-extrabold text-lime-500">Echo</h1>
              <h1 className="text-gray-500">Logic</h1>
            </div>
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/legislacao">Legislação</Link></li>
        </ul>
        <button className="btn">Materiais</button>
        {menuOpen && (
          <button className="back-btn" onClick={handleMenuToggle}>
            Voltar
          </button>
        )}
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
  }