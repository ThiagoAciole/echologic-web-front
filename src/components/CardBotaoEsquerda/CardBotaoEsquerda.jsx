import styles from "./CardBotaoEsquerda.module.css"

export default function CardBotaoEsquerda({titulo, texto, imagem, caminho}) {
    return (
      <div className="flex justify-around mt-20 sm:justify-center items-center" id={styles.cardBotaoEsquerdaResponsividade}>
          <img className="rounded-lg md:w-80 md:h-96" src={imagem} alt="img" />
          <div className="pl-32 flex flex-col justify-center md:w-7/12">
              <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5">{titulo}</h1>
              <p className="pt-10 pb-5 lg:text-xl text-sm font-sans">{texto}</p>
              <div className={`pt-10 flex flex-row-reverse ${styles.divBotao}`}>
                  <a href={caminho} className={`font-sans text-left p-3 rounded-lg ${styles.botao}`}>Saiba mais</a>
              </div>
          </div>
      </div>
    )
}
