import Cardt from "../card";
import { Link } from "react-router-dom";

export default function SlideCard() {
  return (
    <div className="justify-between mt-8 h-full items-center flex flex-col sm:flex-col space-y-8">
      <div className="flex flex-col justify-between space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mx-4">
        <Cardt
          name="Ouro"
          description="Ouro é um metal precioso de cor amarela brilhante, altamente valorizado por sua beleza e raridade, utilizado há séculos como símbolo de riqueza e status. Sua durabilidade, maleabilidade e condutividade o tornam versátil para joias, eletrônica e várias aplicações industriais."
          url="ouro"
          image="https://ejior.com.br/wp-content/uploads/2020/10/ejior.com.br-ouro-conheca-a-historia-que-alavancou-seu-poder-no-mundo-pilha-de-barras-de-ouro-em-branco-290464-674.jpg"
        />

        <Cardt
          name="Zinco"
          description="Zinco é um metal azulado-branco, conhecido por sua resistência à corrosão. Amplamente utilizado na indústria, o zinco desempenha um papel essencial como revestimento protetor, bem como na fabricação de ligas metálicas e na produção de pilhas."
          url="zinco"
          image="https://5.imimg.com/data5/UN/SS/MY-34737767/zinc-metal-500x500.jpg"
        />
        <Cardt
          name="Vidro"
          description="Vidro é um material transparente e sólido, composto principalmente de sílica derretida e resfriada rapidamente. É amplamente utilizado na fabricação de janelas, recipientes, lentes ópticas e em uma variedade de aplicações industriais e artísticas devido à sua transparência, durabilidade e capacidade de ser moldado em diferentes formas."
          url="vidro"
          image="https://39124.cdn.simplo7.net/static/39124/sku/molduras-para-quadros-adicional-de-vidro-a4--p-1530814699322.jpg"
        />
      </div>
      <Link to="/lixos-eletronicos">
      <div className="mt-12 flex justify-center">
        <button className="Botão rounded-full text-base">Ver Mais</button>
      </div>
      </Link>
      
    </div>
  );
}
