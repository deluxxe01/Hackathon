import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Flame, Calendar, Activity, 
  Target, Award, Users, ChevronRight, 
  TrendingUp, Droplets, Zap, Medal
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  // --- DADOS MOCKADOS (Simulação) ---
  const userLevel = {
    current: 7,
    title: 'Guerreiro',
    xpCurrent: 520,
    xpNext: 700,
    streak: 12 // dias seguidos
  };

  const weekRoutine = [
    { day: 'Seg', workout: 'Peito + Tríceps', status: 'done' },
    { day: 'Ter', workout: 'Costas + Bíceps', status: 'done' },
    { day: 'Qua', workout: 'Pernas', status: 'missed' },
    { day: 'Qui', workout: 'Abdômen', status: 'pending' },
    { day: 'Sex', workout: 'Cardio', status: 'pending' },
  ];

  const missions = [
    { title: 'Treinar 20 minutos', progress: 100, total: 100, xp: 50, done: true },
    { title: 'Beber 2L de água', progress: 1.5, total: 2, xp: 20, done: false },
    { title: 'Manter sequência', progress: 2, total: 3, xp: 100, done: false },
  ];

  const achievements = [
    { icon: <Zap />, title: 'Primeiros Passos', unlocked: true },
    { icon: <Droplets />, title: 'Hidratado', unlocked: true },
    { icon: <Flame />, title: 'Máquina', unlocked: false },
    { icon: <Award />, title: 'Lendário', unlocked: false },
  ];

  // --- COMPONENTES VISUAIS ---

  // 1. Header do Nível (Estilo Cartão Roxo)
  const LevelCard = () => (
    <div className="level-card fade-in">
      <div className="level-info">
        <div>
          <span className="level-badge">Nível {userLevel.current}</span>
          <h2 className="level-title">{userLevel.title}</h2>
        </div>
        <div className="streak-badge">
          <Flame size={18} fill="#FF9F43" stroke="none" />
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

  // 2. Rotina Semanal (Horizontal Scroll)
  const RoutineSection = () => (
    <section className="section-container fade-in delay-1">
      <div className="section-header">
        <h3>Rotina da Semana</h3>
        <Calendar size={20} color="#6C5CE7" />
      </div>
      <div className="routine-list">
        {weekRoutine.map((item, index) => (
          <div key={index} className={`routine-card ${item.status}`}>
            <span className="day-label">{item.day}</span>
            <div className="status-dot"></div>
            <span className="workout-label">{item.workout}</span>
          </div>
        ))}
      </div>
    </section>
  );

  // 3. Missões (Lista Vertical)
  const MissionsSection = () => (
    <section className="section-container fade-in delay-2">
      <div className="section-header">
        <h3>Missões Diárias</h3>
        <Target size={20} color="#6C5CE7" />
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

  // 4. Conquistas (Grid)
  const AchievementsSection = () => (
    <section className="section-container fade-in delay-3">
      <div className="section-header">
        <h3>Conquistas</h3>
        <Trophy size={20} color="#6C5CE7" />
      </div>
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div key={index} className={`ach-card ${ach.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="ach-icon">{ach.icon}</div>
            <span className="ach-title">{ach.title}</span>
          </div>
        ))}
      </div>
    </section>
  );

  // 5. Ranking (Simples)
  const RankingPreview = () => (
    <section className="section-container fade-in delay-3">
      <div className="section-header">
        <h3>Ranking Global</h3>
        <Users size={20} color="#6C5CE7" />
      </div>
      <div className="ranking-item top-1">
        <span className="rank-pos">1</span>
        <div className="rank-avatar">LS</div>
        <span className="rank-name">Lucas Silva</span>
        <span className="rank-pts">1280 pts</span>
      </div>
      <div className="ranking-item user-rank">
        <span className="rank-pos">5</span>
        <div className="rank-avatar me">EU</div>
        <span className="rank-name">Você</span>
        <span className="rank-pts">780 pts</span>
      </div>
    </section>
  );



  return (
    <div className="dashboard-container">
      <style>{styles}</style>

      {/* HEADER */}
      <div className="top-bar">
        <h1 className="app-logo">VittaLight</h1>
        <div className="profile-pic" onClick={() => navigate('/perfil')}>EU</div>
      </div>

      {/* CONTEÚDO ROLÁVEL */}
      <div className="scroll-content">
        
        {/* Nível e XP */}
        <LevelCard />

        {/* Rotina Semanal */}
        <RoutineSection />

        {/* Missões */}
        <MissionsSection />

        {/* Ranking */}
        <RankingPreview />

        {/* Conquistas */}
        <AchievementsSection />

      </div>
    </div>
  );
}