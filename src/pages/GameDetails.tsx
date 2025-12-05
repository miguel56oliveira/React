import { useParams, useNavigate } from "react-router-dom";
import { games } from "../data/games";

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(g => g.id === Number(id));

  if (!game) return <p>Jogo não encontrado.</p>;

  return (
    <div className="container">
      <h1>{game.nome}</h1>
      <img src={game.imagem} alt={game.nome} style={{ width: "300px", borderRadius: "10px" }} />
      <p>Plataforma: {game.plataforma}</p>
      <p style={{ fontWeight: "bold", color: "#27ae60" }}>Preço: {game.preco}€</p>
      <button onClick={() => navigate(-1)}>⬅ Voltar</button>
    </div>
  );
}
