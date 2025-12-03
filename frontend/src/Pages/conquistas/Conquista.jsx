import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Conquista.css';

// Componente simples para o ícone de lista
const MenuIcon = () => (
  <img src="./icons/lista.png" className='icon-lista' alt="Menu" />
);

export default function Conquistas() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false); // Estado do Menu Lateral

  // Mock: true = desbloqueada, false = bloqueada
  const badges = [
    { id: 1, name: 'Primeiros Passos', desc: 'Completou 1 missão', icon: '🦶', unlocked: true },
    { id: 2, name: 'Hidratado', desc: 'Bebeu 2L de água em um dia', icon: '💧', unlocked: true },
    { id: 3, name: 'Chama Eterna', desc: '7 dias de ofensiva', icon: '🔥', unlocked: false },
    { id: 4, name: 'Máquina', desc: 'Chegou ao Nível 10', icon: '🤖', unlocked: false },
    { id: 5, name: 'Social', desc: 'Entrou em uma Liga', icon: '🤝', unlocked: true },
    { id: 6, name: 'Lendário', desc: 'Top 1 no Ranking Mensal', icon: '👑', unlocked: false },
  ];

  // Renderização do Menu Lateral (igual ao Perfil)
  const renderSideMenu = () => (
    <>
      {/* Overlay escuro */}
      <div 
        className={`overlay ${openMenu ? "show" : ""}`} 
        onClick={() => setOpenMenu(false)}
      />

      {/* Menu Lateral */}
      <div className={`side-menu ${openMenu ? "open" : ""}`}>
        <h3 className="side-title">Menu</h3>

        <button className="side-item" onClick={() => navigate('/')}>🏠 Home</button>
        <button className="side-item" onClick={() => navigate('/perfil')}>👤 Perfil</button>
        <button className="side-item" onClick={() => {navigate('/conquista'); setOpenMenu(false);}}>🏆 Conquistas</button>
        <button className="side-item" onClick={() => navigate('/ranking')}>📊 Ranking</button>
        <button className="side-item" onClick={() => navigate('/missao')}>🎯 Missões</button>
      </div>
    </>
  );

  return (
    <div className="badges-container">
      
      {/* Injeta o Menu Lateral na tela */}
      {renderSideMenu()}

      {/* Cabeçalho Estilizado com Botão de Menu */}
      <header className="page-header">
        <h1 className="page-title">Suas <span>Conquistas</span></h1>
        
        <button className="btn-icon" onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </button>
      </header>

      {/* Grid de Badges */}
      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">{badge.icon}</div>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-desc">{badge.unlocked ? badge.desc : 'Bloqueado'}</div>
          </div>
        ))}
      </div>

    
    </div>
  );
}