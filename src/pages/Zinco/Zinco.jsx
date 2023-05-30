import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"
import img01 from "../../assets/img/imgZinco/img01.png" 
import img02 from "../../assets/img/imgZinco/img02.png" 
import img03 from "../../assets/img/imgZinco/img03.png" 
import img04 from "../../assets/img/imgZinco/img04.png" 
import img05 from "../../assets/img/imgZinco/img05.png" 

export default function Zinco() {
    
    return (
        <div className="w-full mt-1 md:p-14 sm:p-12 p-10">

            <CardImagemDireita
                titulo="Uma breve descrição.."
                texto="O Zinco é um metal de coloração acinzentada, com boa resistência à corrosão em temperatura ambiente. Muito presente no dia a dia, nosso corpo possui uma boa quantidade desse metal presente em enzimas e atuando no sistema imunológico. Enquanto isso, na indústria, é muito empregado no processo de galvanização, que consiste na criação de uma capa de zinco sobre peças metálicas, de modo a melhorar sua resistência à corrosão."
                imagem={img01}
            />
            <CardImagemEsquerda
                titulo="Forma de obtenção"
                texto="O zinco ocorre na natureza associado, principalmente, com enxofre ou oxigênio. Um dos minérios formados dessa combinação é o sulfeto de zinco (ZnS), também conhecido como esfalerita, que ocorre, na maioria das vezes, em rochas calcárias.
            Para a sua extração, os minérios de zinco são concentrados de forma que cerca de 55% da massa seja composta do zinco metálico. Essa concentração passa pelo processo de roasting, na qual é feita a exposição ao ar quente, aproximadamente 800 ºC, e, pela oxidação, o ZnO é formado..  
            Com o Óxido de Zinco obtido, é feito o processo de redução com a utilização do carbono, em uma temperatura de cerca de 1200 ºC. Essa operação, seguida de sucessivas destilações para aumentar a pureza do produto, resulta na obtenção do zinco metálico.
            "
                imagem={img02}
            />
            <CardImagemLista
                titulo="Equipamentos"
                p1="O zinco não é encontrado em grande quantidade nos componentes eletrônicos. No entanto, o zinco pode ser encontrado em alguns equipamentos eletrônicos em determinadas partes ou revestimentos:"
                lista={["Baterias: Nas baterias e pilhas alcalinas, como as AAA, o zinco é utilizado no ânodo, responsável por doar elétrons e gerar a energia. ",
                "Conectores e contatos: O zinco pode ser usado como revestimento para e contatos de equipamentos eletrônicos, ajudando na proteção contra a corrosão e evitando o mau-contato elétrico. ",
                "Galvanização: Utilizado em peças de equipamentos, como gabinetes e suportes, para garantir mais resistência contra corrosão."
            ]}
                imagem={img03}
            />
            <CardImagemLista
                titulo="Impacto Ambiental"
                p1="O uso de zinco em equipamentos de informática tem impactos ambientais significativos, tais como:"
                lista={[
                    "Poluição nas áreas de mineração:  A mineração inadequada  dos minérios de zinco pode levar a problemas com o solo, como a erosão, desmatamento e alteração na geografia local, afetando flora e fauna.",
                    "Contaminação da água: O descarte incorreto de equipamentos que possuem o zinco em sua composição, tais como pilhas alcalinas, pode levar à contaminação de lençóis e corpos d’água. A alta concentração leva à intoxicação de zinco, podendo causar alterações no ciclo de vida de diferentes espécies aquáticas.",
                    "Contaminação do solo. O descarte de peças que possuem alta concentração de zinco em aterros e lixões afeta a qualidade do solo na área contaminada, prejudicando o desenvolvimento da vegetação.",
                    "Efeitos nocivos à saúde humana e animal quando expostos a altas concentrações de zinco: o consumo de alimentos e água contaminados podem levar a problemas de saúde, como distúrbios gastrointestinais, danos ao fígado e aos rins, além de afetar negativamente o sistema imunológico"
            
                ]}
                imagem={img04}
            />
            <CardImagemLista
                titulo="Possivel Alternativas"
                p1="Para amenizar o impacto ambiental do zinco no uso de equipamentos de informática, podem ser consideradas as seguintes alternativas:"
                lista={[
                    "Minimizar a liberação de zinco no meio ambiente: é possível através da conscientização acerca das formas de descarte de equipamentos eletrônicos e seus perigos para a saúde dos seres vivos.",
                    "Reciclagem: É possível reciclar completamente o zinco em perdas em suas propriedades. Dentre as principais fontes, as folhas de zinco, produtos de latão e revestimentos galvanizados são os mais reciclados."
            
                ]}
                imagem={img05}
            />
            <Referencias
            referencias ={[
                'NOVAIS, Stéfano Araújo. "Zinco (Zn)"; Brasil Escola. Disponível em: https://brasilescola.uol.com.br/quimica/zinco.htm. Acesso em 26 de maio de 2023.',
        
                "O Zinco e o Meio Ambiente. URL: https://www.icz.org.br/zinco-meio-ambiente.php.",
        
                'RIBAS, Marielen Cozer; DE OLIVEIRA, Ana Paula; DUARTE, Andriele da Mota; BARP, Gerciane; DA SILVEIRA, Wagner. RECICLAGEM DE PILHAS E RECUPERAÇÃO DE ZINCO PARA A PRODUÇÃO DE CATALISADORES. URL: https://www.ibeas.org.br/conresol/conresol2019/XII-040.pdf',
        
                'OpenAI. (2023). Texto gerado pelo modelo de linguagem ChatGPT. Acesso em  25 de maio de 2023. '
        
            ]}
            />
        </div>
    )
}