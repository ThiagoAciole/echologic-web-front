import styles from "./CardComLink.module.css";

export default function CardComLink({ titulo, texto, imagem, link1, link2 }) {
  return (
    <div
      className="flex justify-around mt-20 sm:justify-center items-center"
      id={styles.cardComLinkResponsividade}
    >
      <div className="pr-32 flex flex-col justify-center md:w-7/12">
        <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5">
          {titulo}
        </h1>
        <p className="pt-10 pb-5 lg:text-xl text-sm font-sans">{texto}</p>
        <div className="flex flex-col space-x-4">
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
      <img
        className="border-2 rounded-lg md:w-80 md:h-96"
        src={imagem}
        alt="img"
      />
    </div>
  );
}
