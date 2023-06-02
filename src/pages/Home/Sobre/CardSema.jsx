import {  Text, Metric, Flex, Button } from "@tremor/react";
/* eslint-disable react/prop-types */
import Sema from "../../../assets/sema.svg";

export default function CardSema() {
  return (
   
<div className="border p-6 rounded-lg content-between shadow h-auto flex flex-col items-center">
  <img src={Sema} alt="" className="mb-4 w-60" />
  <div className="flex flex-col items-center justify-between flex-grow">
    <div className="flex-grow">
    </div>
    <Metric className="text-center">Semana do Meio Ambiente</Metric>
    <Flex className="mt-4">
      <Text>Promover a conscientização, a responsabilidade socioambiental e construir novos sentidos é o intuito da Semana do Meio Ambiente (SEMA 2023), realizada entre os dias 5 e 7 de junho, durante os três turnos (manhã/tarde e noite). E traz como tema central “IFPB Campina Grande: protagonizando responsabilidade ambiental e gestão social”, a partir de muita interação acadêmica e artística por meio de oficinas, palestras, minicursos, rodas de conversas, aulas de campo, exposições, mostra científica e apresentações culturais.</Text>
    </Flex>
    <div>
        <a
            href="http://even3.com.br/semaifpbcg2023/"
            target="_blank"
            rel="noopener noreferrer"
          >
        <Button className="mt-4 items-center" size="sm" color="green">
        Inscreva-se na Semana do Meio Ambiente
        </Button>
      </a>
    </div>
  </div>
</div>

  
   
  );
}