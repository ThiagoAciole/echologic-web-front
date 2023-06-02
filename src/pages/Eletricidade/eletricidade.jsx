import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import Referencias from "../../components/Referencias/Referencias";
import luz from "../../assets/eletricidade/luz.jpg";
import usina from "../../assets/eletricidade/usina.jpg";
import circuito from "../../assets/eletricidade/circuito.jpg";
import economia from "../../assets/eletricidade/economia.jpg";

export default function Eletricidade() {

  const referencias = [ 'OpenAI. (2021). ChatGPT [Modelo de linguagem de IA]. Disponível em: https://openai.com/. Acesso em: 31 maio. 2023.',
  'GOLDEMBERG, José; LUCON, Oswaldo. Energia e meio ambiente no Brasil. Estudos avançados, v. 21, p. 7-20, 2007',
  'BECHERT, DÉBORA et al. Eletricidade e meio ambiente: uma nova forma de pensar. REVISTA INTERDISCIPLINAR DE ENSINO, PESQUISA E EXTENSÃO-RevInt, v. 3, n. 1, 2016.' 
  ]

  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
      <TextoComTitulo
          titulo="Impactos da eletricidade"
      />

      <CardImagemEsquerda 
        titulo="Uma breve descrição.."
        texto="A eletricidade é uma forma de energia que surge a partir do movimento dos elétrons, partículas presentes nos átomos. Ela é uma das formas mais versáteis e amplamente utilizadas de energia, desempenhando um papel fundamental em quase todos os aspectos da vida moderna."
        imagem={luz}
      />

      <CardImagemDireita
        titulo="Forma de obtenção"
        texto="A forma mais comum é através de usinas elétricas, onde a energia mecânica de fontes como a água em movimento, o vapor de água, o vento ou os combustíveis fósseis é convertida em eletricidade. Também é possível gerar eletricidade a partir de painéis solares fotovoltaicos, que convertem a luz solar diretamente em eletricidade, ou através de pilhas e baterias, onde ocorrem reações químicas para produzir energia elétrica."
        imagem={usina}
      />

      <CardImagemEsquerda 
        titulo="Partes do equipamento que contém o material"
        texto="A eletricidade é essencial em equipamentos eletronicos e faz parte da alimentação de dispositivos, processamento de dados, armazenamento de dados, comunicação de redes, interfacces de usuário e conectividade com a internet, por exemplo. E a rápida evolução da eletrônica e da tecnologia da informação tem permitido o desenvolvimento de dispositivos mais eficientes energeticamente e inovações que melhoram constantemente a maneira como a eletricidade é utilizada nesse campo. "
        imagem={circuito}
      />
    
      <CardImagemDireita
        titulo="Impacto ambiental"
        texto="Os principais impactos ambientais associados à utilização de eletricidade são: A emissões de gases de efeito estufa, pela geração de eletricidade a partir de fontes de energia não renováveis; Poluição do ar, pela geração de eletricidade com a queima de combustíveis fósseis e biomassa; A geração de eletricidade pode exigir a extração e o consumo de recursos naturais não renováveis, como carvão, petróleo e gás natural; O desmatamento e outros impactos ligados a contrução das usinas; E o descarte em grande escala de resíduos eletroeletrônicos no meio ambiente, que muitas vezes ainda contêm materiais tóxicos."
        imagem={usina}
      />

      <CardImagemEsquerda 
        titulo="Partes do equipamento que contém o material"
        texto="Aqui estão algumas medidas que podem ser adotadas: Investir na geração de eletricidade a partir de fontes de energia renovável, como energia solar e eólica; Equipamentos com uma maior eficiencia energética; A implementação de sistemas de gestão inteligente da demanda pode ajudar a equilibrar a oferta e a demanda de eletricidade, evitando picos de consumo; Reciclagem e descarte adequado de resíduos eletrônicos; A conscientização sobre o impacto ambiental da eletricidade e a educação sobre práticas sustentáveis são fundamentais para promover mudanças de comportamento; Investir em inovação e pesquisa, para promover a adoção de soluções mais limpas e eficientes; E se preocupar com a economia de energia tanto para produtores como para consumidores."
        imagem={economia}
      />

      <Referencias
      referencias={referencias}
      />
    </div>
  )
}