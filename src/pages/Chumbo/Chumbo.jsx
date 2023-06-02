import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista";
import Referencias from "../../components/Referencias/Referencias";
import imagem3 from "../../assets/FotosChumbo/imagem3.jpeg";
import imagem1 from "../../assets/FotosChumbo/imagem1.jpeg";
import imagem2 from "../../assets/FotosChumbo/imagem2.jpeg";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";

export default function Chumbo() {
    const material=[
        "Baterias chumbo-ácido",
        "Forros para cabos de energia",
        "Materiais de construção",
        "Aditivo de gasolina (chumbo tetraetila)",
        "Pigmentos para navios (prevenção de crescimento de organismos marinhos)",
        "Manta de blindagem contra radiação",
        "Estabilizantes contra calor e luz na fabricação de plásticos",
        "Nitreto de chumbo usado na fabricação de detonadores de explosivos."
        
    ]
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
    <CardImagemEsquerda
      titulo="Descrição do Material"
      texto="O chumbo é um metal pesado de cor cinza azulada e brilho metálico. É conhecido por sua resistência à corrosão e sua densidade, 
      sendo mais pesado que a água. No entanto, o chumbo é tóxico e pode causar sérios danos à saúde humana e ao meio ambiente. Apesar disso, 
      ainda é usado em algumas aplicações, como baterias e soldas. Medidas de segurança e práticas sustentáveis são necessárias para minimizar 
      os impactos negativos do chumbo."
      imagem={imagem3}

    />
    <TextoComTitulo 
          titulo="Forma de obtenção"
          texto="A galena (PbS) é o principal mineral de extração do chumbo no mundo, composto por cerca de 87% de chumbo. Ele ocorre na forma de cristais cúbicos com brilho metálico e é frequentemente encontrado junto com prata e outros elementos como cobre, ouro, zinco e antimônio. Outros minerais que contêm chumbo são a anglesita (PbSO4) e a cerussita (PbCO3).
          Atualmente, a maior parte do chumbo utilizado na indústria é obtida por meio da recuperação de sucata, como baterias que não estão mais em uso, que contêm chumbo em sua composição.
          No Brasil, o estado de Minas Gerais possui as maiores reservas de minérios de chumbo, mas representam menos de 1% do total mundial. Os principais produtores globais de minério de chumbo são a Austrália, China e Estados Unidos."          
        />
    <CardImagemLista
      titulo="Partes do equipamento que contém o material "
      p1={"O chumbo é amplamente utilizado em ligas metálicas, onde é misturado com elementos como estanho, cobre, antimônio, arsênio, bismuto, cadmio e sódio para criar materiais com várias aplicações. Além disso, sais orgânicos, silicatos e carbonatos de chumbo são usados como reagentes em processos químicos e aditivos. Suas principais aplicações incluem:"      }
      lista={material}
      imagem= {imagem1}
      />
    <CardImagemEsquerda
          titulo="Impacto ambiental"
          texto="Assim como outros metais pesados, o chumbo pode contaminar grandes áreas, causando poluição e desequilíbrio ao meio ambiente, afetando diretamente a fauna e a flora da região, este fato também é previsto e consta na Lei de Crimes Ambientais nº 9.605, nos respectivos artigos: Art. 33.
          A contaminação do solo por chumbo é preocupante porque o chumbo normalmente fica retido na camada superficial, podendo ocasionar poeiras em suspensão, além do contato de crianças e animais com o solo contaminado. Outras fontes secundárias, extremamente preocupantes, são as águas e vegetação contaminadas.
          "
          imagem={imagem2}
        />
    <TextoComTitulo
          titulo="Possíveis alternativas"
          texto="O descarte inadequado de chumbo é uma preocupação séria, pois esse metal é tóxico e pode causar danos ambientais e à saúde humana. Algumas sugestões podem ser seguidas para o descarte correto de chumbo:
          Reciclagem: A reciclagem é a melhor maneira de lidar com o chumbo, pois permite que ele seja reutilizado em novos produtos. Procure empresas especializadas em reciclagem de metais para descartar corretamente objetos que contenham chumbo, como baterias de chumbo-ácido e produtos eletrônicos.
          Programas de coleta de resíduos perigosos: Verifique se há programas locais de coleta de resíduos perigosos em sua área. Esses programas geralmente aceitam materiais como baterias de chumbo-ácido, tintas à base de chumbo e outros itens que contenham chumbo. Eles garantirão que esses materiais sejam descartados de forma segura.
          Consulte as regulamentações locais: Verifique as regulamentações específicas em sua região sobre o descarte de chumbo. Muitas localidades têm diretrizes claras sobre como lidar com o chumbo e outros materiais perigosos. Siga essas orientações para garantir um descarte adequado.
          Educação e conscientização: É importante educar a si mesmo e aos outros sobre os perigos do chumbo e a importância do descarte adequado. Compartilhe informações com familiares, amigos e comunidade sobre os danos causados pelo chumbo e incentive práticas de descarte responsáveis.
          Evite produtos com chumbo: Reduza o uso de produtos que contenham chumbo, sempre que possível. Opte por alternativas mais seguras e eco-friendly. Por exemplo, prefira baterias recarregáveis em vez de baterias de chumbo-ácido.
          "
        />

    <Referencias
                referencias={["Chumbo | Imagens da Tabela Periódica. Disponível em: <https://imagens.tabelaperiodica.org/categoria/chumbo/>. Acesso em: 27 maio. 2023. ",
                    "Chumbo (Pb): propriedades, usos, onde é encontrado. Disponível em: <https://brasilescola.uol.com.br/quimica/chumbo-pb.htm#:~:text=Para%20extra%C3%A7%C3%A3o%20do%20chumbo%2C%20faz>. Acesso em: 27 maio. 2023.",
                    "PANTALEÃO, S. et al. O CHUMBO COMO AGENTE CONTAMINANTE DO MEIO AMBIENTE. [s.l: s.n.]. Disponível em: <https://oswaldocruz.br/revista_academica/content/pdf/Simone%20Queiroz%20Pantale%C3%A3o.pdf>. Acesso em: 27 maio. 2023.",
                    "HAMADA, J. Avaliação da contaminação do solo por metais provenientes de indústrias recicladoras de chumbo Eng a Flávia de Vasconcellos Figueiredo. [s.l: s.n.]. Disponível em: https://repositorio.unesp.br/bitstream/handle/11449/90808/figueiredo_fv_me_bauru_prot.pdf?sequence=1#:~:text=A%20contamina%C3%A7%C3%A3o%20do%20solo%20por. Acesso em: 27 maio. 2023."
                ]}
            />
      </div>
  )
}
