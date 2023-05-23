import styles from './CardImagemEsquerda.module.css'

export default function CardImagemDireita() {
  return (
    <div className="flex space-x-5 mt-20 flex-wrap md:justify-between sm:justify-center items-center" id={styles.cardImagemEsquerdaResponsividade}>
        <div>
            <img className="border-2 rounded-lg md:w-80 md:h-96" src="https://th.bing.com/th/id/OIP.Nwu1eF1jvnH9dcOtjWEIdwAAAA?pid=ImgDet&rs=1" alt="img" />
        </div>
        <div className=" flex flex-col justify-center md:w-7/12">
            <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5">Título</h1>
            <p className="pt-10 pb-5 lg:text-xl text-sm font-sans">Lorem ipsum dolor sit consectetur adipisicing elit. Cupiditate cum rerum in facilis dolores placeat totam illo, suscipit eligendi vitae?</p>
        </div>
    </div>
  )
}
  