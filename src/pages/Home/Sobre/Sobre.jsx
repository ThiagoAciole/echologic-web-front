import CardSema from "./CardSema";

export default function Sobre() {
  return (
    <div className="justify-between">
      <div
        id="sobre"
        className="mt-24 h-full items-start flex flex-col sm:flex-row space-y-8 space-x-0 sm:space-x-8 sm:space-y-0 mx-auto"
      >
        <div className="space-y-8 sm:w-1/2 sm:p-8">
          <h1 className="font-sans text-5xl font-extrabold text-gray-700 text-center sm:text-left">
            Conheça Nosso Projeto
          </h1>
          <p className="font-sans text-xl text-gray-700 text-center sm:text-left">
            Bem Vindo Nosso site dedicado a Semana do Meio Ambiente aqui
            abordaremos o impacto ambiental da utilização de materiais na
            construção de equipamentos de informática. Buscamos conscientizar
            sobre o impacto ambiental da indústria de informática e promover
            alternativas sustentáveis. Oferecemos informações detalhadas sobre
            os materiais utilizados, seu ciclo de vida e consequências
            ambientais. Destacamos alternativas sustentáveis, incentivamos a
            reciclagem e o descarte adequado dos dispositivos eletrônicos.
            Queremos promover mudanças positivas na indústria de tecnologia,
            compartilhando conhecimentos, estudos de caso e recursos para
            capacitar os usuários a tomar decisões informadas e responsáveis.
          </p>
        </div>
        <div className="mx-4 sm:w-1/2">
          <CardSema />
        </div>
      </div>
    </div>
  );
}
