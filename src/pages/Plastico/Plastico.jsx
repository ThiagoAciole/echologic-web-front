import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita"
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"
import imagemDescricao from "../../assets/ImagensPlastico/image1.png"
import imagemObtencao from "../../assets/ImagensPlastico/image2.png"
import imagemEquipamentos from "../../assets/ImagensPlastico/image3.png"
import imagemImpacto from "../../assets/ImagensPlastico/image4.png"
import imagemReciclar from "../../assets/ImagensPlastico/image5.jfif"

export default function Plastico() {

    const referencias = [
        "OpenAI. (2021). ChatGPT [Modelo de linguagem de IA]. Disponível em: https://openai.com/. Acesso em: [Data de acesso].",
        "COMO É feito o plástico? Processo de produção de plástico simplificado: Como é feito o plástico?. [S. l.], 2021. Disponível em: https://www.plasticcollectors.com/pt/blog/how-is-plastic-made/. Acesso em: 24 maio 2023.",
        "MEDEIROS, Ana Paula. Plásticos descartados no oceano se transformam e geram impactos climáticos. [S. l.], 27 abr. 2022. Disponível em: https://jornal.usp.br/atualidades/plasticos-descartados-no-oceano-se-transformam-e-geram-impactos-climaticos/. Acesso em: 24 maio 2023.",
        "COMO É o processo de fabricação do plástico?. [S. l.], 14 out. 2020. Disponível em: https://www.piramidal.com.br/blog/resinas-termoplasticas/processo-de-fabricacao-do-plastico/#. Acesso em: 24 maio 2023."
    ]

    const obtencao = [
        "Invólucro/Carcaça: A maioria dos dispositivos eletrônicos possui uma carcaça ou invólucro feito de plástico para proteger os componentes internos. Isso inclui telefones celulares, computadores, televisores, eletrodomésticos, entre outros.",
        "Painéis e botões: Muitos equipamentos eletrônicos possuem painéis frontais e botões de plástico, que são utilizados para interagir com o dispositivo. Isso inclui painéis de controle, botões de ligar/desligar, botões de ajuste de volume, entre outros.",
        "Cabos e fios: Os cabos e fios utilizados em equipamentos eletrônicos, como cabos de energia, cabos USB, cabos HDMI e cabos de dados, geralmente possuem revestimentos de plástico para isolar e proteger os fios condutores.",
        "Conectores e encaixes: Muitos conectores e encaixes utilizados em equipamentos eletrônicos, como conectores USB, conectores de áudio, conectores HDMI e encaixes de cartões de memória, são feitos de plástico.",
        "Componentes internos: Embora a maioria dos componentes internos de dispositivos eletrônicos, como placas de circuito, chips e transistores, não sejam feitos de plástico, eles são frequentemente montados em suportes ou estruturas plásticas para proteção e organização.",
        "Lentes: Em câmeras, celulares e outros dispositivos ópticos, as lentes são frequentemente feitas de plástico, como policarbonato ou acrílico, devido à sua capacidade de moldagem e baixo custo em comparação com lentes de vidro."
    ]

    const solucoes = [
        "O uso de materiais biodegradáveis ​​pode ajudar a reduzir a persistência dos resíduos plásticos no meio ambiente. Materiais como PLA (ácido polilático) e PHA (polihidroxialcanoato) são derivados de fontes renováveis ​​e se degradam naturalmente com o tempo.",
        "Diferentemente dos plásticos convencionais, os materiais compostáveis podem ser decompostos em condições específicas de compostagem, resultando em um composto orgânico que pode ser utilizado como adubo.",
        "Promover a reutilização de embalagens e produtos plásticos pode reduzir significativamente a demanda por plásticos descartáveis. Isso pode ser feito através de sistemas de refil, incentivo ao uso de embalagens retornáveis e promoção de práticas como a reutilização de sacolas e recipientes.",
        "Explorar materiais alternativos não plásticos, como vidro, metal, papel, bambu e tecidos naturais, para embalagens, utensílios e outros produtos pode reduzir a dependência do plástico e minimizar seu impacto ambiental."
    ]

    return (
        <div>
            <div className="p-5 mt-10">
                <h1 className="font-sans lg:text-5xl text-3xl text-center font-extrabold text-gray-700 ">Plástico</h1>
            </div>
            < CardImagemDireita 
                titulo="Descrição do material"
                texto="O plástico é um material polimérico sintético que pode ser moldado e deformado quando submetido a calor ou pressão. É composto por cadeias longas de moléculas chamadas polímeros, que são formadas pela repetição de unidades estruturais chamadas monômeros."
                imagem={imagemDescricao}
            />
            <CardImagemEsquerda 
                titulo="Forma de obtenção"
                texto="Matérias-primas: Para fazer plástico, o primeiro requisito é adquirir matérias-primas. Essas matérias-primas incluem carvão, petróleo bruto e gás natural.
                Em seguida temos a fusão onde as matérias-primas são misturadas em proporções adequadas e colocadas em um forno de fusão. O aquecimento ocorre a altas temperaturas, geralmente acima de 1.500°C, para fundir os materiais em um estado líquido homogêneo.
            Logo após vem a formação, o vidro fundido é moldado na forma desejada. Existem diferentes técnicas para isso, dependendo do tipo de produto final desejado.
            Após a formação, o vidro é resfriado lentamente para reduzir a tensão interna e aumentar a resistência. Isso é feito em um processo chamado têmpera, no qual o vidro é aquecido a uma temperatura alta e depois resfriado gradualmente.
            Depois de resfriado, o vidro passa por processos adicionais de acabamento, como corte, moagem e polimento, para obter as dimensões e acabamento desejados.
            O vidro é inspecionado quanto a defeitos, como bolhas, rachaduras ou imperfeições, para garantir a qualidade.
            "
                imagem={imagemObtencao}
            />
            < CardImagemLista
                titulo="Partes dos equipamentos que contém o material"
                p1="Os equipamentos eletrônicos contêm diversas partes que são feitas de plástico. Alguns exemplos comuns incluem:"
                lista={obtencao}
                imagem={imagemEquipamentos}
                p2=""
            />
            <CardImagemEsquerda 
                texto="O plástico é um material persistente e não biodegradável, o que significa que ele não se decompõe facilmente na natureza, o descarte inadequado de plásticos resulta na poluição de ecossistemas terrestres e aquáticos, como oceanos, rios e florestas. A produção de plásticos envolve a extração de matérias-primas, como petróleo e gás natural, além do processo de fabricação em si, que requer energia. Isso resulta em emissões significativas de gases de efeito estufa, contribuindo para as mudanças climáticas, além disso,
                milhões de toneladas de plástico acabam nos oceanos, causando danos aos ecossistemas marinhos. Animais marinhos, como tartarugas, aves marinhas e mamíferos marinhos, podem ficar presos em plásticos ou ingeri-los, levando a ferimentos, doenças e morte. 
                "
                titulo="Impacto ambiental"
                imagem={imagemImpacto}
            />
            < CardImagemLista
                titulo="Possíveis alternativas"
                p1="Existem várias alternativas para reduzir o uso do plástico e mitigar seu impacto ambiental. Alguns exemplos incluem:"
                lista={solucoes}
                imagem={imagemReciclar}
                p2=""
            />

            <Referencias 
                referencias={referencias}
            />

        </div>
  )
}
