import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import Referencias from "../../components/Referencias/Referencias"
import img1 from "../../assets/img_cadmio/Cadmium-crystal_bar.jpg"
import img2 from "../../assets/img_cadmio/bateria-de-celular.webp"
import img3 from "../../assets/img_cadmio/reciclagem.jpg"

export default function Cadmio() {

    const cadmio = {
        descricao: "O cádmio é um elemento metálico de transição com características semelhantes às do chumbo. É um metal macio, brilhante e facilmente moldável devido à sua baixa resistência à tração. Possui alta resistência à corrosão e baixo ponto de fusão, o que o torna durável e adequado para aplicações industriais, especialmente na eletrônica e na fabricação de baterias. No entanto, é importante destacar que o cádmio é tóxico tanto para os seres humanos quanto para o meio ambiente. A exposição prolongada a concentrações elevadas de cádmio pode causar danos à saúde, principalmente nos sistemas respiratório, renal e cardiovascular. Portanto, é necessário tomar precauções adequadas no manuseio e descarte desse metal para proteger a saúde e minimizar os impactos ambientais. \n\nEm resumo, o cádmio é um metal versátil com características físicas e químicas únicas, sendo valorizado por sua resistência à corrosão e maleabilidade. No entanto, devido à sua toxicidade, é essencial tomar medidas de segurança ao lidar com esse elemento, a fim de proteger a saúde humana e reduzir os impactos negativos no meio ambiente.",
        obtencao: "O cádmio é obtido principalmente como subproduto da produção de zinco a partir de minérios de zinco, como a esfalerita. O minério é extraído, triturado e moído para obter um concentrado de zinco, que passa por um processo de flotação para separá-lo dos outros minerais. O concentrado de zinco é então fundido e reduzido em fornos, resultando na formação de cádmio metálico como um subproduto. A reciclagem de baterias de níquel-cádmio e outros resíduos industriais também é uma fonte importante de obtenção de cádmio.",
        equipamentos: ["Baterias de níquel-cádmio (NiCd): As baterias NiCd são uma das aplicações mais comuns do cádmio. Elas são utilizadas em dispositivos eletrônicos, ferramentas sem fio, equipamentos médicos, brinquedos, entre outros.",
        "Componentes eletrônicos: Em alguns componentes eletrônicos, como interruptores, relés e conectores, o cádmio pode ser encontrado em ligas metálicas utilizadas para melhorar as propriedades de condução elétrica.",
        "Revestimentos: O cádmio é empregado em revestimentos e galvanização para proteger contra a corrosão. Pode ser encontrado em superfícies metálicas, como parafusos, porcas, pregos e peças de automóveis.",
        "Estabilizadores de plástico: O cádmio é utilizado como estabilizador em alguns tipos de plásticos, ajudando a aumentar sua durabilidade e resistência ao calor.",
        "Soldas: O cádmio é usado em ligas de solda para unir componentes eletrônicos, tubulações e outros materiais. No entanto, devido à sua toxicidade, esforços estão sendo feitos para substituir o cádmio por soldas mais seguras."],
        impacto: "Aqui estão alguns dos principais impactos ambientais associados ao cádmio: Contaminação do solo e da água: O cádmio pode se acumular no solo e ser transportado para corpos d'água por meio de processos naturais ou atividades humanas. Acumulação em cadeias alimentares: O cádmio pode ser absorvido por plantas e entrar na cadeia alimentar. Organismos que consomem plantas contaminadas com cádmio e seus predadores podem acumular o metal em seus tecidos. Efeitos tóxicos em organismos aquáticos: O cádmio é tóxico para organismos aquáticos, como peixes e invertebrados. A exposição a concentrações elevadas de cádmio pode levar a danos nos sistemas respiratório, renal, cardiovascular e reprodutivo desses organismos. Poluição do ar: A incineração de resíduos contendo cádmio, como baterias de níquel-cádmio, pode liberar o metal no ar na forma de partículas finas ou gases. Impactos na saúde humana: O cádmio é considerado um carcinógeno humano e pode causar danos aos sistemas respiratório, renal e cardiovascular em pessoas expostas a altas concentrações.",
        alternativa: ["Substituição por materiais alternativos: Uma das estratégias mais eficazes é substituir o uso de cádmio por materiais alternativos mais seguros. Por exemplo, nas baterias recarregáveis, o cádmio pode ser substituído por tecnologias mais modernas, como baterias de íons de lítio, que são mais seguras e possuem menor impacto ambiental.",
        "Reciclagem: A reciclagem de produtos que contêm cádmio, como as baterias, é fundamental para evitar a liberação deste metal no meio ambiente.",
        "Regulamentações e políticas: Governos e agências reguladoras podem implementar regulamentações mais rígidas para limitar o uso de cádmio em produtos de consumo e estabelecer diretrizes de descarte adequado.",
        "Educação e conscientização: A conscientização dos riscos associados ao cádmio e a promoção de boas práticas ambientais são fundamentais. Informar o público, empresas e profissionais sobre os perigos do cádmio e sobre alternativas mais seguras pode ajudar a promover a adoção de medidas preventivas e o uso responsável desse metal.",
        "Monitoramento e controle: É importante implementar programas de monitoramento e controle ambiental para detectar e controlar a presença de cádmio em áreas suscetíveis à contaminação."]
    }

    return(
      <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
          <CardImagemEsquerda
            titulo="Descrição do material"
            texto= {cadmio.descricao}
            imagem={img1}
          />
          <TextoComTitulo 
            titulo="Forma de Obtenção"
            texto={cadmio.obtencao}
          />
          <CardImagemLista
            titulo="Equipamentos que contém cádmio"
            p1="Alguns dos equipamentos que podem conter cádmio incluem:"
            lista={cadmio.equipamentos}
            imagem={img2}
            />
            <TextoComTitulo 
            titulo="Impacto ambiental"
            texto={cadmio.impacto}
          />
          <CardImagemLista
            titulo="Possíveis alternativas"
            p1="Existem várias alternativas e medidas que podem ser adotadas para diminuir os riscos ambientais e à saúde associados ao cádmio. Aqui estão algumas delas:"
            lista={cadmio.alternativa}
            imagem={img3}
          />
          <Referencias
                referencias={["CÁDMIO. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2021. Disponível em: <https://pt.wikipedia.org/w/index.php?title=C%C3%A1dmio&oldid=60954241>. Acesso em: 26 maio. 2023.",
                "OpenAI. (2021). ChatGPT [Modelo de linguagem de IA]. Disponível em: https://openai.com/. Acesso em: 26 maio. 2023"]}
            />
      </div>
    )
  };