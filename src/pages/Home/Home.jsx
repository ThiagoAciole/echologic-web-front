import CardMaterial from "./Card/card"
import Section1 from "./Section 1/Section1"
import Sobre from "./Sobre/sobre"

export default function Home() {
  return (
    <><div className="h-full ">
          <div >
              <Section1/>
          </div>
          
      </div>
      <div className="ml-12 mr-12">
            <Sobre/>
      </div>
      
          <div className="mt-40 h-full items-center flex flex-col sm:flex-col space-y-8">
              <div className="space-y-8 sm:w-1/2 sm:p-8">
                  <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center">Conheça os Materiais que degradam o meio ambiente</h1>
                  </div>
                  <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 ml-12 mr-12">
                    <CardMaterial name="Ouro" url="ouro" />
                    <CardMaterial name="Ouro" url="ouro" />
                    <CardMaterial name="Ouro" url="ouro" />
                    
                    </div>
                    <button className="btn">Ver Mais</button>
                  </div>
                  <div className="mt-40 h-full items-center flex flex-col sm:flex-col space-y-8 text-center ml-12 mr-12">
    <h1 className="font-sans text-5xl font-extrabold text-gray-700 w-1/2 ">Mais Informações Sobre o Lixo Eletronico e Seu devido Descarte</h1>
    <p className="font-sans text-xl text-gray-700">
    Descubra tudo sobre o descarte correto do lixo eletrônico e a legislação que o envolve. Entenda por que é tão importante agir de forma responsável ao se livrar de seus dispositivos antigos. Saiba como você pode contribuir para a proteção do meio ambiente e evitar problemas legais. Clique aqui para obter mais informações sobre o tema e fique por dentro de todas as orientações e regulamentações relacionadas ao descarte adequado de lixo eletrônico.
    </p>
    <button className="btn">Saiba Mais</button>
  </div>
      </>
    )
    
}

