import styles from './CardImagemDireita.module.css'

export default function CardImagemDireita({titulo, texto, imagem}) {
  return (
    <div className="flex justify-around mt-20 sm:justify-center items-center" id={styles.cardImagemDireitaResponsividade}>
        <div className="pr-32 flex flex-col justify-center md:w-7/12">
            <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5">{titulo}</h1>
            <p className="pt-10 pb-5 lg:text-xl text-sm font-sans">{texto}</p>
        </div>
        <img className="border-2 rounded-lg md:w-80 md:h-96" src={imagem} alt="img" />
    </div>
  )
}
