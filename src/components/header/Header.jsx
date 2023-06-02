import { useState } from 'react';
import './style.css';
import Logo from '../../assets/logo.svg';
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
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
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
              to="materiais"
              smooth={true}
              duration={500}
              >
              Materiais Degradantes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="lixoeletronico"
              smooth={true}
              duration={500}
              >
              Lixo Eletronico
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="descarte"
              smooth={true}
              duration={500}
             >
              Descarte Correto
            </ScrollLink>
          </li>
         
          <li>
            <ScrollLink
              to="legislação"
              smooth={true}
              duration={500}
             >
              Legislação
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