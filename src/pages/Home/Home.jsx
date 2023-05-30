import CardMaterial from "./Card/card"
import UnDraw from "../../../public/UnDraw.svg"

export default function Home() {
  return (
    <><div className="mt-32 h-full items-center  flex flex-col sm:flex-row space-y-8 ">
          <div className="sm:w-1/2 ">
              <img src={UnDraw} alt="" className="object-cover h-full w-full rounded-s-3xl" />
          </div>
          <div className="space-y-8 sm:w-1/2 sm:p-8">
              <h1 className="font-sans text-5xl font-extrabold text-gray-700">Impacto Ambiental de Tecnologias Modernas</h1>
              <p className="font-sans text-xl text-gray-700">Descubra o lado obscuro da inovação tecnológica. Nesta jornada, exploraremos as Tecnologias que Prejudicam o Meio Ambiente</p>
          </div>
          
      </div>
      <div id="sobre" className="mt-40 h-full items-center flex flex-col sm:flex-row space-y-8">
              <div className="space-y-8 sm:w-1/2 sm:p-8">
                  <h1 className="font-sans text-5xl font-extrabold text-gray-700">Sobre</h1>
                  <p className="font-sans text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mauris mauris. Vestibulum non sagittis ligula, at convallis quam. Integer hendrerit quam non nisi egestas, nec lobortis massa posuere. Fusce sed eros mauris. Sed semper purus nisl, eu tempus magna tempor sed. In id ex vitae mi elementum malesuada.</p>
              </div>
              <div className="sm:w-1/2">
                  <img src="https://camo.githubusercontent.com/7eb2286557b85ec1c8514ade44d6ad6799c1576b933275439737b2306de80305/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3936383535363936393432383431383635302f313131303330373731313631363330373233302f312e706e673f" alt="" className="object-cover h-full w-full " />
              </div>
          </div>
          <div className="mt-40 h-full items-center flex flex-col sm:flex-col space-y-8">
              <div className="space-y-8 sm:w-1/2 sm:p-8">
                  <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center">Conheça os Materiais que degradam o meio ambiente</h1>
                  </div>
                  <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <CardMaterial name="Ouro" url="ouro" />
                    <CardMaterial />
                    <CardMaterial />
                    <CardMaterial />
                    </div>
                    <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <CardMaterial />
                    <CardMaterial />
                    <CardMaterial />
                    <CardMaterial />
                    </div>
                  </div>
                  <div className="mt-40 h-full items-center flex flex-col sm:flex-col space-y-8">
    <h1 className="font-sans text-5xl font-extrabold text-gray-700">Legislação</h1>
    <p className="font-sans text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mauris mauris. Vestibulum non sagittis ligula, at convallis quam. Integer hendrerit quam non nisi egestas, nec lobortis massa posuere. Fusce sed eros mauris. Sed semper purus nisl, eu tempus magna tempor sed. In id ex vitae mi elementum malesuada.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mauris mauris. Vestibulum non sagittis ligula, at convallis quam. Integer hendrerit quam non nisi egestas, nec lobortis massa posuere. Fusce sed eros mauris. Sed semper purus nisl, eu tempus magna tempor sed. In id ex vitae mi elementum malesuada.
    </p>
  </div>
      </>
    )
    
}

