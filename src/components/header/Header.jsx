import { useState } from 'react';
import './style.css';

import { Link as ScrollLink } from 'react-scroll';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
              >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="sobre"
              smooth={true}
              duration={500}
              >
              Sobre
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="lixoEletronico"
              smooth={true}
              duration={500}
              >
              Materiais Degradantes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="maisInfo"
              smooth={true}
              duration={500}
              >
              Mais Informações
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contato"
              smooth={true}
              duration={500}
             >
              Contato
            </ScrollLink>
          </li>
        </ul>
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
  
      </>
  );
  }