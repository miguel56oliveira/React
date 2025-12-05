import { Link } from "react-router-dom";
import { useState } from "react";
import { games } from "../data/games";
import CategoriesMenu from "../components/CategoriesMenu";

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredGames = selectedCategory
    ? games.filter(game => game.plataforma === selectedCategory)
    : games;

  return (
    <div className="container">
      <h1>Lista de Videojogos</h1>

      {/* Menu de categorias */}
      <CategoriesMenu onSelect={setSelectedCategory} />

      {selectedCategory && (
        <p style={{ marginBottom: "10px" }}>
          Categoria selecionada: <strong>{selectedCategory}</strong>
        </p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {filteredGames.map(game => (
          <Link 
            key={game.id} 
            to={`/jogo/${game.id}`} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img src={game.imagem} alt={game.nome} />
              <h3>{game.nome}</h3>
              <p>{game.plataforma}</p>

              <div className="card-buttons">
                <button 
                  className="buy-btn"
                  onClick={(e) => {
                    e.preventDefault(); // impede o link de navegar
                    // Aqui pode adicionar lógica para adicionar ao carrinho
                    alert(`${game.nome} adicionado ao carrinho!`);
                  }}
                >
                  COMPRAR
                </button>

                <button
                  className="price-btn"
                  disabled
                  aria-disabled="true"
                  tabIndex={-1}
                  onClick={(e) => e.preventDefault()}
                >
                  {game.preco}€
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
