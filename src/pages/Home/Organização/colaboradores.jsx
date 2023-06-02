import Organização from "./organização";
export default function Colaboradores() {
    return (
      <div className="mx-auto ">
        <h1 className="font-sans text-3xl font-extrabold text-gray-700 text-center">Colaboradores do projeto</h1>
        <div className="mt-12 flex flex-col sm:flex-row sm:space-x-4">
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/64097786?v=4" width="150px" alt="Avatar Thiago" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Thiago Aciole</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/40415279?v=4" width="150px" alt="Avatar Richard" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Richard Ferreira</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/93728229?v=4" width="150px" alt="Avatar Liedson" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Liedson Augusto</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/90874749?v=4" width="150px" alt="Avatar Emerson" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Emerson Ian</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/93790229?v=4" width="150px" alt="Avatar Ynnayron" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Ynnayron Juan</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/87623117?v=4" width="150px" alt="Avatar Ivysson" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Ivysson Uchoa</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img src="" width="150px" alt="Avatar Ivysson" className="rounded-full"/>
            <h1 className="font-sans font-extrabold text-gray-500 text-center">Ivysson Uchoa</h1>
            <p className="font-sans text-gray-700 text-center">Aluno</p>
          </div>
        </div>
        <Organização />
      </div>
    );
  }
  