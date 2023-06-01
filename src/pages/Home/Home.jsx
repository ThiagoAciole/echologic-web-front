import CardMaterial from "./Card/card"
import Colaboradores from "./Organização/colaboradores"
import Section1 from "./Section 1/Section1"
import Sobre from "./Sobre/sobre"
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
    <div  className="h-full ">
        <Section1/>
    </div>
    <div className="ml-12 mr-12">
        <Sobre/>
    </div>
    <div className="mt-24 h-full items-center flex flex-col sm:flex-col space-y-8">
       
        <Colaboradores/>
           
        
    </div>
    <div id="lixoEletronico" className="mt-24 h-full items-center flex flex-col sm:flex-col space-y-8">
        <div className="space-y-8 sm:w-1/2 sm:p-8 mx-auto ">
            <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center">Conheça os Materiais que degradam o meio ambiente</h1>
            <p className="font-sans text-xl text-gray-700 text-center">
            Conheça os principais materiais utilizados na fabricação de equipamentos de informática e seu impacto ambiental
            </p>
        </div>

            <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 ml-12 mr-12">
            <CardMaterial 
            name="Ouro" 
            description="Ouro é um metal precioso de cor amarela brilhante, altamente valorizado por sua beleza e raridade, utilizado há séculos como símbolo de riqueza e status. Sua durabilidade, maleabilidade e condutividade o tornam versátil para joias, eletrônica e várias aplicações industriais." 
            url="ouro" 
            image="https://ejior.com.br/wp-content/uploads/2020/10/ejior.com.br-ouro-conheca-a-historia-que-alavancou-seu-poder-no-mundo-pilha-de-barras-de-ouro-em-branco-290464-674.jpg" />
            
            <CardMaterial 
            name="Zinco"  
            description="Zinco é um metal azulado-branco, conhecido por sua resistência à corrosão. Amplamente utilizado na indústria, o zinco desempenha um papel essencial como revestimento protetor, bem como na fabricação de ligas metálicas e na produção de pilhas."
            url="zinco" 
            image="https://5.imimg.com/data5/UN/SS/MY-34737767/zinc-metal-500x500.jpg"/>
            <CardMaterial 
            name="Vidro" 
            description="Vidro é um material transparente e sólido, composto principalmente de sílica derretida e resfriada rapidamente. É amplamente utilizado na fabricação de janelas, recipientes, lentes ópticas e em uma variedade de aplicações industriais e artísticas devido à sua transparência, durabilidade e capacidade de ser moldado em diferentes formas."
            url="vidro" 
            image="https://39124.cdn.simplo7.net/static/39124/sku/molduras-para-quadros-adicional-de-vidro-a4--p-1530814699322.jpg"/>  
            
            </div>
            <div className="mt-12">
            <button className="Botão rounded-full text-base">Ver Mais</button>
            </div>
            
           
            
    </div>
    <div>
  
    </div>
    <div id="maisInfo" className="mt-24 h-full items-center flex flex-col space-y-8 text-center mx-auto p-6 ">
  <h1 className="font-sans text-5xl font-extrabold text-gray-700 w-full sm:w-1/2">Mais Informações Sobre o Lixo Eletrônico e Seu devido Descarte</h1>
  <p className="font-sans text-xl text-gray-700">
    Descubra tudo sobre o descarte correto do lixo eletrônico e a legislação que o envolve. Entenda por que é tão importante agir de forma responsável ao se livrar de seus dispositivos antigos. Saiba como você pode contribuir para a proteção do meio ambiente e evitar problemas legais. Clique aqui para obter mais informações sobre o tema e fique por dentro de todas as orientações e regulamentações relacionadas ao descarte adequado de lixo eletrônico.
  </p>
  <Link to="/mais-informacoes">
  <button className="btn">Saiba Mais</button>
  </Link>
 
</div>

      </>
    )
    
}

