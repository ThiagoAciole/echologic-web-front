import CardBotaoDireita from "../../components/CardBotaoDireita/CardBotaoDireita"
import CardBotaoEsquerda from "../../components/CardBotaoEsquerda/CardBotaoEsquerda"
import ouro from "../../assets/ImagensLixosEletronicos/ouro.png"
import chumbo from "../../assets/ImagensLixosEletronicos/chumbo.png"
import mercurio from "../../assets/ImagensLixosEletronicos/mercurio.png"
import silicio from "../../assets/ImagensLixosEletronicos/silicio.jfif"
import niobio from "../../assets/ImagensLixosEletronicos/niobio.jfif"
import zinco from "../../assets/ImagensLixosEletronicos/zinco.png"
import berilio from "../../assets/ImagensLixosEletronicos/berilio.webp"
import cadmio from "../../assets/ImagensLixosEletronicos/cadmio.jpg"
import eletricidade from "../../assets/ImagensLixosEletronicos/eletricidade.jpg"
import vidro from "../../assets/ImagensLixosEletronicos/vidro.jfif"
import plastico from "../../assets/ImagensLixosEletronicos/plastico.png"
import cobre from "../../assets/ImagensLixosEletronicos/cobre.png"

export default function LixosEletronicos() {
  return (
    <div>
        <CardBotaoDireita 
        titulo="Ouro"
        texto="O ouro é um dos poucos metais que ocorre em estado nativo na Natureza. Destaca-se por sua boa condutividade elétrica, valor e inércia química, ou seja, sua capacidade de resistir à oxidação, corrosão e reações químicas em geral."
        imagem={ouro}
        caminho="/ouro"
        />
        <CardBotaoEsquerda 
        titulo="Chumbo"
        texto="O chumbo é um metal pesado de cor cinza azulada e brilho metálico. É conhecido por sua resistência à corrosão e sua densidade, sendo mais pesado que a água."
        imagem={chumbo}
        caminho="/chumbo"
        />
        <CardBotaoDireita 
        titulo="Mercúrio"
        texto="O mercúrio é um metal pesado de cor “branco-prateada” , caracterizado por ser o único elemento metálico líquido em temperatura ambiente e também pela sua toxicidade. É amplamente utilizado na indústria, destacando-se na produção de componentes eletroeletrônicos."
        imagem={mercurio}
        caminho="/mercurio"
        />
        <CardBotaoEsquerda 
        titulo="Silício"
        texto="O silício é um elemento químico amplamente utilizado na indústria eletrônica e na fabricação de dispositivos semicondutores. Como um material semicondutor, o silício possui propriedades que permitem controlar o fluxo de elétrons em sua estrutura cristalina."
        imagem={silicio}
        caminho="/silicio"
        />
        <CardBotaoDireita 
        titulo="Zinco"
        texto="O Zinco é um metal de coloração acinzentada, com boa resistência à corrosão em temperatura ambiente. Na indústria, é muito empregado no processo de galvanização, que consiste na criação de uma capa de zinco sobre peças metálicas, de modo a melhorar sua resistência à corrosão."
        imagem={zinco}
        caminho="/zinco"
        />
        <CardBotaoEsquerda 
        titulo="Berílio"
        texto="O berílio puro é um metal duro acinzentado, o mais leve de todos os metais, encontrado em rochas minerais, carvão, solo e poeira vulcânica. A maior parte do berílio extraído é convertida em ligas usadas na fabricação de peças elétricas e eletrônicas ou como materiais de construção para máquinas e moldes para plásticos."
        imagem={berilio}
        caminho="/berilio"
        />
        <CardBotaoDireita 
        titulo="Cádmio"
        texto="O cádmio é um metal versátil com características físicas e químicas únicas. Sua resistência à corrosão, maleabilidade e condutividade tornam-no valioso em diversas indústrias."
        imagem={cadmio}
        caminho="/cadmio"
        />
        <CardBotaoEsquerda 
        titulo="Eletricidade"
        texto="A eletricidade é uma forma de energia que surge a partir do movimento dos elétrons, partículas presentes nos átomos. Ela é uma das formas mais versáteis e amplamente utilizadas de energia, desempenhando um papel fundamental em quase todos os aspectos da vida moderna."
        imagem={eletricidade}
        caminho="/eletricidade"
        />
        <CardBotaoDireita 
        titulo="Vidro"
        texto="O vidro é um sólido não cristalino que exibe o fenômeno de transição vítrea, podendo ser produzido a partir de materiais inorgânicos, orgânicos e metálicos."
        imagem={vidro}
        caminho="/vidro"
        />
        <CardBotaoEsquerda 
        titulo="Plástico"
        texto="O plástico é um material polimérico sintético que pode ser moldado e deformado quando submetido a calor ou pressão. É composto por cadeias longas de moléculas chamadas polímeros, que são formadas pela repetição de unidades estruturais chamadas monômeros."
        imagem={plastico}
        caminho="/plastico"
        />
        <CardBotaoDireita 
        titulo="Cobre"
        texto="O cobre é um metal encontrado no estado sólido sob condições normais de temperatura e pressão. É suscetível à oxidação em contato com água e/ou oxigênio, porém, é notavelmente resistente à corrosão e a altas temperaturas. Além disso, o cobre destaca-se como um excelente condutor de eletricidade e calor."
        imagem={cobre}
        caminho="/cobre"
        />
        <CardBotaoEsquerda 
        titulo="Nióbio"
        texto="O nióbio (Nb) é um metal refratário, ou seja, muito resistente ao calor e ao desgaste. É brilhante, de baixa dureza, condutor de eletricidade e resistente à corrosão.."
        imagem={niobio}
        caminho="/niobio"
        />
    </div>
  )
}
