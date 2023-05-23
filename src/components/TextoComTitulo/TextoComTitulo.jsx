
export default function TextoComTitulo({titulo, texto}) {
  return (
    <div className="flex flex-col mt-20">
        <div className="text-center">
            <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5 pb-5">{titulo}</h1>
        </div>
        <div className="text-left mt-10">
            <p className="pt-5 pb-5 lg:text-xl text-sm font-sans">{texto}</p>
        </div>
    </div>
  )
}
