import React from "react";
import { useNavigate } from "react-router-dom";
import "./Historico_Missao.css";

export default function Historico() {
  const navigate = useNavigate();

  // Exemplo de histórico (trocar depois pelo backend)
  const historico = [
    { nome: "Treino de Peito", data: "01/12/2025", status: "Concluído", emoji: "🔥" },
    { nome: "Treino de Costas", data: "30/11/2025", status: "Concluído", emoji: "💪" },
    { nome: "Corrida 3km", data: "29/11/2025", status: "Concluído", emoji: "⚡" },
    { nome: "Treino de Pernas", data: "28/11/2025", status: "Concluído", emoji: "🏋️" },
  ];

  return (
    <div className="hist-container">
      <h2 className="hist-title">Histórico de Missões</h2>
      <p className="hist-desc">Acompanhe sua jornada até aqui!</p>

      <div className="hist-list">
        {historico.map((h, i) => (
          <div className="hist-card" key={i}>
            <div className="hist-emoji">{h.emoji}</div>
            <div className="hist-info">
              <h3>{h.nome}</h3>
              <p>{h.data} — {h.status}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/perfil")}>
        Voltar
      </button>

      {/* Bottom Nav */}
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
