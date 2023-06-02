import Cardt from "../Card/card";
/* eslint-disable react/prop-types */
import Sema from "../../../assets/sema.svg";

export default function CardSema() {
  return (
    <div className="mt-8 h-full items-center flex flex-col sm:flex-col space-y-8">
    <div className="flex flex-col justify-between space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mx-4">
      <Cardt
        name="Semana do Meio Ambiente"
        description="Promover a conscientização, a responsabilidade socioambiental e construir novos sentidos é o intuito da Semana do Meio Ambiente (SEMA 2023), realizada entre os dias 5 e 7 de junho, durante os três turnos (manhã/tarde e noite). E traz como tema central “IFPB Campina Grande: protagonizando responsabilidade ambiental e gestão social”, a partir de muita interação acadêmica e artística por meio de oficinas, palestras, minicursos, rodas de conversas, aulas de campo, exposições, mostra científica e apresentações culturais."
        link="https://www.even3.com.br/semaifpbcg2023/"
        url=""
        image={Sema}
      />


    </div>
  </div>


  
   
  );
}