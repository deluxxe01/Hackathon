import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Missao.css";

export default function Missao() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  // --- Ícones Personalizados (.png) ---
  const MenuIcon = () => (
    <img src="./icons/lista.png" className='icon-menu-main' alt="Menu" />
  );
  
  // Ícones do Menu Lateral
  const HomeRIcon = () => <img src="./icons/home-r.png" className='icon-side' alt="Home" />;
  const MedalRIcon = () => <img src="./icons/medalha-r.png" className='icon-side' alt="Medalha" />;
  const MissionRIcon = () => <img src="./icons/missao-r.png" className='icon-side' alt="Missão" />;
  const RankingRIcon = () => <img src="./icons/ranking-r.png" className='icon-side' alt="Ranking" />;
  const UserRIcon = () => <img src="./icons/user-r.png" className='icon-side' alt="User" />;

  const missoes = [
    {
      id: 1,
      titulo: "Treinar 20 minutos",
      desc: "Finalize uma sessão de treino hoje.",
      progresso: 60,
      recompensa: "50 XP",
      concluida: false
    },
    {
      id: 2,
      titulo: "Desafio de lógica",
      desc: "Complete 1 desafio lógico.",
      progresso: 20,
      recompensa: "80 XP",
      concluida: false
    },
    {
      id: 3,
      titulo: "Manter sequência",
      desc: "Treine por 3 dias consecutivos.",
      progresso: 100,
      recompensa: "100 XP",
      concluida: true,
    },
  ];

  return (
    <div className="missao-container">

      {/* --- MENU LATERAL (SIDEBAR) --- */}
      <div className={`menu-overlay ${openMenu ? "open" : ""}`} onClick={() => setOpenMenu(false)} />
      
      <div className={`side-menu ${openMenu ? "open" : ""}`}>
        <div className="side-header">
            <h3 className="side-title">Menu</h3>
            <button className="btn-close" onClick={() => setOpenMenu(false)}>×</button>
        </div>

        <button className="side-item" onClick={() => navigate('/')}>
            <HomeRIcon /> <span>Home</span>
        </button>
        <button className="side-item" onClick={() => {navigate('/perfil'); setOpenMenu(false)}}>
            <UserRIcon /> <span>Perfil</span>
        </button>
        <button className="side-item" onClick={() => navigate('/conquista')}>
            <MedalRIcon /> <span>Conquistas</span>
        </button>
        <button className="side-item" onClick={() => navigate('/ranking')}>
            <RankingRIcon /> <span>Ranking</span>
        </button>
        {/* Item Ativo */}
        <button className="side-item active" onClick={() => setOpenMenu(false)}>
            <MissionRIcon /> <span>Missões</span>
        </button>
      </div>

      {/* --- CABEÇALHO --- */}
      <div className="header-top">
        <button className="btn-menu-toggle" onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </button>
        <h2 className="page-title">Missões Diárias</h2>
        <div style={{width: 28}}></div> {/* Espaçador para equilíbrio visual */}
      </div>

      <p className="missao-subtitle">Conclua para ganhar XP e subir no ranking!</p>

      {/* --- LISTA DE MISSÕES --- */}
      <div className="missao-list">
        {missoes.map((m) => (
          <div
            key={m.id}
            className={`missao-card ${m.concluida ? "done" : ""}`}
          >
            <div className="missao-header-card">
              <h3 className="missao-titulo">{m.titulo}</h3>
              <span className={`missao-recompensa ${m.concluida ? "done-badge" : ""}`}>
                {m.recompensa}
              </span>
            </div>

            <p className="missao-desc-item">{m.desc}</p>

            <div className="progress-container">
                <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${m.progresso}%` }}
                ></div>
                </div>
                <span className="progress-text">{m.progresso}%</span>
            </div>
            
            {m.concluida && <div className="check-icon">✔ Concluída</div>}
          </div>
        ))}
      </div>

    </div>
  );
}