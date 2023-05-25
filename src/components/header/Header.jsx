import { useState } from 'react';
import './style.css';

import { Link as ScrollLink } from 'react-scroll';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleScrollToTop = () => {
    scroll.scrollToTop(Header);
  };
  return (
    <><header>
      <nav className={menuOpen ? 'open' : ''}>
        <div className="logo">
          <div className="flex text-2xl">
            <h1 className="font-extrabold text-lime-500">Echo</h1>
            <h1 className="text-gray-500">Logic</h1>
          </div>
        </div>
        <ul className="menu">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={handleMenuToggle}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="sobre"
              smooth={true}
              duration={500}
              onClick={handleMenuToggle}>
              Sobre
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="legislação"
              smooth={true}
              duration={500}
              onClick={handleMenuToggle}>
              Legislação
            </ScrollLink>
          </li>
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
    <button className="scroll-top-btn" onClick={handleScrollToTop}>
        Voltar ao topo
      </button>
      </>
  );
  }