import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ranking.css";

export default function Ranking() {
  const navigate = useNavigate();
  // Estado para controlar se o menu está aberto ou fechado
  const [openMenu, setOpenMenu] = useState(false);

  // --- Ícones (Definidos internamente conforme seu exemplo) ---
  const MenuIcon = () => (
    <img src="./icons/lista.png" className='icon-menu-main' alt="Menu" />
  );
  
  const HomeRIcon = () => (
    <img src="./icons/home-r.png" className='icon-burguer-r' alt="Home" />
  );
  const MedalRIcon = () => ( 
    <img src="./icons/medalha-r.png" className='icon-burguer-r' alt="Medalha" />
  );
  const MissionRIcon = () => ( 
    <img src="./icons/missao-r.png" className='icon-burguer-r' alt="Missão" />
  );
  const RankingRIcon = () => ( 
    <img src="./icons/ranking-r.png" className='icon-burguer-r' alt="Ranking" />
  );
  const UserRIcon = () => (
    <img src="./icons/user-r.png" className='icon-burguer-r' alt="User" />
  );

  // --- Dados do Ranking (Adicionei os emojis que faltavam) ---
  const ranking = [
    { pos: 1, nome: "Lucas Silva", pontos: 1280},
    { pos: 2, nome: "Mariana Souza", pontos: 1120},
    { pos: 3, nome: "Pedro Martins", pontos: 960},
    { pos: 4, nome: "João Almeida", pontos: 820},
    { pos: 5, nome: "Você", pontos: 780},
  ];

  return (
    <div className="ranking-container">

      {/* Cabeçalho com Botão de Menu */}
      <div className="header-top">
        <button className="btn-menu-toggle" onClick={() => setOpenMenu(true)}>
            <MenuIcon />
        </button>
      </div>

      {/* --- MENU LATERAL (SIDEBAR) --- */}
      {/* Overlay escuro para fechar ao clicar fora */}
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
        <button className="side-item active" onClick={() => setOpenMenu(false)}>
            <RankingRIcon /> <span>Ranking</span>
        </button>
        <button className="side-item" onClick={() => navigate('/missao')}>
            <MissionRIcon /> <span>Missões</span>
        </button>
      </div>

      {/* --- CONTEÚDO DO RANKING --- */}
      <h2 className="ranking-title">Ranking Global</h2>
      <p className="ranking-desc">Suba posições treinando diariamente!</p>

      <div className="ranking-list">
        {ranking.map((p) => (
          <div 
            key={p.pos} 
            className={`ranking-card ${p.nome === "Você" ? "me" : ""}`}
          >
            <div className="rank-position">{p.pos}</div>

            <div className="rank-info">
              <span className="rank-name">
                {p.emoji} {p.nome}
              </span>
              <span className="rank-points">{p.pontos} pts</span>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/perfil")}>
        Voltar
      </button>

    </div>
  );
}