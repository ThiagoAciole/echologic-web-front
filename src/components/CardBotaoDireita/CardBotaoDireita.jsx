import styles from "./CardBotaoDireita.module.css"

export default function CardBotaoDireita({titulo, texto, imagem, caminho}) {
    return (
      <div className="border w-2/3 flex justify-around mb-20 mt-20 sm:justify-center items-center" id={styles.cardBotaoDireitaResponsividade}>
          <div className="pr-32 flex flex-col justify-center md:w-7/12">
              <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5">{titulo}</h1>
              <p className="pt-10 pb-5 lg:text-xl text-sm font-sans">{texto}</p>
              <div className={`pt-10 ${styles.divBotao}`}>
                  <a href={caminho} className={`font-sans text-left p-3 rounded-lg ${styles.botao}`}>Saiba mais</a>
              </div>
          </div>
          <img className="rounded-lg md:w-80 md:h-96" src={imagem} alt="img" />
      </div>
    )
}

  //#224722