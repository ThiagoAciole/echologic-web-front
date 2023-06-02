import SlideCard from "./Card/SlideCard/SlideCard";
import Colaboradores from "./Organização/colaboradores";
import Section1 from "./Section 1/Section1";
import Sobre from "./Sobre/sobre";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-full ">
        <Section1 />
      </div>
      <div className="ml-12 mr-12">
        <Sobre />
      </div>
      <div className="mt-24 h-full items-center flex flex-col sm:flex-col space-y-8">
        <Colaboradores />
      </div>
      <div
        id="lixoEletronico"
        className="mt-24 h-full items-center flex flex-col sm:flex-col space-y-8"
      >
        <div className="space-y-8 sm:w-1/2 sm:p-8 mx-auto ">
          <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center">
            Conheça os Materiais que degradam o meio ambiente
          </h1>
          <p className="font-sans text-xl text-gray-700 text-center">
            Conheça os principais materiais utilizados na fabricação de
            equipamentos de informática e seu impacto ambiental
          </p>
        </div>
      </div>
      <div>
        <SlideCard/>
      </div>
      <div
        id="maisInfo"
        className="mt-24 h-full items-center flex flex-col space-y-8 text-center mx-auto p-6 "
      >
        <h1 className="font-sans text-5xl font-extrabold text-gray-700 w-full sm:w-1/2">
          Mais Informações Sobre o Lixo Eletrônico e Seu devido Descarte
        </h1>
        <p className="font-sans text-xl text-gray-700">
          Descubra tudo sobre o descarte correto do lixo eletrônico e a
          legislação que o envolve. Entenda por que é tão importante agir de
          forma responsável ao se livrar de seus dispositivos antigos. Saiba
          como você pode contribuir para a proteção do meio ambiente e evitar
          problemas legais. Clique aqui para obter mais informações sobre o tema
          e fique por dentro de todas as orientações e regulamentações
          relacionadas ao descarte adequado de lixo eletrônico.
        </p>
        <Link to="/mais-informacoes">
          <button className="btn">Saiba Mais</button>
        </Link>
      </div>
    </>
  );
}
