export default function TextoComTitulo({referencias}) {
    return (
      <div className="p-12 flex flex-col mt-20">
          <div className="text-center">
              <h1 className="font-sans lg:text-5xl text-3xl font-extrabold text-gray-700 pt-5 pb-5">Referencias</h1>
          </div>
          <div className="text-left mt-10">
                {referencias.map(texto => <p className="pt-5 pb-5 lg:text-xl text-sm font-sans">{texto}</p>)}
          </div>
      </div>
    )
  }
  