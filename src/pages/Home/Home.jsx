import SlideCard from "./Card/SlideCard/SlideCard";
import Colaboradores from "./Organização/colaboradores";
import Section1 from "./Section 1/Section1";
import Sobre from "./Sobre/sobre";


export default function Home() {
  return (
    <>
      <div className="h-full ">
        <Section1 />
      </div>
      <div className="ml-12 mr-12">
        <Sobre />
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
        
      </div>
      <div className="mt-24 h-full items-center flex flex-col sm:flex-col space-y-8">
        <Colaboradores />
      </div>
    </>
  );
}
