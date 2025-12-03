import React from "react";
import Barguer from "../../components/barguers/Barguer"; 
import "./Missao.css";

export default function Missao() {
  
  const missoes = [
    {
      id: 1,
      titulo: "Treinar 20 minutos",
      desc: "Finalize uma sessão de treino hoje",
      progresso: 0,
      recompensa: "50 XP",
      status: "Não feito",
      corBarra: "empty", 
      concluida: false
    },
    {
      id: 2,
      titulo: "Beba 3L de água",
      desc: "Finalize uma sessão de treino hoje",
      progresso: 50,
      recompensa: "80 XP",
      status: "Em andamento",
      corBarra: "pink", // Cor rosa para 'Em andamento'
      concluida: false
    },
    {
      id: 3,
      titulo: "Treinar 20 minutos",
      desc: "Finalize uma sessão de treino hoje",
      progresso: 100,
      recompensa: "100 XP",
      status: "Concluído",
      corBarra: "purple", // Cor roxa para 'Concluído'
      concluida: true, // Ativa o estilo de card especial
    },
    {
      id: 4,
      titulo: "Beba 3L de água",
      desc: "Finalize uma sessão de treino hoje",
      progresso: 40,
      recompensa: "80 XP",
      status: "Em andamento",
      corBarra: "pink",
      concluida: false
    },
  ];

  return (
    <div className="missao-container">

      {/* --- CABEÇALHO --- */}
      <div className="header-top">
        {/* Mantendo o Menu Lateral (Barguer) */}
        <Barguer />
        
        {/* Título Centralizado */}
        <h2 className="page-title">Missões</h2>
        
        {/* Espaçador invisível para equilibrar o layout flex (opcional) */}
        <div style={{width: 30}}></div> 
      </div>

      <p className="missao-subtitle">
        Conclua missões para ganha XP e subir no ranking!
      </p>

      {/* --- LISTA DE MISSÕES --- */}
      <div className="missao-list">
        {missoes.map((m) => (
          <div
            key={m.id}
            className={`missao-card ${m.concluida ? "done" : ""}`}
          >
            {/* Linha 1: Título e XP */}
            <div className="missao-header-card">
              <h3 className="missao-titulo">Missão: {m.titulo}</h3>
              <span className="missao-recompensa">
                {m.recompensa}
              </span>
            </div>

            {/* Linha 2: Descrição */}
            <p className="missao-desc-item">{m.desc}</p>

            {/* Linha 3: Barra de Progresso */}
            <div className="progress-container">
                <div className="progress-bar">
                  <div
                      className={`progress-fill ${m.corBarra}`}
                      style={{ width: `${m.progresso}%` }}
                  ></div>
                </div>
                {/* Linha 4: Status Texto */}
                <span className="status-text">{m.status}</span>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}