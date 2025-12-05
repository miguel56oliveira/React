import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>Contacto</h1>
      <form>
        <label>Nome:</label><br />
        <input value={nome} onChange={e => setNome(e.target.value)} /><br /><br />
        <label>Email:</label><br />
        <input value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
        <button type="button" onClick={() => alert("Mensagem enviada!")}>
          Enviar
        </button>
      </form>
    </div>
  );
}
