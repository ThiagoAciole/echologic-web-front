import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita"
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"
import imagem1 from "../../assets/imagensCobre/image4.png"
import imagem2 from "../../assets/imagensCobre/image2.png"
import imagem3 from "../../assets/imagensCobre/image1.png"
import imagem4 from "../../assets/imagensCobre/image3.png"
import imagem5 from "../../assets/imagensCobre/image5.png"

export default function Cobre() {

    const obtencao = [
        "Fragmentação, Moagem (reduz-se a granulometria do mineral.), Classificação (de acordo com o tamanho do granulo), Concentração: o processo químico de separação do cobre dos demais elementos do mineral dá-se nestas etapas abaixo:",
        "Flotação: separa a parte concentrada (teor médio de cobre 30%)",
        "Ustulação: aquecimento do sulfeto para obtenção do matte (teor de cobre 60%)",
        "Conversão do matte em blister: essa conversão é a oxidação do matte em altas temperaturas, obtendo-se o blister (teor de cobre: 98,5% a 99,5%)",
        "Refino e eletrólise: após refino do blister e sua eletrólise, obtém-se o cobre puro com teor de 99,9%"
    ]

    const impacto = [
        "Emissões atmosféricas: a mineração do cobre gera emissão de CO2 na atmosfera causando diversos impactos no meio ambiente. Além disso, efluentes e rejeitos provenientes da mineração contaminam lençóis freáticos e solos.",
        "Danos da paisagem local: o processo de eletrólise consome grandes quantidades de energia e a extração de minérios causa danos à paisagem e alteração nos ecossistemas locais.",
        "Poluição da água: A mineração, processamento e descarte inadequado de resíduos de cobre podem levar à contaminação da água. O cobre dissolvido na água pode ser tóxico para organismos aquáticos, afetando a vida marinha e os ecossistemas aquáticos.",
        "Acúmulo em solos: O uso excessivo de fertilizantes ou de aditivos agrícolas contendo cobre pode levar ao acúmulo do metal nos solos. Esse acúmulo pode resultar em alterações na composição do solo, afetando a microbiota e a saúde das plantas. Além disso, a absorção de cobre pelos vegetais pode levar à contaminação da cadeia alimentar."
    ]

    const alternativas = [
        "Práticas de mineração responsável: Implementar técnicas de mineração sustentáveis, como a recuperação de áreas degradadas, o uso de técnicas de extração mais eficientes e a redução do uso de produtos químicos tóxicos.",
        "Tratamento de resíduos: Garantir o tratamento adequado dos resíduos gerados durante o processo de extração e processamento do cobre. Isso inclui o tratamento de águas residuais e a gestão adequada dos rejeitos de mineração para evitar a contaminação de cursos d'água e solos.",
        "Monitoramento ambiental: Realizar um monitoramento regular do meio ambiente em áreas onde o cobre é extraído, processado ou utilizado intensivamente. Isso ajuda a identificar prontamente possíveis contaminações e tomar medidas corretivas adequadas.",
        "Reciclagem: Promover a reciclagem do cobre para reduzir a necessidade de mineração e extração de novos recursos. A reciclagem do cobre pode economizar energia e recursos naturais, além de reduzir a poluição e os impactos ambientais associados à produção de cobre a partir de fontes primárias."
    ]

    const referencias = [
        "Manual da Química. Cobre (Cu). Disponível em: https://www.manualdaquimica.com/quimica-geral/cobre-cu.htm. Acesso em: 30 de Maio de 2023.",
        "Mundo Educação. Metal Cobre. Disponível em: https://mundoeducacao.uol.com.br/quimica/metal-cobre.htm. Acesso em: 30 de Maio de 2023.",
        "Materioteca UFSC. Cobre. Disponível em: https://materioteca.paginas.ufsc.br/cobre/. Acesso em: 30 de Maio de 2023."
    ]

  return (
    <div>


        <CardImagemDireita
            titulo="Descrição do material"
            texto="O cobre é um metal encontrado no estado sólido sob condições normais de temperatura e pressão. Possui um brilho metálico distintivo e varia em coloração, geralmente exibindo tons de vermelho ou marrom devido a impurezas e óxidos presentes. Esse metal apresenta propriedades de ductilidade e maleabilidade, além de ser altamente reciclável. É suscetível à oxidação em contato com água e/ou oxigênio, porém, é notavelmente resistente à corrosão e a altas temperaturas. Além disso, o cobre destaca-se como um excelente condutor de eletricidade e calor."
            imagem={imagem1}
        />
        <CardImagemLista 
            titulo="Forma de obtenção"
            p1="O processo de extração e beneficiamento do cobre dá-se em alguns passos."
            lista={obtencao}
            imagem={imagem2}
        />
        <CardImagemEsquerda 
            titulo="Partes dos equipamentos que contém o material"
            texto="O cobre possui inúmeras aplicações no mundo moderno. A maior parte do metal extraído é usada em equipamentos elétricos, como fiação e motores, pois é um excelente condutor de eletricidade e de calor, além de ser um metal relativamente fácil de ser moldado no formato de fios. O cobre também compõe a construção de encanamentos, telhados e máquinas industriais, atuando principalmente como trocador de calor."
            imagem={imagem4}
        />
        <CardImagemLista 
            titulo="Impacto Ambiental"
            lista={impacto}
            imagem={imagem3}
        />
        <CardImagemLista 
            titulo="Possíveis alternativas"
            lista={alternativas}
            imagem={imagem5}
        />
        <Referencias 
            referencias={referencias}
        />
    </div>
  )
}
