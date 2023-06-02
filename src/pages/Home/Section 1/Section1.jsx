import './style.css';
import { Link } from 'react-router-dom';

export default function Section1() {
    
  return (
  
    <div id="home" className="__fundo">
      <div className="container space-y-6">
        <h1 className="title">
          Impacto Ambiental de Tecnologias Modernas
        </h1>
        <p className="description">
        Descubra as implicações ambientais da inovação tecnológica. 
        Nesta jornada, exploraremos as Tecnologias que Prejudicam o Meio Ambiente.
        </p>
        <Link >
        <button className="Botão">
            Materiais Degradantes
        </button>
        </Link>
        
      </div>
    </div>
  
  );
}