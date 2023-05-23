import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";

export default function TelaPadrao() {
  return (
    <div className="w-full mt-1 md:p-14 sm:p-12 p-10">
        <CardImagemDireita
          titulo="Titulo"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, dolorem repudiandae voluptates quae illum!"
          imagem="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1"
        />
        <CardImagemEsquerda
          titulo="Titulo"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, dolorem repudiandae voluptates quae illum!"
          imagem="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1"
        />
        <TextoComTitulo 
          titulo="Titulo"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque laboriosam libero saepe delectus, iusto possimus nulla voluptatem eum tenetur provident animi vitae sit suscipit? Autem explicabo sequi doloribus non rem consequuntur sed numquam a soluta, suscipit quo, unde ad ex obcaecati temporibus nisi? Nulla assumenda nobis amet sapiente odio dolores exercitationem hic voluptas ex facere doloremque deleniti neque harum at dicta consectetur ab molestiae enim sed, aliquam accusantium. Numquam necessitatibus facere veniam quam fugiat esse fugit, deserunt obcaecati deleniti nesciunt rerum ea odit consectetur autem voluptatum quisquam dolores molestias aliquid quia vero nisi atque ab iste totam. Magni, similique."
        />
        
    </div>
  )
}
