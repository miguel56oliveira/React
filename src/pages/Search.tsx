import { useParams } from "react-router-dom";
import { games } from "../data/games";

export default function Search() {
  const { texto } = useParams();

  const resultados = games.filter(g =>
    g.nome.toLowerCase().includes(String(texto).toLowerCase())
  );

  return (
    <div>
      <h1>Resultados para: "{texto}"</h1>
      {resultados.map(game => (
        <p key={game.id}>{game.nome}</p>
      ))}

      {resultados.length === 0 && <p>Nenhum jogo encontrado.</p>}
    </div>
  );
}
