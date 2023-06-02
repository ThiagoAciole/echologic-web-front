import SlideCard from "./Card/SlideCard/SlideCard";
import Colaboradores from "./Organização/colaboradores";
import Section1 from "./Section 1/Section1";
import Sobre from "./Sobre/sobre";
import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import Cardt from "./Card/card";
import Contato from "./Contato/Contato";
export default function Home() {
  return (
    <>
      <div className="h-full ">
        <Section1 />
      </div>
      <div className="ml-12 mr-12">
        <Sobre />
      </div>

      <div id="materiais" className="mx-4 mt-24 h-full items-center flex flex-col space-y-8">
  <div className="space-y-8 sm:w-1/2 sm:p-8 mx-auto text-center">
    <h1 className="font-sans text-5xl font-extrabold text-gray-700">
      Conheça os Materiais que degradam o meio ambiente
    </h1>
    <p className="font-sans text-xl text-gray-700">
      Conheça os principais materiais utilizados na fabricação de equipamentos de informática e seu impacto ambiental
    </p>
  </div>
  <div className="flex justify-center">
    <SlideCard />
  </div>
</div>

      <div id="lixoeletronico">
        <CardImagemEsquerda
          titulo="Lixo Eletrônico"
          texto="Promover a conscientização, a responsabilidade socioambiental e construir novos sentidos é o intuito da Semana do Meio Ambiente (SEMA 2023), realizada entre os dias 5 e 7 de junho, durante os três turnos (manhã/tarde e noite). E traz como tema central “IFPB Campina Grande: protagonizando responsabilidade ambiental e gestão social”, a partir de muita interação acadêmica e artística por meio de oficinas, palestras, minicursos, rodas de conversas, aulas de campo, exposições, mostra científica e apresentações culturais."
          imagem="https://www.pgeletronica.com.br/media/sig_f0BVEu34gQ/produtos/sucata-lixo-eletronico/sucata-lixo-eletronico-36.jpeg"
        />
      </div>
      <div id="descarte">
        <CardImagemDireita
          titulo="Descarte correto"
          texto="Ao contrário do lixo comum, os equipamentos eletrônicos contêm materiais tóxicos e valiosos que precisam ser tratados de forma adequada. Para descartar corretamente seu lixo eletrônico, é importante buscar pontos de coleta especializados ou centros de reciclagem na sua região. Em Campina Grande-PB, identificamos dois pontos de coleta desse tipo especial de resíduo:."
          imagem="https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/06/lixo-eletronico-9.jpg?quality=80&strip=info&w=920"
        />
      </div>
      <div id="legislação" className="mt-12 h-full items-center flex flex-col sm:flex-col space-y-8">
  <div className="mx-4 sm:w-2/3 sm:p-8 mx-auto">
    <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center">
      Legislação
    </h1>
    <p className="mt-4 font-sans text-xl text-gray-700 text-center">
      A produção e o descarte de equipamentos de informática estão sujeitos a uma série de normas e leis ambientais que visam minimizar o impacto negativo desses dispositivos no meio ambiente. Essas regulamentações estabelecem diretrizes para a fabricação responsável, o uso sustentável dos recursos naturais e o descarte adequado dos equipamentos eletrônicos. Conhecer e cumprir essas leis é fundamental para garantir a sustentabilidade da indústria de tecnologia e preservar o meio ambiente. Aqui estão algumas normas e leis associadas ao tema:
    </p>
  </div>
  <div className="mt-8 h-full items-center flex flex-col sm:flex-col space-y-8">
    <div className="flex flex-col justify-between space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mx-4 sm:mx-auto">
      <Cardt
        name="RoHS"
        description="(Restrição de Substâncias Perigosas): Diretiva da União Europeia que restringe o uso de substâncias tóxicas, como chumbo, mercúrio, cádmio e cromo hexavalente, na fabricação de equipamentos elétricos e eletrônicos."
      />
      <Cardt
        name="WEEE"
        description="(Waste Electrical and Electronic Equipment): Diretiva da União Europeia que estabelece regras para a gestão e o tratamento adequado do lixo eletrônico, incluindo a coleta, reciclagem e recuperação de materiais dos equipamentos descartados."
      />
      <Cardt
        name="Energy Star"
        description="Programa internacional que certifica dispositivos eletrônicos energeticamente eficientes. O selo Energy Star indica que um produto atende a critérios específicos de economia de energia."
      />
    </div>
  </div>
  <div className="mt-8 h-full items-center flex flex-col sm:flex-col space-y-8">
    <div className="flex flex-col justify-between space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mx-4 sm:mx-auto">
      <Cardt
        name="Lei Nacional de Resíduos Sólidos"
        description="(Lei nº 12.305/2010) - Brasil: Estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, incluindo a gestão adequada do lixo eletrônico e a logística reversa, que obriga os fabricantes a implementar sistemas de coleta e reciclagem dos equipamentos descartados."
      />
      <Cardt
        name="EPA (Environmental Protection Agency)"
        description="Estados Unidos: A EPA regulamenta questões ambientais relacionadas à produção, uso e descarte de equipamentos eletrônicos, incluindo padrões de reciclagem e disposição final de substâncias tóxicas."
      />
      <Cardt
        name="ISO 14001"
        description="Norma internacional que estabelece critérios para um sistema de gestão ambiental eficaz. As empresas podem obter certificação ISO 14001 para demonstrar seu compromisso com a proteção ambiental e a conformidade com as regulamentações ambientais."
      />
    </div>
  </div>
</div>
<div id="contato" className="flex justify-center">

  <div className="w-2/3 mt-24">
  <h1 className="mb-6 font-sans text-3xl font-extrabold text-gray-700 text-center">Contato</h1>
    <Contato />
  </div>
</div>


      <div className=" h-full items-center flex flex-col sm:flex-col space-y-8">
        <Colaboradores />
      </div>
    
    </>
  );
}
