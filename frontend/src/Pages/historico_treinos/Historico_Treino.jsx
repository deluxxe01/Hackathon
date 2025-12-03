import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Historico_Treino.css";

export default function Historico() {
  const navigate = useNavigate();
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    // Aqui você pode substituir pelo GET da API futuramente
    const mock = [
      { id: 1, titulo: "Missão completada: 30 flexões", data: "2025-02-01", xp: 30 },
      { id: 2, titulo: "Missão completada: 10km caminhada", data: "2025-01-29", xp: 50 },
      { id: 3, titulo: "Missão completada: 1h de treino", data: "2025-01-28", xp: 40 },
      { id: 4, titulo: "Missão completada: Dieta no dia", data: "2025-01-28", xp: 20 },
    ];

    setHistorico(mock);
  }, []);

  return (
    <div className="historico-container">

      <h2 className="historico-title">Histórico de Missões</h2>

      <div className="historico-list">
        {historico.map((item) => (
          <div key={item.id} className="historico-item">
            <div className="hist-text">
              <h3>{item.titulo}</h3>
              <p className="hist-date">{item.data}</p>
            </div>
            <div className="hist-xp">+{item.xp} XP</div>
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
