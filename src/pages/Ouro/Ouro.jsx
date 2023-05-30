import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import CardImagemLista from "../../components/CardImagemLista/CardImagemLista"
import Video from "../../components/Video/Video"
import Referencias from "../../components/Referencias/Referencias"
import img01 from "../../assets/img/imgOuro/img01.png" 
import img02 from "../../assets/img/imgOuro/img02.png" 
import img03 from "../../assets/img/imgOuro/img03.png" 
import img04 from "../../assets/img/imgOuro/img04.png" 
import img05 from "../../assets/img/imgOuro/img05.png" 

export default function Ouro() {
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
      <CardImagemEsquerda titulo="Uma breve descrição.."
        texto="O ouro é um dos poucos metais que ocorre em estado nativo na Natureza. Destaca-se por sua boa condutividade elétrica, valor e inércia química, ou seja, sua capacidade de resistir à oxidação, corrosão e reações químicas em geral. É um metal de coloração amarela, com brilho característico e tem elevada densidade e baixa reatividade química, além disso, ele é dificilmente dissolvido, necessitando de altas temperaturas e agentes oxidantes"
        imagem={img01}
      />

      <CardImagemLista
        imagem={img02}
        titulo="Forma de obtenção"
        p1="Os minerais de ouro podem ser classificados da seguinte forma:"
        lista={[
          "Ouro nativo;",
          "Electrum, que é produzida artificialmente;",
          "Teluretos de ouro, que os mais comuns são a silvanita, calaverita e petzita;",
          "outros minerais de ouro, na maldonita;",
          "ouro com sulfetos, como a arsenopirita, pirita e calcopirita"
        ]}
        p2="De acordo com os seus atributos, vai ser definido qual processo na extração do ouro deve ser empregado, como: concentração gravítica, flotação e cianetação"
      />

      <Video link="https://www.youtube.com/embed/2jd2kOjGoNU"/>

      <CardImagemLista
        imagem={img03}
        titulo="Eletrônica"
        lista={[
          "Placa de circuito impresso: o ouro é utilizado em placas de circuitos impressos para fazer pistas super finas em microchips e para evitar a oxidação dos contatos.",
      
          "Condutores elétricos: é encontrado devido a sua alta condutividade elétrica e resistência à corrosão, pode ser encontrado em peças como processador, memória RAM e placas de vídeo."
      
        ]}
      />

      <CardImagemLista
        imagem={img04}
        titulo="Impacto Ambiental"
        p1="Segundo eCycle (s.d), o uso do ouro em equipamentos de informática tem impactos ambientais significativos, tais como:"
        lista={[
          "Contaminação da água, devido a utilização de recursos como o mercúrio",
          "Envenenamento de água potável, por causa do uso de cianeto",
          "Destruição de habitats, por precisar movimentar grandes quantidades de solo e rocha",
          "Riscos e acidentes, como a armazenagem correta na barragem, operação de grandes equipamentos, etc",
          "Lixo tóxico, grandes quantidades de toneladas são despejadas todos os anos",
          "Drenagem ácida de mina, devido aos sulfetos de ferro na mina",
          "Poluição por mercúrio, afetando rios, lagos e oceanos próximos",
          "Destruição da Amazônia, destruindo grandes partes da floresta para a extração do ouro",
          "Ameaça aos povos indígenas, pois possuem terras que são exploradas para mineração"
        ]}
      />

      <CardImagemLista
        imagem={img05}
        titulo="Possíveis alternativas"
        p1="Para amenizar o impacto ambiental do ouro no uso de equipamentos de informática, podem ser consideradas as seguintes alternativas:
          "
        lista={["Mineração sustentável: Implementar práticas de mineração que sejam ambientalmente sustentáveis, como o uso de equipamentos e processos mais eficientes e menos poluentes. Isso inclui a utilização de tecnologias de mineração de baixo impacto e métodos de extração que causem menos danos aos ecossistemas.",
        "Recuperação de áreas degradadas: Após a extração do ouro, é importante realizar a recuperação das áreas degradadas. Isso envolve o replantio de vegetação nativa, a restauração de cursos de água e a criação de áreas de proteção ambiental para ajudar na regeneração dos ecossistemas afetados.",
        "Uso de tecnologias de extração mais limpas: Investir em pesquisas e desenvolvimento de tecnologias de extração mais limpas, como a utilização de solventes não tóxicos e processos de extração mais eficientes. Isso reduziria a necessidade do uso de substâncias químicas perigosas, diminuindo a poluição gerada.",
        "Educação e conscientização: Promover a conscientização sobre os impactos ambientais da extração de ouro e incentivar práticas sustentáveis entre mineradoras, trabalhadores do setor e consumidores. A educação ambiental pode ajudar a desenvolver uma mentalidade mais responsável em relação à mineração e seus efeitos no meio ambiente."
      ]}
      />

      <Referencias
      referencias={[ 'NOVAIS, Stéfano Araújo. "Ouro (Au)"; Brasil Escola. Disponível em: https://brasilescola.uol.com.br/quimica/ouro.htm. Acesso em 20 de maio de 2023.',
      'FINCO, Fernanda Sofia Alves. Extração de ouro contido em minério de baixo teor empregando pilhas de lixiviação com cianeto. Belo Horizonte: Universidade Federal de Minas Gerais, 2013. 8-12 p. Disponível em: https://ppgem.eng.ufmg.br/defesas/2172M.PDF. Acesso em: 21 maio 2023.',
      'OLIVEIRA, R.S.L. Reutilização, reaproveitamento e reciclagem dos componentes de informática. Trabalho de Conclusão do Curso de Tecnologia em Sistemas de Computação. Universidade Federal Fluminense. Niterói, 35p., 2016.',
      'Ouro: usos e impactos socioambientais da mineração. eCycle, s.d. Disponível em: <https://www.ecycle.com.br/ouro/>. Acesso em: 22 de maio de 2023.']}
      />
    </div>
  )
}