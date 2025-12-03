import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ranking.css";

export default function Ranking() {
  const navigate = useNavigate();

  // Exemplo de ranking — depois você pode puxar do backend
  const ranking = [
    { pos: 1, nome: "Lucas Silva", pontos: 1280, emoji: "👑" },
    { pos: 2, nome: "Mariana Souza", pontos: 1120, emoji: "🔥" },
    { pos: 3, nome: "Pedro Martins", pontos: 960, emoji: "⚡" },
    { pos: 4, nome: "João Almeida", pontos: 820, emoji: "💪" },
    { pos: 5, nome: "Você", pontos: 780, emoji: "😎" },
  ];

  return (
    <div className="ranking-container">

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

      {/* Navegação inferior */}
     <nav className="bottom-nav">

    <div className="nav-item" onClick={() => navigate('/missao')}>
        <span className="nav-icon">⚔️</span> Missões
    </div>

    <div className="nav-item" onClick={() => navigate('/ranking')}>
        <span className="nav-icon">🏆</span> Ranking
    </div>

    <div className="nav-item" onClick={() => navigate('/conquista')}>
        <span className="nav-icon">🏅</span> Badges
    </div>

    <div className="nav-item" onClick={() => navigate('/nivel')}>
        <span className="nav-icon">📶</span> Níveis
    </div>

    <div className="nav-item" onClick={() => navigate('/rotina')}>
        <span className="nav-icon">📅</span> Rotina
    </div>

    <div className="nav-item" onClick={() => navigate('/ligas')}>
        <span className="nav-icon">🔥</span> Ligas
    </div>

    <div className="nav-item" onClick={() => navigate('/estatistica')}>
        <span className="nav-icon">📊</span> Estatísticas
    </div>

    <div className="nav-item" onClick={() => navigate('/configuracao')}>
        <span className="nav-icon">⚙️</span> Configurações
    </div>

    <div className="nav-item" onClick={() => navigate('/historico_missao')}>
        <span className="nav-icon">📘</span> Histórico Missões
    </div>

    <div className="nav-item" onClick={() => navigate('/historico_treino')}>
        <span className="nav-icon">🏋️</span> Histórico Treinos
    </div>

    <div className="nav-item" onClick={() => navigate('/progresso')}>
        <span className="nav-icon">📈</span> Progresso
    </div>

    <div className="nav-item active">
        <span className="nav-icon">👤</span> Perfil
    </div>
</nav>
    </div>
  );
}
