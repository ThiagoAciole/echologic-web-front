import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"

export default function TelaPadrao() {
    const equipamentos = ["Pilhas e baterias:  São muito utilizadas para alimentação de circuitos, microcontroladores, computadores e dispositivos eletrônicos. Ambas enquadram-se na categoria de fontes elétricas, geradas por energia potencial química sendo composta por diversos elementos tóxicos.",
    "Telas de computador: Alguns LCDs mais antigos utilizam a retroiluminação CCFL (Cold Cathode Fluorescent Lamp) que utiliza mercúrio e outros elementos tóxicos no cristal líquido para produção de luz fluorescente."
    ]

    const impactos = ["Poluição do solo e águas: Devido a mineração e descarte inadequado, muitas vezes ocorre a liberação do mercúrio no ambiente, prejudicando fauna e flora devido a sua alta toxicidade.",
    "Emissão de gases tóxicos: Durante o processamento do mercúrio são liberados gases de elevada toxicidade, que podem causar problemas de saúde gravíssimos a quem os inalar.",
    "Contaminação por uso inadequado: Quando manuseado inadequadamente, o mercúrio se deposita nos tecidos biológicos, afetando o sistema nervoso central causando problemas na coordenação motora, insônia, alucinações e deficiências neurológicas diversas, além destes o mesmo também pode prejudicar órgãos internos como os rins, fígado e pulmão, podendo causar mau funcionamento dos mesmos.",
    "Contaminação por inalação: o mercúrio se inalado em sua forma gasosa, pode causar problemas como anorexia, fadiga e perfuração de órgãos digestivos.",
    "Contaminação por ingestão: caso ingerido o mesmo pode causar úlceras e necrose no trato gastrointestinal."
    ]

    const alternativas = ["Novas alternativas para as backlights: Com os avanços constantes, cada vez mais o CCFL(Cold Cathode Fluorescent Lamp) que possuía mercúrio em suas lâmpadas foi caindo em desuso, dando espaço para tecnologias como o LED, ou OLED e o Plasma.",
    "Novos tipos de pilhas e baterias: Com o aparecimento de novos tipos de bateria com cada vez maior tempo de duração, as pilhas e baterias de mercúrio foram gradativamente substituídas por outros tipos, como as baterias e pilhas alcalinas, de prata, íons-lítio, etc."
    ]

    const referencias = ["CHEUNG, B. As telas de LCD são perigosas? Disponível em: <https://www.orientdisplay.com/pt/are-lcd-screens-dangerous/>. Acesso em: 27 maio. 2023.",
    "CINÁBRIO- HgS .Disponível em: <https://www.ufrgs.br/minmicro/Cin%C3%A1brio.pdf>. Acesso em: 26 maio. 2023.",
    "Como o mercúrio contamina o meio ambiente e quais as consequências. Disponível em: <https://www.nationalgeographicbrasil.com/meio-ambiente/2023/02/como-o-mercurio-contamina-o-meio-ambiente-e-quais-as-consequencias>. Acesso em: 26 maio. 2023.",
    "Contaminação por mercúrio. Disponível em: <https://brasilescola.uol.com.br/quimica/contaminacao-por-mercurio.htm>. Acesso em: 26 maio. 2023.",
    "De baterias a joias: conheça alternativas ao mercúrio tóxico presente no nosso dia a dia. Disponível em: <https://www.unep.org/pt-br/noticias-e-reportagens/story/de-baterias-joias-conheca-alternativas-ao-mercurio-toxico-presente-no>. Acesso em: 29 maio. 2023.",
    "ECYCLE, E. O que é mercúrio e quais são seus impactos? Disponível em: <https://www.ecycle.com.br/mercurio/>. Acesso em: 26 maio. 2023.",
    "ESCOUTO, N. Baterias Utilizadas em Eletrônicos: Conheça os Principais Tipos. Disponível em: <https://blog.bbbaterias.com.br/baterias-utilizadas-em-eletronicos-conheca-os-principais-tipos/>. Acesso em: 28 maio. 2023.",
    "HIGA, P.; MARQUES, A. O que é CCFL? Entenda a tecnologia de backlight usada em telas LCD. Disponível em: <https://tecnoblog.net/responde/o-que-ccfl-backlight/>. Acesso em: 29 maio. 2023.",
    "LIMA, A. L. L. Mercúrio (Hg). Disponível em: <https://mundoeducacao.uol.com.br/quimica/metal-mercurio.htm>. Acesso em: 26 maio. 2023.",
    "Mercúrio. Disponível em: <https://www.cevs.rs.gov.br/mercurio>. Acesso em: 26 maio. 2023.",
    "Mercúrio (Hg). Disponível em: <https://brasilescola.uol.com.br/quimica/metal-mercurio.htm>. Acesso em: 26 maio. 2023.",
    "Mercúrio: Metal perigoso para o homem e para o ambiente. Disponível em: <https://educacao.uol.com.br/disciplinas/quimica/mercurio-metal-perigoso-para-o-homem-e-para-o-ambiente.htm>. Acesso em: 26 maio. 2023.",
    "MERCÚRIO - Hg.Disponível em: <https://www.ufrgs.br/minmicro/Merc%C3%BArio.pdf>. Acesso em: 26 maio. 2023."
    ]

  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <CardImagemDireita
          titulo="Descrição"
          texto="O mercúrio é um metal pesado de cor “branco-prateada” , caracterizado por ser o único elemento metálico líquido em temperatura ambiente e também pela sua toxicidade. É amplamente utilizado na indústria, destacando-se na produção de componentes eletroeletrônicos."
          imagem="https://images.squarespace-cdn.com/content/v1/54884604e4b08e455df8d6ff/1491257616088-IGK8OTCO1MVN6IGN2DKX/image-asset.jpeg"
        />
        <CardImagemEsquerda
          titulo=" Forma de obtenção"
          texto="O mercúrio possui baixa quantidade na crosta terrestre (cerca de 0,08 gramas por tonelada de rocha) e dificilmente é encontrado puro na natureza, normalmente estando em associações com outros minerais como a pirita, o ouro mercuriano,o quartzo,a prata mercuriana, etc, sendo sua principal fonte de extração o mineral cinábrio(HgS) também conhecido como sulfeto de mercúrio II, que possui cerca de 86% de mercúrio em sua composição, sendo obtido a partir da mineração.
          As formas de processamento de minerais para a obtenção de mercúrio são as mais diversas, mas pode-se destacar o processo de ustulação de sulfetos, onde é feito o aquecimento do cinábrio em fornos com ar atmosférico, onde devido a presença do oxigênio o mercúrio se desprende do enxofre, sendo posteriormente adquirido.
          Infelizmente tanto os métodos de extração quanto o de processamento do mercúrio são extremamente perigosos, devido à alta toxicidade do mesmo."
          imagem="https://media-cdn.tripadvisor.com/media/photo-s/0b/0c/45/59/cinabrio.jpg"
        />
        <CardImagemLista 
          titulo="Equipamento"
          texto="Existem diversos equipamentos eletrônicos e de informática que contém Mercúrio em sua composição, entre eles:"
          lista={equipamentos}
          imagem="https://files.tecnoblog.net/wp-content/uploads/2023/03/6-estrutura-lcd-ccfl-1060x596.png"
        />

        <CardImagemLista 
          titulo="Impacto ambiental"
          texto="O uso do mercúrio tem diversos impactos negativos, sendo eles tanto ambientais, quanto a saúde do indivíduo que o manuseia, como:"
          lista={impactos}
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPFTWn634Ej7wsEuH_GVmBkNkd7bgEj91Tg&usqp=CAU"
        />

        <CardImagemLista 
          titulo="Possíveis alternativas"
          texto="Com o avanço das tecnologias, muitas novas alternativas para os eletrônicos que possuem mercúrio em sua composição foram aparecendo, diminuindo o seu uso, entre estas podem ser consideradas as seguintes:"
          lista={alternativas}
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPFTWn634Ej7wsEuH_GVmBkNkd7bgEj91Tg&usqp=CAU"
        />

        <Referencias
            referencias ={referencias}
        />

    </div>
  )
}
