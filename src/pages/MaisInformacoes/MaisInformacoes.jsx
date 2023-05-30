import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardComLink from "../../components/CardComLink/CardComLink";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";
import semanaMeioAmbiente from "../../assets/imagensMaisInformacoes/semanaMeioAmbiente.png"

export default function MaisInformacoes() {
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <TextoComTitulo
          titulo="Mais Informações"
        />
        <CardImagemEsquerda
          titulo="Semana do meio ambiente"
          texto="Promover a conscientização, a responsabilidade socioambiental e construir novos sentidos é o intuito da Semana do Meio Ambiente (SEMA 2023), realizada entre os dias 5 e 7 de junho, durante os três turnos (manhã/tarde e noite). E traz como tema central “IFPB Campina Grande: protagonizando responsabilidade ambiental e gestão social”, a partir de muita interação acadêmica e artística por meio de oficinas, palestras, minicursos, rodas de conversas, aulas de campo, exposições, mostra científica e apresentações culturais."
          imagem={semanaMeioAmbiente}
        />
        <CardComLink
          titulo="Descarte correto"
          texto="Ao contrário do lixo comum, os equipamentos eletrônicos contêm materiais tóxicos e valiosos que precisam ser tratados de forma adequada. Para descartar corretamente seu lixo eletrônico, é importante buscar pontos de coleta especializados ou centros de reciclagem na sua região. Em Campina Grande-PB, identificamos dois pontos de coleta desse tipo especial de resíduo: "
          link1="SESUMA"
          link2="SCTI"
          imagem="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1"
        />
        <CardImagemEsquerda
          titulo="Legislação"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati corrupti numquam, voluptatem, earum pariatur minima vitae dignissimos facere quidem saepe corporis? Vero corporis nihil id ullam provident fugiat explicabo officia culpa error! Aperiam minus facilis officia placeat reiciendis maxime fugit deleniti cupiditate neque, atque earum, harum obcaecati? Saepe quod totam natus esse illum illo iure rem deserunt odit consectetur sit doloribus itaque quisquam, molestias perferendis commodi sed hic fugit temporibus atque ex blanditiis maiores! Minima ea, esse maxime ullam cum aperiam amet est deserunt modi labore. Molestiae obcaecati, corrupti temporibus reiciendis nemo nam aut eum, sequi quam, officiis fugiat?"
          imagem="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1"
        />
        <CardImagemDireita
          titulo="Dicas"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, dolorem repudiandae voluptates quae illum!"
          imagem="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1"
        />
    </div>
  )
}
