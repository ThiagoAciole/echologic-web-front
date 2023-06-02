import styles from './CardImagemDireita.module.css'

export default function CardImagemDireita({titulo, texto, imagem,link1,link2}) {
  return (
    <div
    id="sobre"
    className="mt-24 p-6 h-full items-start flex flex-col sm:flex-row space-y-8 space-x-0 sm:space-x-8 sm:space-y-0 justify-around"
  >
    
    <div className="space-y-8 sm:w-1/2 sm:p-8">
      <h1 className="font-sans text-5xl font-extrabold text-gray-700">
        {titulo}
      </h1>
      <p className="font-sans text-xl text-gray-700 ">
        {texto}
      </p>
      <div className="flex flex-col">
          <a
            href="https://sesuma.org.br/prefeitura-de-campina-grande-instala-mais-uma-area-para-coleta-de-residuos-eletroeletronicos/"
            className="pt-1 pb-1 lg:text-xl text-sm font-sans text-blue-700"
          >
            {link1}
          </a>
          <a
            href="https://paraibaonline.com.br/paraiba/2023/01/06/saiba-como-descartar-lixo-eletronico-em-campina-grande/"
            className="pt-1 pb-1 lg:text-xl text-sm font-sans text-blue-700"
          >
            {link2}
          </a>
        </div>
    </div>
    <div className="">
      <img className="w-96" src={imagem} alt="" />
    </div>

  </div>
  )
}
