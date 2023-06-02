import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import Referencias from "../../components/Referencias/Referencias"
import img1 from "../../assets/img_silicio/silicio.jpg"
import img2 from "../../assets/img_silicio/b0900b47e07576dc7bac49faad11e73e.webp"
import img3 from "../../assets/img_silicio/4dc6a6754a32ce54e3869cd508256e84.webp"
import img4 from "../../assets/img_silicio/energia-renovável.png"

export default function Silicio() {

    const silicio = {
        descricao: "O silício é um elemento químico amplamente utilizado na indústria eletrônica e na fabricação de dispositivos semicondutores. Como um material semicondutor, o silício possui propriedades que permitem controlar o fluxo de elétrons em sua estrutura cristalina. Isso o torna essencial para o funcionamento de transistores, diodos e circuitos integrados, bem como na produção de células solares fotovoltaicas. Além disso, o silício é encontrado em ligas metálicas, vidros, cerâmicas e compostos químicos, sendo um material versátil e de grande importância na tecnologia e na indústria",
        obtencao: ["1. Mineração: Os minerais de sílica, como o quartzo, são extraídos por meio de mineração a céu aberto ou subterrânea.",
        "2. Beneficiamento: Após a extração, o minério de sílica passa por um processo de beneficiamento para separar a sílica pura do material indesejado. Esse processo pode envolver trituração, moagem e classificação do minério.",
        "3. Redução: O mineral de sílica (SiO2) é então submetido a um processo de redução carbotérmica, onde é combinado com carbono é aquecido em altas temperaturas (cerca de 2.000°C) em um forno elétrico. Isso resulta na separação do oxigênio do silício, formando silício fundido.",
        "4. Purificação: O silício obtido a partir do processo de redução carbotérmica contém impurezas que precisam ser removidas para uso em aplicações eletrônicas. Para isso, o silício passa por um processo de purificação, como o processo Siemens mencionado anteriormente."],
        equipamentos: ["1. Transistores", "2. Diodos", "3. Circuitos Integrados", "4. Células Solares Fotovoltaicas", "5. Dispositivos de potência"],
        impacto: "A produção de silício pode ter alguns impactos ambientais significativos, especialmente em termos de energia e uso de recursos naturais. Aqui estão alguns dos principais impactos ambientais associados ao processo de produção de silício: \nUso intensivo de energia: A produção de silício requer altas temperaturas e processos energeticamente intensivos. Isso resulta em um consumo considerável de energia, que muitas vezes é obtida a partir de fontes não renováveis, como combustíveis fósseis.\nEmissões de gases de efeito estufa: O processo de produção de silício, especialmente a etapa de redução carbotérmica, libera gases de efeito estufa, como dióxido de carbono (CO2) e monóxido de carbono (CO).\nUso de recursos naturais: A produção de silício requer a extração de minerais, como a sílica (dióxido de silício), que é abundante na crosta terrestre. No entanto, a mineração de minerais de silício pode exigir a remoção e a escavação de grandes quantidades de solo e rochas, afetando os ecossistemas locais. \nResíduos e poluição: Durante o processo de produção de silício, há a geração de resíduos sólidos e efluentes líquidos que podem conter substâncias tóxicas ou poluentes, como metais pesados ou produtos químicos utilizados no beneficiamento e purificação.",
        alternativa: ["1. Eficiência energética: Melhorar a eficiência energética dos processos de produção de silício pode reduzir significativamente o consumo de energia.",
        "2. Energias renováveis: Utilizar fontes de energia renovável, como solar, eólica ou hidrelétrica, na produção de silício.",
        "3. Reciclagem: Promover a reciclagem de componentes eletrônicos e resíduos contendo silício pode reduzir a necessidade de extração de novos minerais e diminuir a quantidade de resíduos que vão parar em aterros sanitários.",
        "4. Desenvolvimento de materiais alternativos: Investir em pesquisas e desenvolvimento de materiais alternativos aos semicondutores de silício pode abrir caminho para a produção de componentes eletrônicos mais sustentáveis."]
    }

    return(
      <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
          <CardImagemEsquerda
            titulo="Descrição do material"
            texto= {silicio.descricao}
            imagem={img1}
          />
          <CardImagemLista 
            titulo="Forma de Obtenção"
            p1="O silício não é obtido por meio de mineração direta, pois não ocorre naturalmente em estado metálico puro na natureza. No entanto, é possível obter silício a partir de minerais ricos em silício, como a sílica (dióxido de silício - SiO2) ou o quartzo."
            p2="A obtenção do silício a partir desses minerais envolve um processo chamado de metalurgia extrativa, que inclui as seguintes etapas:"
            lista={silicio.obtencao}
            imagem={img2}
          />
          <CardImagemLista
            titulo="Equipamentos que contém silicio"
            p1="O silício é amplamente utilizado na fabricação de diversos componentes eletrônicos. Alguns dos principais componentes eletrônicos que contêm silício incluem:"
            lista={silicio.equipamentos}
            imagem={img3}
            />
          <TextoComTitulo 
            titulo="Impacto ambiental"
            texto={silicio.impacto}
          />
          <CardImagemEsquerda
            titulo="Possíveis alternativas"
            texto={silicio.alternativa}
            imagem={img4}
          />
          <Referencias
                referencias={["O que é silício?. Ecycle. Disponível em: https://www.ecycle.com.br/silicio/. Acesso em 28 de maio de 2023.",
                "Porto Editora–silício na Infopédia [em linha]. Porto: Porto Editora. Acesso em: 28 de maio de 2023. Disponível em https://www.infopedia.pt/$silicio",
                "OpenAI. (2023). Texto gerado pelo modelo de linguagem ChatGPT. Acesso em  28 de maio de 2023."]}
            />
      </div>
    )
  };