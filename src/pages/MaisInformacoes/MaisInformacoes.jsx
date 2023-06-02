import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardComLink from "../../components/CardComLink/CardComLink";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import semanaMeioAmbiente from "../../assets/imagensMaisInformacoes/semanaMeioAmbiente.png"
import lixoEletronico from "../../assets/imagensMaisInformacoes/lixoeletronico.png"


export default function MaisInformacoes() {
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <TextoComTitulo
          titulo="Mais Informações"
        />
        <CardImagemEsquerda
          titulo="Semana do meio ambiente"
          texto="Promover a conscientização, a responsabilidade socioambiental e construir novos sentidos é o intuito da Semana do Meio Ambiente (SEMA 2023), realizada entre os dias 5 e 7 de junho, durante os três turnos (manhã/tarde e noite). E traz como tema central “IFPB Campina Grande: protagonizando responsabilidade ambiental e gestão social”, a partir de muita interação acadêmica e artística por meio de oficinas, palestras, minicursos, rodas de conversas, aulas de campo, exposições, mostra científica e apresentações culturais."
          imagem={semanaMeioAmbiente}
        />
        <CardComLink
          titulo="Descarte correto"
          texto="Ao contrário do lixo comum, os equipamentos eletrônicos contêm materiais tóxicos e valiosos que precisam ser tratados de forma adequada. Para descartar corretamente seu lixo eletrônico, é importante buscar pontos de coleta especializados ou centros de reciclagem na sua região. Em Campina Grande-PB, identificamos dois pontos de coleta desse tipo especial de resíduo: "
          link1="SESUMA"
          link2="SCTI"
          imagem={lixoEletronico}
        />        
        <TextoComTitulo
          titulo="Dicas"
          texto="Prolongue a vida útil dos dispositivos com manutenção, limpeza e cuidados;
          Opte por equipamentos de qualidade, escolhendo boas marcas e construção;
          Considere adquirir equipamentos de segunda mão, que ainda estejam em boas condições;
          Faça a reciclagem correta se atentando as informações ditas anteriormente;
          Doe ou repasse dispositivos usados;
          Adote práticas de economia de energia ao utilizar seus dispositivos;
          Opte por dispositivos que possuam múltiplas funcionalidades integradas, para reduzir a necessidade de comprar vários equipamentos;
          Recicle cartuchos de tinta e toners, muitos fornecedores aceitam o retorno desses itens inclusive;
          Utilize serviços de armazenamento em nuvem, para economizar recursos físicos;
          Pegue tudo que aprender nessa semana e compartilhe o conhecimento ; ) 
          "
        />
        <TextoComTitulo
          titulo="Legislação"
          texto="RoHS (Restrição de Substâncias Perigosas): Restringe o uso de substâncias tóxicas, na fabricação de equipamentos elétricos e eletrônicos.

          WEEE (Waste Electrical and Electronic Equipment): Estabelece regras para a gestão e o tratamento adequado do lixo eletrônico.
          
          Energy Star: É um selo que indica que um produto atende a critérios específicos de economia de energia.
          
          Lei Nacional de Resíduos Sólidos (Lei nº 12.305/2010) - Brasil: Estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, incluindo a gestão adequada do lixo eletrônico e a logística reversa.
          
          EPA (Environmental Protection Agency) - Estados Unidos: A EPA regulamenta questões ambientais relacionadas à produção e ao descarte de equipamentos eletrônicos.
          
          ISO 14001: Norma internacional de gestão ambiental que estabelece critérios para a implementação de um sistema de gestão ambiental eficaz, desde a fabricação até o descarte responsável de equipamentos eletrônicos.
          "
        />

    </div>
  )
}
