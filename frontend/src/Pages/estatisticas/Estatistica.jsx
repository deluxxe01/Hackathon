import React from 'react';
import { useNavigate } from 'react-router-dom';
// 1. IMPORTANDO O BARGUER E OS ÍCONES BRANCOS
import Barguer, { IconsBranca } from "../../components/barguers/Barguer";
// 2. IMPORTANDO O CSS
import './Estatistica.css';

export default function Dashboard() {
  const navigate = useNavigate();

  // --- DADOS MOCKADOS (Simulação) ---
  const userLevel = {
    current: 7,
    title: 'Guilherme',
    xpCurrent: 520,
    xpNext: 700,
    streak: 12 // dias seguidos
  };

  const missions = [
    { title: 'Treinar 20 minutos', progress: 100, total: 100, xp: 50, done: true },
    { title: 'Beber 2L de água', progress: 1.5, total: 2, xp: 20, done: false },
    { title: 'Manter sequência', progress: 2, total: 3, xp: 100, done: false },
  ];

  // --- COMPONENTES VISUAIS INTERNOS ---

  // 1. Header do Nível (Estilo Cartão Roxo)
  const LevelCard = () => (
    <div className="level-card fade-in">
      <div className="level-info">
        <div>
          <span className="level-badge">Nível {userLevel.current}</span>
          <h2 className="level-title">{userLevel.title}</h2>
        </div>
        <div className="streak-badge">
          {/* Emoji de fogo para o streak */}
          <span role="img" aria-label="fogo">🔥</span>
          <span>{userLevel.streak} dias</span>
        </div>
      </div>
      
      <div className="xp-container">
        <div className="xp-labels">
          <span>XP {userLevel.xpCurrent}</span>
          <span>{userLevel.xpNext} XP</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${(userLevel.xpCurrent / userLevel.xpNext) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  // 2. Missões (Lista Vertical)
  const MissionsSection = () => (
    <section className="section-container fade-in delay-2">
      <div className="section-header">
        <h3>Missões Concluidas</h3>
        {/* Usando IconsBranca.Mission (Alvo/Missão) */}
        <div className="section-icon-wrapper">
          <img src="./icons/missao-r.png" alt="" />
            <IconsBranca.Mission />
        </div>
      </div>
      <div className="missions-list">
        {missions.map((mission, index) => (
          <div key={index} className="mission-item">
            <div className="mission-info">
              <span className={`mission-title ${mission.done ? 'completed' : ''}`}>
                {mission.title}
              </span>
              <span className="mission-xp">+{mission.xp} XP</span>
            </div>
            <div className="mini-progress-bg">
              <div 
                className="mini-progress-fill" 
                style={{ width: `${(mission.progress / mission.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  


  return (
    <div className="dashboard-container">
      
      {/* HEADER com Barguer */}
      <div className="top-bar">
        <Barguer />
        
        <h1 className="app-logo">Estatísticas</h1>
        
        <div className="profile-pic-placeholder" onClick={() => navigate('/perfil')}>
          EU
        </div>
      </div>

      {/* CONTEÚDO ROLÁVEL */}
      <div className="scroll-content">
        <LevelCard />
        
        {/* Missões */}
        <MissionsSection />
        
        
        
      </div>
    </div>
  );
}