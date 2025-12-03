import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Conquista.css';

export default function Conquistas() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  // --- Ícones Personalizados (.png) ---
  const MenuIcon = () => (
    <img src="./icons/lista.png" className='icon-lista' alt="Menu" />
  );
  
  // Ícones do Menu Lateral
  const HomeRIcon = () => <img src="./icons/home-r.png" className='icon-side' alt="Home" />;
  const MedalRIcon = () => <img src="./icons/medalha-r.png" className='icon-side' alt="Medalha" />;
  const MissionRIcon = () => <img src="./icons/missao-r.png" className='icon-side' alt="Missão" />;
  const RankingRIcon = () => <img src="./icons/ranking-r.png" className='icon-side' alt="Ranking" />;
  const UserRIcon = () => <img src="./icons/user-r.png" className='icon-side' alt="User" />;

  // --- Dados dos Badges (Mock) ---
  const badges = [
    { id: 1, name: 'Primeiros Passos', desc: 'Completou 1 missão', icon: '🦶', unlocked: true },
    { id: 2, name: 'Hidratado', desc: 'Bebeu 2L de água', icon: '💧', unlocked: true },
    { id: 3, name: 'Chama Eterna', desc: '7 dias de ofensiva', icon: '🔥', unlocked: false },
    { id: 4, name: 'Máquina', desc: 'Chegou ao Nível 10', icon: '🤖', unlocked: false },
    { id: 5, name: 'Social', desc: 'Entrou em uma Liga', icon: '🤝', unlocked: true },
    { id: 6, name: 'Lendário', desc: 'Top 1 no Ranking', icon: '👑', unlocked: false },
  ];

  return (
    <div className="badges-container">
      
      {/* --- MENU LATERAL (SIDEBAR) --- */}
      {/* Overlay */}
      <div 
        className={`overlay ${openMenu ? "show" : ""}`} 
        onClick={() => setOpenMenu(false)}
      />

      {/* Gaveta do Menu */}
      <div className={`side-menu ${openMenu ? "open" : ""}`}>
        <h3 className="side-title">Menu</h3>

        <button className="side-item" onClick={() => navigate('/')}>
            <HomeRIcon /> Home
        </button>
        <button className="side-item" onClick={() => {navigate('/perfil'); setOpenMenu(false)}}>
            <UserRIcon /> Perfil
        </button>
        <button className="side-item" onClick={() => {navigate('/conquista'); setOpenMenu(false)}}>
            <MedalRIcon /> Conquistas
        </button>
        <button className="side-item" onClick={() => navigate('/ranking')}>
            <RankingRIcon /> Ranking
        </button>
        <button className="side-item" onClick={() => navigate('/missao')}>
            <MissionRIcon /> Missões
        </button>
      </div>


      {/* --- CABEÇALHO (Header) --- */}
      <header className="page-header">
        <h1 className="page-title">Suas <span>Conquistas</span></h1>
        
        {/* Botão que abre o menu */}
        <button className="btn-icon" onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </button>
      </header>


      {/* --- GRID DE BADGES --- */}
      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">
                {badge.icon}
            </div>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-desc">
                {badge.unlocked ? badge.desc : 'Bloqueado'}
            </div>
            {/* Se quiser um cadeado visual extra */}
            {!badge.unlocked && <div style={{fontSize:'10px', marginTop:'5px'}}>🔒</div>}
          </div>
        ))}
      </div>

    </div>
  );
}