import React from "react";
import Barguer from "../../components/barguers/Barguer"; // Importando o componente
import "./Missao.css";

export default function Missao() {
  
  // --- Dados das Missões ---
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

      {/* --- CABEÇALHO --- */}
      <div className="header-top">
        {/* Componente Burguer (Botão + Menu Lateral) */}
        <Barguer />
        
        <h2 className="page-title">Missões Diárias</h2>
        
        {/* Espaçador vazio para manter o título centralizado se usar space-between */}
        <div style={{width: 30}}></div> 
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