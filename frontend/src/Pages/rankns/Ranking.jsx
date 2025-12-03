import React from "react";
import { useNavigate } from "react-router-dom";
import Barguer from "../../components/barguers/Barguer"; // Importação do componente
import "./Ranking.css";

export default function Ranking() {
  const navigate = useNavigate();
  // Estado 'openMenu' e ícones locais removidos.

  // --- Dados do Ranking ---
  const ranking = [
    { pos: 1, nome: "Lucas Silva", pontos: 1280},
    { pos: 2, nome: "Mariana Souza", pontos: 1120},
    { pos: 3, nome: "Pedro Martins", pontos: 960},
    { pos: 4, nome: "João Almeida", pontos: 820},
    { pos: 5, nome: "Você", pontos: 780},
  ];

  return (
    <div className="ranking-container">

      {/* Cabeçalho com o Componente Barguer */}
      <div className="header-top">
        {/* O componente já contém o botão e o menu lateral */}
        <Barguer />
      </div>

      {/* --- CONTEÚDO DO RANKING --- */}
      <h2 className="ranking-title">Ranking Global</h2>
      <p className="ranking-desc">Suba posições treinando diariamente!</p>

      <div className="ranking-list">
        {ranking.map((p) => (
          <div 
            key={p.pos} 
            className={`ranking-card ${p.nome === "Você" ? "me" : ""}`}
          >
            <div className="rank-position">{p.pos}</div>

            <div className="rank-info">
              <span className="rank-name">
                {/* Nota: Seus dados não tinham a chave 'emoji', mantive a lógica original */}
                {p.emoji} {p.nome}
              </span>
              <span className="rank-points">{p.pontos} pts</span>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/perfil")}>
        Voltar
      </button>

    </div>
  );
}