import styles from './CardImagemEsquerda.module.css'

export default function CardImagemDireita({titulo, texto, imagem}) {
  return (
    <div
      id="sobre"
      className=" mt-24 p-6 h-full items-start flex flex-col sm:flex-row space-y-8 space-x-0 sm:space-x-8 sm:space-y-0 justify-around"
    >
       <div className="">
        <img className="w-96" src={imagem} alt="" />
      </div>
      <div className="space-y-8 sm:w-1/2 sm:p-8">
        <h1 className="font-sans text-5xl font-extrabold text-gray-700">
          {titulo}
        </h1>
        <p className="font-sans text-xl text-gray-700 ">
          {texto}
        </p>
      </div>
      
    </div>
  )
}
  