import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Progresso.css";

export default function Progresso() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    peso: 82,
    abdomen: 96,
    nivel: 4,
    xpAtual: 120,
    xpProximo: 200,
  });

  useEffect(() => {
    // Em um futuro → GET da API
  }, []);

  const calcPorcentagem = () => {
    return Math.round((dados.xpAtual / dados.xpProximo) * 100);
  };

  return (
    <div className="progresso-container">
      <h2 className="titulo">Meu Progresso</h2>

      {/* CARD DE NÍVEL */}
      <div className="card-nivel">
        <div className="nivel-numero">Nível {dados.nivel}</div>

        <div className="barra-xp">
          <div
            className="barra-xp-fill"
            style={{ width: `${calcPorcentagem()}%` }}
          ></div>
        </div>

        <div className="xp-info">
          {dados.xpAtual} XP / {dados.xpProximo} XP
        </div>
      </div>

      {/* METRICAS */}
      <h3 className="subtitulo">Métricas Corporais</h3>

      <div className="metricas-box">
        <div className="metrica">
          <span className="metrica-label">Peso Atual</span>
          <span className="metrica-valor">{dados.peso} kg</span>
        </div>

        <div className="metrica">
          <span className="metrica-label">Largura Abdômen</span>
          <span className="metrica-valor">{dados.abdomen} cm</span>
        </div>
      </div>

      {/* Bottom Navigation */}
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
