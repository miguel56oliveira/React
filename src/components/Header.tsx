import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/pesquisa/${search}`);
      setSearch("");
    }
  };

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#1e1e1e",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>🎮 GameStore</Link>
      </div>

      {/* Barra de pesquisa */}
      <div style={{ flex: 1, margin: "0 20px" }}>
        <input
          type="text"
          placeholder="Pesquisar jogos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSearch()}
          style={{
            width: "95%",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Login e Carrinho */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button style={{
          background: "transparent",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "8px 12px",
          color: "white",
          cursor: "pointer"
        }}>Login</button>
        <button style={{
          background: "transparent",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "8px 12px",
          color: "white",
          cursor: "pointer"
        }}>Carrinho</button>
      </div>
    </header>
  );
}
