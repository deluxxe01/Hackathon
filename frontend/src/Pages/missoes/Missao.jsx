import React from "react";
import { useNavigate } from "react-router-dom";
import "./Missao.css";

export default function Missao() {
  const navigate = useNavigate();

  const missoes = [
    {
      id: 1,
      titulo: "Missão: Treinar 20 minutos",
      desc: "Finalize uma sessão de treino hoje.",
      progresso: 60,
      recompensa: "50 XP",
    },
    {
      id: 2,
      titulo: "Missão: Desafio de lógica",
      desc: "Complete 1 desafio lógico.",
      progresso: 20,
      recompensa: "80 XP",
    },
    {
      id: 3,
      titulo: "Missão: Manter sequência",
      desc: "Treine por 3 dias consecutivos.",
      progresso: 100,
      recompensa: "100 XP",
      concluida: true,
    },
  ];

  return (
    <div className="missao-container">

      <h2 className="missao-title">Missões</h2>
      <p className="missao-desc">Conclua missões para ganhar XP e subir no ranking!</p>

      <div className="missao-list">
        {missoes.map((m) => (
          <div
            key={m.id}
            className={`missao-card ${m.concluida ? "done" : ""}`}
          >
            <div className="missao-header">
              <h3 className="missao-titulo">{m.titulo}</h3>
              <span className="missao-recompensa">{m.recompensa}</span>
            </div>

            <p className="missao-desc-item">{m.desc}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${m.progresso}%` }}
              ></div>
            </div>

            <p className="progress-text">{m.progresso}% concluído</p>
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
