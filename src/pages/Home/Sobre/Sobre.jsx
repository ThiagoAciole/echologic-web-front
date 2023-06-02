import "./sobre.css";
import Sema from "../../../assets/1.svg";

export default function Sobre() {
  return (
    
    <div
      id="sobre"
      className="mt-24 h-full items-center flex flex-col sm:flex-row space-y-8"
    >
      <div className="space-y-8 sm:w-1/2 sm:p-8">
        <h1 className="font-sans text-5xl font-extrabold text-gray-700">
          Semana Do Meio Ambiente
        </h1>
        <p className="font-sans text-xl text-gray-700 ">
          Bem Vindo Nosso site dedicado a Semana do Meio Ambiente aqui
          abordaremos o impacto ambiental da utilização de materiais na
          construção de equipamentos de informática. Buscamos conscientizar
          sobre o impacto ambiental da indústria de informática e promover
          alternativas sustentáveis. Oferecemos informações detalhadas sobre os
          materiais utilizados, seu ciclo de vida e consequências ambientais.
          Destacamos alternativas sustentáveis, incentivamos a reciclagem e o
          descarte adequado dos dispositivos eletrônicos. Queremos promover
          mudanças positivas na indústria de tecnologia, compartilhando
          conhecimentos, estudos de caso e recursos para capacitar os usuários a
          tomar decisões informadas e responsáveis.
        </p>
        <div>
          <a
            href="http://even3.com.br/semaifpbcg2023/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn text-2xl rounded-full">
              Inscreva-se na Semana do Meio Ambiente
            </button>
          </a>
        </div>
      </div>
      <div className="sm:w-1/2">
        <img src={Sema} alt="" className="object-cover h-full w-full " />
      </div>
    </div>
  );
}
