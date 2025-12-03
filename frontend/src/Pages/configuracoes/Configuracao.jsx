import React from "react";
import { useNavigate } from "react-router-dom";
import "./Configuracao.css";

export default function Configuracoes() {
  const navigate = useNavigate();

  const options = [
    { nome: "Notificações", emoji: "🔔" },
    { nome: "Privacidade", emoji: "🔒" },
    { nome: "Idioma", emoji: "🌎" },
    { nome: "Tema", emoji: "🎨" },
    { nome: "Ajuda", emoji: "❓" },
  ];

  return (
    <div className="conf-container">
      <h2 className="conf-title">Configurações</h2>

      <div className="conf-list">
        {options.map((o, i) => (
          <div key={i} className="conf-card">
            <span className="conf-emoji">{o.emoji}</span>
            <span className="conf-text">{o.nome}</span>
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
