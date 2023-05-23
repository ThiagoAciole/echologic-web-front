import CardImagemDireita from "../../components/CardImagemDireita/CardImagemDireita";
import CardImagemEsquerda from "../../components/CardImagemEsquerda/CardImagemEsquerda";
import TextoComTitulo from "../../components/TextoComTitulo/TextoComTitulo";

export default function TelaPadrao() {
  return (
    <div className="w-full mt-1 md:p-24 sm:p-12 p-5">
        <CardImagemDireita />
        <CardImagemEsquerda />
        <TextoComTitulo />
    </div>
  )
}
