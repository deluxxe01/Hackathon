import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barguer from "../../components/barguers/Barguer";
import "./Ranking.css";

// --- ÍCONES ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

export default function Ranking() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("ranking");

  // --- DADOS DO RANKING (Usuários) ---
  const rankingData = [
    { pos: 1, nome: "Lucas da Silva", destaque: false },
    { pos: 2, nome: "Maria Eduarda", destaque: false },
    { pos: 3, nome: "Vithor Lorram", destaque: true },
    { pos: 4, nome: "Caio Lorram", destaque: false },
    { pos: 5, nome: "Guilherme", destaque: false },
  ];

  // --- DADOS DAS PATENTES (Agora com XP) ---
  const patentesData = [
    { 
      id: 1, 
      nome: "Opala Arcoires", 
      color: "#00b894", 
      img: "/patentes/0-Opala.png", 
      gradient: "linear-gradient(90deg, #00b894, #a29bfe)", 
      isTextGradient: true,
      req: "XP: 50.000" // Topo das patentes
    },
    { id: 2, nome: "Obsidiana", color: "#000000", img: "/patentes/1-Obsidiana.png", req: "XP: 40.000" },
    { id: 3, nome: "Rubi", color: "#d63031", img: "/patentes/2-Rubi.png", req: "XP: 30.000" },
    { id: 4, nome: "Jade", color: "#00b894", img: "/patentes/3-Jade.png", req: "XP: 20.500" }, 
    { id: 5, nome: "Safira", color: "#0984e3", img: "/patentes/4-Safira.png", req: "XP: 15.000" },
    { id: 6, nome: "Ametista", color: "#a29bfe", img: "/patentes/5-Ametista.png", req: "XP: 10.000" },
    { id: 7, nome: "Ouro", color: "#fdcb6e", img: "/patentes/6-Ouro.png", req: "XP: 6.500" },
    { id: 8, nome: "Prata", color: "#b2bec3", img: "/patentes/7-Prata.png", req: "XP: 3.000" }, // Exemplo dado
    { id: 9, nome: "Bronze", color: "#cd6133", img: "/patentes/8-Bronze.png", req: "XP: 1.200" }, // Exemplo dado
  ];

  // --- DADOS DAS LIGAS (Valores maiores de XP) ---
  const ligasData = [
    { 
      id: 1, 
      nome: "Liga Diamante vermelho", 
      color: "red", 
      img: "/patentes/000-Liga-mestre.png",
      gradient: "linear-gradient(180deg, #2d3436 0%, #ff0000 100%)",
      req: "XP: 100.000"
    },
    { 
      id: 2, 
      nome: "Liga Diamante", 
      color: "#0984e3", 
      img: "/patentes/0000-Liga-Imortal.png",
      gradient: "linear-gradient(180deg, #2d3436 0%, #0984e3 100%)",
      req: "XP: 80.000"
    },
    { 
      id: 3, 
      nome: "Liga esmeralda", 
      color: "#00b894", 
      img: "/patentes/00-Liga-base.png",
      gradient: "linear-gradient(180deg, #2d3436 0%, #00b894 100%)",
      req: "XP: 65.000"
    },
  ];

  const handleBack = () => {
    if (currentView === "ligas") setCurrentView("patentes");
    else if (currentView === "patentes") setCurrentView("ranking");
    else navigate("/perfil");
  };

  // --- RENDERIZADORES ---

  const renderRankingContent = () => (
    <>
      <div className="ranking-title-area">
        <h2 className="ranking-title">Ranking</h2>
        <p className="ranking-subtitle">Suba posições ganhando XP!</p>
        <button className="btn-action-outline" onClick={() => setCurrentView("patentes")}>
          Ver Patentes
        </button>
      </div>
      <div className="ranking-list fade-in">
        {rankingData.map((user) => (
          <div key={user.pos} className={`ranking-card ${user.destaque ? "highlight" : ""}`}>
            <span className="rank-pos">{user.pos}</span>
            <span className="rank-name">{user.nome}</span>
          </div>
        ))}
      </div>
      <div className="ranking-footer-img fade-in">
        <img src="/img-vitta/ranks.svg" alt="Ilustração Ranking" />
      </div>
    </>
  );

  const renderPatentesContent = () => (
    <>
      <div className="ranking-title-area fade-in">
        <h2 className="ranking-title" style={{color: '#6C5CE7'}}>Patentes</h2>
        <div className="patente-btn-wrapper">
            <button className="btn-action-outline btn-with-icon" onClick={() => setCurrentView("ligas")}>
                <img src="/patentes/00-Liga-base.png" alt="icon" className="btn-icon-small" />
                Ligas
            </button>
        </div>
      </div>

      <div className="patentes-list fade-in">
        {patentesData.map((item) => {
          const cardStyle = item.gradient 
            ? { 
                background: `linear-gradient(#fff, #fff) padding-box, ${item.gradient} border-box`,
                border: '2px solid transparent'
              }
            : { borderColor: item.color };

          return (
            <div key={item.id} className="patente-card" style={cardStyle}>
              <div className="patente-left-group">
                <div className="patente-icon-box">
                    <img src={item.img} alt={item.nome} />
                </div>
                <span 
                  className={`patente-name ${item.isTextGradient ? 'text-gradient-opala' : ''}`} 
                  style={!item.isTextGradient ? {color: item.nome === 'Obsidiana' ? '#000' : (item.color === '#fdcb6e' ? '#d4a017' : item.color)} : {}}
                >
                    {item.nome}
                </span>
              </div>
              
              {/* Quantidade de XP na direita */}
              <span className="card-requirement">{item.req}</span>
            </div>
          )
        })}
      </div>
    </>
  );

  const renderLigasContent = () => (
    <>
      <div className="ranking-title-area fade-in">
        <h2 className="ranking-title" style={{color: '#6C5CE7'}}>Ligas</h2>
      </div>

      <div className="ligas-list fade-in">
        {ligasData.map((liga) => {
             const ligaStyle = liga.gradient 
             ? { 
                 background: `linear-gradient(#fff, #fff) padding-box, ${liga.gradient} border-box`,
                 border: '3px solid transparent'
               }
             : { borderColor: liga.color };

            return (
              <div key={liga.id} className="liga-card" style={ligaStyle}>
                <div className="liga-left-group">
                    <div className="liga-icon-wrapper">
                        <img src={liga.img} alt={liga.nome} />
                    </div>
                    <span className="liga-name" style={{color: liga.color === 'red' ? '#d63031' : (liga.color === '#00b894' ? '#00b894' : '#0984e3')}}>
                        {liga.nome}
                    </span>
                </div>
                
                {/* Quantidade de XP na direita */}
                <span className="card-requirement lg-text">{liga.req}</span>
              </div>
            )
        })}
      </div>
    </>
  );

  return (
    <div className="ranking-container">
      <header className="ranking-header">
        <button onClick={handleBack} className="btn-back">
          <ArrowLeft />
        </button>
        <div style={{ flex: 1 }}></div>
        <Barguer />
      </header>

      <div className="ranking-content-scroll">
        {currentView === "ranking" && renderRankingContent()}
        {currentView === "patentes" && renderPatentesContent()}
        {currentView === "ligas" && renderLigasContent()}
      </div>
    </div>
  );
}