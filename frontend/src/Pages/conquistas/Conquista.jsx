import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Conquista.css';

export default function Conquistas() {
  const navigate = useNavigate();

  // Mock: true = desbloqueada, false = bloqueada
  const badges = [
    { id: 1, name: 'Primeiros Passos', desc: 'Completou 1 missão', icon: '🦶', unlocked: true },
    { id: 2, name: 'Hidratado', desc: 'Bebeu 2L de água em um dia', icon: '💧', unlocked: true },
    { id: 3, name: 'Chama Eterna', desc: '7 dias de ofensiva', icon: '🔥', unlocked: false },
    { id: 4, name: 'Máquina', desc: 'Chegou ao Nível 10', icon: '🤖', unlocked: false },
    { id: 5, name: 'Social', desc: 'Entrou em uma Liga', icon: '🤝', unlocked: true },
    { id: 6, name: 'Lendário', desc: 'Top 1 no Ranking Mensal', icon: '👑', unlocked: false },
  ];

  return (
    <div className="badges-container">

      <h1 className="page-title">Suas <span>Conquistas</span></h1>

      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">{badge.icon}</div>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-desc">{badge.unlocked ? badge.desc : '??? (Bloqueado)'}</div>
          </div>
        ))}
      </div>

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