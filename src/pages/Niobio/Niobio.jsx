import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import niobio from "../../assets/FotosNiobio/niobio.jpg";
import columbita from "../../assets/FotosNiobio/columbita.jpg";
import qubit from "../../assets/FotosNiobio/qubit.jpg";
import impacto from "../../assets/FotosNiobio/impactos.png";
import monitoramento from "../../assets/FotosNiobio/monitoramento.jpg";
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista";
import Referencias from "../../components/Referencias/Referencias";

export default function Niobio() {
  const Impacto = [
    "Desmatamento e degradação ambiental: A mineração de nióbio geralmente requer a remoção da vegetação e a escavação do solo, o que pode resultar em desmatamento e degradação do habitat natural. Isso pode levar à perda de biodiversidade e alterações no ecossistema local.",
     "Consumo de água e contaminação: A extração de nióbio pode exigir grandes quantidades de água para processos de lavagem e separação. O uso excessivo de água pode levar à escassez de recursos hídricos em áreas onde a mineração ocorre. Além disso, a contaminação da água por substâncias químicas usadas no processamento do nióbio pode ocorrer, afetando negativamente a qualidade da água e a vida aquática.",
     "Emissões de gases de efeito estufa: O processo de produção de nióbio pode envolver o uso de energia intensiva, resultando na emissão de gases de efeito estufa, como dióxido de carbono (CO2). Essas emissões contribuem para o aquecimento global e as mudanças climáticas.",
     "Geração de resíduos e rejeitos: A produção de nióbio pode gerar uma quantidade significativa de resíduos e rejeitos, como rochas estéreis e lamas resultantes do processamento. A disposição inadequada desses resíduos pode contaminar o solo e a água, impactando negativamente os ecossistemas circundantes." 
    ]
  const solucoes = [
    "Mineração responsável: Implementar práticas de mineração responsáveis, como a recuperação de áreas degradadas, o replantio de vegetação nativa e a minimização do desmatamento. Além disso, garantir a conformidade com as regulamentações ambientais e promover a transparência nas operações de mineração.",
    "Eficiência no uso de recursos: Melhorar a eficiência no uso de recursos naturais, como água e energia, durante o processo de extração e processamento do nióbio. Isso pode ser alcançado por meio de tecnologias mais eficientes, reciclagem de água e utilização de fontes de energia limpa e renovável.",
    "Gerenciamento de resíduos: Desenvolver métodos adequados de gerenciamento de resíduos para reduzir o impacto dos resíduos gerados durante a produção de nióbio. Isso inclui a implementação de práticas de reciclagem e reutilização de resíduos, bem como a disposição segura e adequada dos rejeitos.",
    "Monitoramento ambiental: Estabelecer programas de monitoramento ambiental para acompanhar os impactos da produção de nióbio na qualidade do ar, da água e do solo. Isso ajuda a identificar problemas ambientais precocemente e permite a implementação de medidas corretivas efetivas.",
    "Inovação tecnológica: Investir em pesquisa e desenvolvimento de tecnologias mais sustentáveis para a produção de nióbio. Isso inclui o desenvolvimento de processos de extração e processamento mais eficientes e com menor impacto ambiental, bem como o uso de energia renovável nas operações de mineração.",
    "Responsabilidade social e engajamento das partes interessadas: Promover a responsabilidade social corporativa e o envolvimento das partes interessadas, incluindo comunidades locais e organizações ambientais, para garantir práticas sustentáveis na produção de nióbio. Isso envolve o diálogo aberto, a participação e o apoio às comunidades afetadas, além da promoção de boas práticas ambientais."
  ]
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <CardImagemDireita
          titulo="Descrição do Material"
          texto="O nióbio (Nb) é um metal refratário conhecido por sua excepcional resistência ao calor e ao desgaste. Além de possuir um brilho característico e baixa dureza, 
          o nióbio é um excelente condutor elétrico e exibe notável resistência à corrosão.
           Devido a essas propriedades singulares, o nióbio encontra uma ampla gama de aplicações, desde sua utilização na produção de aço até sua contribuição na fabricação de foguetes."
          imagem = {niobio}
        />
        <CardImagemEsquerda
          titulo="Forma de obtenção"
          texto="Esse elemento não é encontrado puro na natureza e sim naturalmente em minerais como a columbita, frequentemente associado a outros elementos, especialmente o tântalo, devido às suas propriedades físico-químicas altamente similares. "
          imagem= {columbita}
        />
        <CardImagemDireita
          titulo="Partes de equipamento que contém o material"
          texto="Na computação a principal utilização do nióbio é na computação quântica, o  Qubit(bit quântico) de nióbio é considerado um supercondutor mais estável do que qualquer outro já inventado. Essa tecnologia diminui a presença de erros, visto que não dispensa outros mentais evitando interferência no processamento de qubits. Com qubit de nióbio é possível integrar as unidades lógicas quânticas aos computadores eletrônicos atuais. A tecnologia foi descoberta e está sendo desenvolvida pelo pesquisador Atsushi Kobayashi e seus colegas da Universidade de Tóquio, no Japão.
          Por ser um ótimo condutor,  o nióbio pode também ser utilizado em circuitos integrados, capacitores e memórias não voláteis."
          imagem={qubit}
        />
        <CardImagemLista
          titulo="Impacto ambiental"
          lista={Impacto}
          imagem={impacto}
        />
        <CardImagemLista
          titulo="Possíveis soluções"
          lista={solucoes}
          imagem={monitoramento}
        />
        <Referencias
                referencias={["FERREIRA, Victor Ricardo. 'Nióbio'; Brasil Escola. Disponível em: https://brasilescola.uol.com.br/quimica/niobio.htm. Acesso em 27 de maio de 2023.",
                    "Flávia Marinho.'Qubit de nióbio supercondutor, a tecnologia que diminui erros, integra computação eletrônica e promete revolucionar os computadores quânticos no mundo!'. Disponível em:https://clickpetroleoegas.com.br/qubit-de-niobio-supercondutor-a-nova-tecnologia-que-diminui-erros-integra-computacao-eletronica-e-promete-revolucionar-os-computadores-quanticos-no-mundo/ . Acesso em 27 de maio de 2023.",
                    "OpenAI. (2021). ChatGPT [Modelo de linguagem de IA]. Disponível em: https://openai.com/. Acesso em: 24/05/2023."
                ]}
            />
        
    </div>
  )
};