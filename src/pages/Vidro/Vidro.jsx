import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda"
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Referencias from "../../components/Referencias/Referencias"

export default function Vidro() {
    const obtencao = [
        "Processo de Fusão: O método mais comum para a obtenção de vidro é o processo de fusão. Nesse processo, matérias-primas como areia de sílica (SiO2), carbonato de sódio (Na2CO3) e carbonato de cálcio (CaCO3) são misturadas e aquecidas em altas temperaturas em um forno. A mistura fundida é resfriada rapidamente para formar o vidro sólido.",
        "Sopro: O sopro é um método utilizado para a fabricação de objetos de vidro ocos, como garrafas e copos. O vidro é então moldado soprando-se ar através da cana para criar a forma desejada.",
        "Laminação: A laminação é um processo utilizado para fabricar vidro laminado, comumente usado em para-brisas de automóveis e vidros de segurança. Nesse método, duas ou mais camadas de vidro são unidas com uma camada de material plástico, através de calor e pressão.",
        "Flutuação: O processo de flutuação é usado para produzir vidro plano, como o utilizado em janelas e espelhos. Nessa técnica, uma camada de vidro fundido é derramada sobre um banho de estanho líquido em um forno. "

    ]
    const equip = [
        "Telas de exibição: O vidro é utilizado em monitores de computador, laptops, smartphones e tablets como a camada externa da tela. O vidro usado nessas telas, conhecido como vidro de proteção ou vidro temperado, fornece resistência a arranhões e protege o painel de exibição subjacente.",
        "Fibra óptica: A fibra óptica é usada para transmitir dados em alta velocidade em redes de comunicação. Ela é composta por um núcleo de vidro ultrafino que permite a transmissão de luz de forma eficiente e confiável.",
        "Óculos de realidade virtual: Alguns dispositivos de realidade virtual possuem lentes de vidro para ajudar a focar e direcionar as imagens projetadas para os olhos do usuário. Essas lentes são projetadas para fornecer uma experiência imersiva e de alta qualidade."

    ]
    return (
        <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
            <CardImagemDireita
                titulo="Uma breve descrição"
                texto="O vidro é um sólido não cristalino que exibe o fenômeno de transição vítrea, podendo ser produzido a partir de materiais inorgânicos, orgânicos e metálicos."
                imagem="https://vitral.com.br/wp-content/uploads/2022/03/vidro-temperado.jpg"
            />
            <CardImagemLista
                titulo="Forma de obtenção"
                lista={obtencao}
                imagem="https://media.istockphoto.com/id/131998689/pt/foto/de-vidro-soprar.jpg?s=612x612&w=0&k=20&c=mYnnUmOCgr_aNZslkm7TwKPBbcPhzpVeaBaRcEVaRlY="
            />
            <CardImagemLista
                titulo="Equipamentos"
                p1="O vidro é usado em vários aspectos na área de informática. Aqui estão alguns exemplos:"
                lista={equip}
                imagem="https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology_53876-124723.jpg?w=740&t=st=1685244318~exp=1685244918~hmac=8187251aa2d475b34141252d47cdb44eca30fb04d7a2ec2a5511843e0ee8d140"
            />
            <CardImagemLista
                titulo="Impacto Ambiental"
                p1="O uso de vidro em equipamentos de informática tem impactos ambientais significativos, tais como:"
                lista={["Consumo de recursos naturais: A produção de vidro requer matérias-primas abundantes, como areia, que é extraída de áreas naturais, muitas vezes resultando em degradação ambiental.",
                    "Emissões de gases de efeito estufa: A fabricação de vidro envolve a queima de combustíveis fósseis, como gás natural e carvão, que contribuem para as emissões de dióxido de carbono (CO2) e outros gases de efeito estufa.",
                    "Resíduos e reciclagem: O descarte inadequado de vidro pode levar à acumulação de resíduos em aterros sanitários. Embora o vidro seja um material reciclável, a reciclagem nem sempre é feita de forma eficiente."
                ]}
                imagem="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/images/vidro.jpg"
            />
            <CardImagemLista
                titulo="Possíveis soluções"
                lista={["Reciclagem: Uma das formas mais eficazes de reduzir o impacto ambiental do vidro é por meio da reciclagem. O vidro é 100% reciclável e pode ser fundido e reutilizado repetidamente sem perder suas propriedades. Incentive a reciclagem de vidro em sua comunidade e certifique-se de descartar vidro em recipientes de reciclagem apropriados.",
                    "Embalagens alternativas: Em certos casos, o vidro pode ser substituído por materiais de embalagem alternativos, como plástico reciclável ou biodegradável. No entanto, é importante considerar o ciclo de vida completo desses materiais, incluindo sua produção, uso e descarte, para avaliar o impacto ambiental total.",
                    "Educação e conscientização: É fundamental educar as pessoas sobre a importância da reciclagem de vidro e do consumo responsável. Promover a conscientização sobre os benefícios ambientais da reciclagem e incentivar práticas sustentáveis ​​pode ajudar a diminuir o impacto do vidro no meio ambiente.",
                    "Inovação tecnológica: A pesquisa e o desenvolvimento de tecnologias inovadoras podem contribuir para a redução do impacto ambiental do vidro. Isso pode incluir o desenvolvimento de técnicas de reciclagem mais eficientes, a criação de vidros mais leves e resistentes, e a exploração de alternativas sustentáveis ao vidro convencional."
                ]}
                imagem="https://www.infoescola.com/wp-content/uploads/2018/08/reciclagem-vidro-426959233.jpg"
            />
            <Referencias
                referencias={["Autor Desconhecido. “Como é Feito O Vidro? Saiba Tudo Sobre Como é Fabricado O Vidro.” Canal K, 4 May 2022, canalk.com/como-e-feito-o-vidro/.",
                    "OpenAI. (2021). ChatGPT [Modelo de linguagem de IA]. Disponível em: https://openai.com/. Acesso em: 24/05/2023.",
                    "GLASS, Arch et al. Quais são as aplicações de vidro?: Quais são as principais aplicações do vidro.. [S. l.], 2020. Disponível em: https://archglassbrasil.com.br/artigos/quais-sao-as-aplicacoes-de-vidro/. Acesso em: 24 maio 2023."
                ]}
            />
        </div>
    )
}