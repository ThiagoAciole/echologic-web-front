import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"

export default function TelaPadrao() {

    const obtencao = ["Exploração: A primeira etapa é a identificação de depósitos de minério de berílio. Isso envolve pesquisas geológicas para localizar áreas com concentrações significativas do elemento.",
        "Mineração: Uma vez identificado o depósito, ocorre a mineração do minério de berílio. A extração pode ser feita por métodos a céu aberto ou subterrâneos, dependendo da localização e das características do depósito.",
        "Britagem e moagem: O minério bruto de berílio é transportado para a usina de processamento, onde é britado e moído em partículas menores. Esse processo visa preparar o minério para etapas subsequentes de concentração e refino.",
        "Concentração: O minério de berílio passa por um processo de concentração para separar e remover impurezas. Isso geralmente envolve técnicas de flotação, onde reagentes químicos são utilizados para separar os minerais de berílio de outros minerais presentes no minério.",
        "Refino: Após a concentração, o berílio ainda contém impurezas e precisa passar por etapas de refino para obter um produto de alta pureza. Essas etapas podem incluir processos químicos e físicos, como lixiviação, precipitação, filtração e aquecimento.",
        "Produção de ligas: O berílio refinado pode ser utilizado na produção de ligas, como cobre-berílio, que possuem propriedades específicas para aplicações industriais. A fabricação de ligas pode envolver a fusão do berílio refinado com outros metais em proporções adequadas."
    ]

    const equipamentos = ["Contatos elétricos: Devido à sua alta condutividade elétrica e resistência à corrosão, o berílio pode ser utilizado em contatos elétricos presentes em conectores, interruptores e componentes eletrônicos.",
    "Molas e contatos de memória: Algumas molas e contatos utilizados em módulos de memória, como módulos DIMM (Dual In-Line Memory Module), podem conter berílio em suas ligas para proporcionar melhor desempenho elétrico e durabilidade.",
    "Fabricação de ligas metálicas: o berílio é empregado para aumentar a resistência de ligas metálicas, sendo combinado principalmente com cobre, formando uma liga de alta maleabilidade e resistência. Essas ligas são aplicadas no setor automobilístico, aeroespacial e de informática. Ligas metálicas de berílio com outros metais, como magnésio, alumínio, níquel e cobre, são aplicadas na fabricação de peças para aeronaves, helicópteros e produtos bélicos.",
    "Equipamentos de diagnóstico por imagem: o berílio é aplicado na fabricação de peças de equipamento raio-x, por ser um elemento radiotransparente.",
    "Setor de peças ornamentais e jóias: o berílio está presente na constituição de várias rochas naturais que se enquadram no conceito de pedra preciosa, como esmeralda, água-marinha, morganita, heliodoro e bixbita — essa última é uma pedra rara de cor avermelhada que pode ser encontrada no Brasil.",
    "Reatores nucleares: o berílio e suas ligas são empregados como moderadores nos reatores nucleares, por terem a característica de absorção de radiação.",
    "Refino de metais: por ser um elemento com alto potencial de redução, o berílio é usado no tratamento de outros metais, participando do processo de eletrorredução.",
    "Lâmpadas fluorescentes: o berílio está presente na composição dos tubos de revestimento das lâmpadas fluorescentes criadas por Nikola Tesla."
    ]

    const impactos = [
        "Mineração: A extração do berílio pode causar danos ambientais, como a remoção da vegetação, a perturbação do solo e a contaminação dos recursos hídricos locais.",
        "Produtos químicos tóxicos: Durante o processo de extração e produção do berílio, podem ser liberados produtos químicos tóxicos, como o berílio metálico e seus compostos, que representam riscos à saúde humana e à vida selvagem.",
        "Poluição industrial: A produção de ligas de berílio envolve o uso de produtos químicos perigosos que podem ser liberados no ar e na água, causando poluição ambiental e representando riscos para a saúde.",
        "Descarte inadequado: O descarte inadequado de resíduos contendo berílio pode resultar em contaminação do solo e da água, prejudicando os ecossistemas locais e a vida selvagem.",
        "Regulamentações e práticas de segurança: Muitos países têm implementado regulamentações e práticas de segurança mais rigorosas para minimizar os impactos negativos do berílio, incluindo tecnologias de controle de poluição, medidas de proteção dos trabalhadores e gestão adequada de resíduos."
    ]

    const alternativas = ["Reciclagem: Promover a reciclagem de equipamentos eletrônicos e ligas de berílio pode reduzir a necessidade de extração de novos recursos e minimizar o descarte inadequado de resíduos contendo berílio. Empresas e consumidores podem buscar programas de reciclagem apropriados e garantir que os materiais sejam tratados de forma segura e ambientalmente responsável.",
    "Alternativas de materiais: Pesquisar e desenvolver alternativas de materiais que possam substituir o berílio em aplicações específicas na tecnologia da informação. Isso inclui a identificação de ligas sem berílio ou o uso de materiais não tóxicos com propriedades similares.",
    "Gestão adequada de resíduos: Implementar práticas de gestão adequada de resíduos, incluindo a coleta, o armazenamento e o descarte correto de resíduos contendo berílio. Isso envolve seguir regulamentações ambientais e garantir que os resíduos sejam tratados por empresas especializadas e licenciadas.",
    "Controle de poluição: Adotar tecnologias e práticas de controle de poluição em processos de produção que envolvam o uso de berílio. Isso pode incluir o uso de sistemas de filtragem e captura de emissões para minimizar a liberação de produtos químicos tóxicos no ar e na água.",
    "Conscientização e educação: Promover a conscientização sobre os impactos ambientais e para a saúde associados ao berílio, tanto entre os trabalhadores da indústria quanto entre os consumidores. Educar sobre as melhores práticas de manuseio, descarte e reciclagem pode ajudar a reduzir os riscos e incentivar a adoção de medidas mais sustentáveis.",
    "Essas medidas combinadas podem contribuir para a redução do impacto ambiental do berílio, protegendo o meio ambiente e a saúde humana. É importante que governos, indústrias e consumidores trabalhem juntos para implementar essas ações e buscar soluções mais sustentáveis."
    ]

    const referencias = ["Divisão de Toxicologia Humana e Saúde Ambiental. Berílio. URL: https://cetesb.sp.gov.br/laboratorios/wp-content/uploads/sites/24/2019/01/Ber%C3%ADlio.pdf",
    "COUTO, Roberto Ottoni Portela. TECNOLOGIA ALTERNATIVA PARA PRODUÇÃO DE BERíLIO METÁLICO. URL: http://mineralis.cetem.gov.br/bitstream/cetem/268/1/sed-39.pdf .",
    "DE ARAÚJO. Laysa Bernardes Marques. Berílio (Be). URL: https://www.preparaenem.com/quimica/berilio-be.htm ",
    "OpenAI. (2023). Texto gerado pelo modelo de linguagem ChatGPT. Acesso em 26 de maio de 2023.."
    ]

  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <CardImagemDireita
          titulo="Descrição"
          texto="O berílio puro é um metal duro acinzentado, o mais leve de todos os metais, encontrado em rochas minerais, carvão, solo e poeira vulcânica. A maior parte do berílio extraído é convertida em ligas usadas na fabricação de peças elétricas e eletrônicas ou como materiais de construção para máquinas e moldes para plásticos. As ligas de berílio também são usadas em automóveis, computadores, equipamentos esportivos como tacos de golfe e quadros de bicicletas e em pontes dentárias. O metal puro é usado na fabricação de armas nucleares e reatores, aeronaves e estruturas de veículos espaciais, instrumentos, máquinas de raios X e espelhos. O óxido de berílio também feito de minérios de berílio é usado em cerâmicas especiais para aplicações elétricas e de alta tecnologia."
          imagem="https://s5.static.brasilescola.uol.com.br/be/2021/09/amostra-berilo.jpg"
        />
        <CardImagemLista
          titulo="Forma de Obtenção"
          texto="O Brasil está entre os países do mundo que possuem minérios de berílio, em quantidade e teor de BeC, que justificam seu aproveitamento econômico. Apesar disto, até o presente momento, o país não tem tirado proveito desta situação privilegiada, porquanto vem atuando, historicamente, como mero exportador do mineral benlo, sendo obrigado a importar do exterior componentes ou equipamentos que contém Be elou suas ligas, tais como, computadores, instrumentos industriais, chaves elétricas sem fagulhamento etc, pagando um preço consideravelmente maior do que o do minério. O berílio é obtido principalmente por meio do processo de mineração e refino:"
          lista={obtencao}
          imagem="https://s1.static.brasilescola.uol.com.br/be/2021/09/amostra-berilio.jpg"
        />

        <CardImagemLista
          titulo="Equipamentos"
          texto="Partes do equipamento de TI que contém o material (que usa o material na fabricação)"
          lista={equipamentos}
          imagem="https://www.imperiodosmetais.com.br/blog/wp-content/uploads/2021/08/cobre-berilio.jpg"
        />

        <CardImagemLista
          titulo="Impacto Ambiental"
          texto=""
          lista={impactos}
          imagem="https://static.dw.com/image/57172467_605.jpg"
        />

        <CardImagemLista
          titulo="Possíveis Alternativas"
          texto="Existem algumas formas de amenizar o impacto do berílio no meio ambiente, como:"
          lista={alternativas}
          imagem="https://www.vertown.com/uploads/2018/05/eletronicos_3.jpg"
        />
       <Referencias
            referencias ={referencias}
        />
    </div>
  )
}
