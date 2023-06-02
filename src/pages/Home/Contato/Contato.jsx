import { useState } from "react";
import "./contato.css";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await sendEmail(name, email, message);
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }

    setIsSending(false);
  };

  const sendEmail = async (name, email, message) => {
    // Simulate sending an email
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Aqui você pode adicionar a lógica para enviar o email para o endereço desejado
    const emailData = {
      name,
      email,
      message,
      recipient: "thiagoaciole7@gmail.com",
    };

    // Aqui você pode fazer uma chamada para uma API ou serviço de envio de email
    // Passando o emailData para enviar o email para o destinatário
    console.log("Email sent:", emailData);
  };

  return (
    <div className="fundo rounded-lg">
      <h2 className="font-semibold text-green-800 mb-6">
        Agradecemos por visitar nosso site e esperamos que ele seja uma fonte valiosa de informações sobre o impacto ambiental dos materiais na indústria de equipamentos de informática. Junte-se a nós nessa jornada de conscientização e ação em prol de um futuro mais sustentável!
      </h2>
      {isSent ? (
        <p className="text-green-700 mb-4">Sua mensagem foi enviada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-green-800">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-12 p-6 shadow border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-green-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 p-6 shadow border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-green-800">
              Mensagem
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-6 shadow border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      )}
    </div>
  );
}
