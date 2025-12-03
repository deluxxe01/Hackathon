import React from "react";
import { useNavigate } from "react-router-dom";
import Barguer from "../../components/barguers/Barguer";
import "./Ranking.css";

export default function Ranking() {
  const navigate = useNavigate();

  // --- 1. Definição das Patentes (Caminho baseado na sua pasta public) ---
  // A regra: Quanto MENOR o id, MAIOR a patente.
  const allPatentes = [
    { id: 0, nome: "Opala", img: "/patentes/0-Opala.png" },       // Topo
    { id: 1, nome: "Obsidiana", img: "/patentes/1-Obsidiana.png" },
    { id: 2, nome: "Rubi", img: "/patentes/2-Rubi.png" },
    { id: 3, nome: "Esmeralda", img: "/patentes/3-Esmeralda.png" },
    { id: 4, nome: "Safira", img: "/patentes/4-Safira.png" },
    { id: 5, nome: "Ametista", img: "/patentes/5-Ametista.png" },
    { id: 6, nome: "Ouro", img: "/patentes/6-Ouro.png" },
    { id: 7, nome: "Prata", img: "/patentes/7-Prata.png" },
    { id: 8, nome: "Bronze", img: "/patentes/8-Bonse.png" },      // Início
  ];

  // --- 2. Configuração da Patente Atual ---
  // Aqui definimos que o usuário está na "Esmeralda" (ID 3).
  // Futuramente, você pode pegar isso do backend ou contexto do usuário.
  const currentPatenteId = 3; 
  const currentPatenteIndex = allPatentes.findIndex(p => p.id === currentPatenteId);
  const currentPatenteData = allPatentes[currentPatenteIndex];

  // Helper para pegar patentes vizinhas sem quebrar se não existir (ex: id -1)
  const getPatente = (offset) => {
    const index = currentPatenteIndex + offset;
    // Verifica se existe dentro do array
    if (index >= 0 && index < allPatentes.length) {
      return allPatentes[index];
    }
    return null; // Retorna null se não houver (ex: se for Opala, não tem próximo)
  };

  // --- Dados do Ranking (Mantidos) ---
  const ranking = [
    { pos: 1, nome: "Beatriz Mazz...", pontos: 1080, avatar: "https://i.pravatar.cc/150?img=1" },
    { pos: 2, nome: "Ariadne", pontos: 799, avatar: "https://i.pravatar.cc/150?img=5" },
    { pos: 3, nome: "Mary C", pontos: 349, avatar: "https://i.pravatar.cc/150?img=9" },
    { pos: 4, nome: "Emma", pontos: 273, avatar: "https://i.pravatar.cc/150?img=4" },
    { pos: 5, nome: "Você", pontos: 217, avatar: "https://i.pravatar.cc/150?img=12" },
    { pos: 6, nome: "ph.CPwhDI", pontos: 197, avatar: "https://i.pravatar.cc/150?img=3" },
    { pos: 7, nome: "桂 桂", pontos: 195, avatar: "https://i.pravatar.cc/150?img=7" },
  ];

  return (
    <div className="ranking-container">
      <div className="header-top">
        <Barguer />
      </div>

      {/* --- CABEÇALHO DA LIGA --- */}
      <div className="league-header">
        <div className="leagues-row">
          
          {/* Patente Anterior (Pior rank -> +1 no index) ex: Safira */}
          {getPatente(1) && (
            <img 
              src={getPatente(1).img} 
              alt={getPatente(1).nome} 
              className="league-icon secondary" 
            />
          )}

          {/* Patente Atual (Central) ex: Esmeralda */}
          <img 
            src={currentPatenteData.img} 
            alt={currentPatenteData.nome} 
            className="league-icon active-main" 
          />

          {/* Próxima Patente (Melhor rank -> -1 no index) ex: Rubi */}
          {getPatente(-1) && (
            <img 
              src={getPatente(-1).img} 
              alt={getPatente(-1).nome} 
              className="league-icon secondary" 
            />
          )}
          
        </div>

        <h2 className="league-title">Divisão {currentPatenteData.nome}</h2>
        <p className="league-desc">Os 10 primeiros avançam para a divisão {getPatente(-1)?.nome || "Suprema"}.</p>
        <div className="league-timer">Isso termina em 1 dia</div>
      </div>

      {/* --- LISTA DO RANKING --- */}
      <div className="ranking-list">
        {ranking.map((p) => (
          <div 
            key={p.pos} 
            className={`ranking-card ${p.nome === "Você" ? "me" : ""} ${p.pos === 1 ? "rank-1" : ""}`}
          >
            <div className="rank-position">{p.pos}</div>
            <img src={p.avatar} alt={p.nome} className="rank-avatar" />
            <div className="rank-info">
              <span className="rank-name">{p.nome}</span>
              <span className="rank-points">{p.pontos} XP</span>
            </div>
            {p.pos === 1 && <div className="rank-reward">🎁</div>}
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/perfil")}>
        Voltar
      </button>
    </div>
  );
}