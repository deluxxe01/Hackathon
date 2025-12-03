import React from "react";
import { useNavigate } from "react-router-dom";
import "./Estatistica.css";

export default function Stats() {
  const navigate = useNavigate();

  const peso = [88, 87, 86, 85.5, 85.2, 84.8, 84.5];

  const xp = [
    { dia: "Seg", valor: 120 },
    { dia: "Ter", valor: 180 },
    { dia: "Qua", valor: 90 },
    { dia: "Qui", valor: 200 },
    { dia: "Sex", valor: 160 }
  ];

  return (
    <div className="stats-container">
      <h2 className="stats-title">Estatísticas</h2>

      {/* PESO */}
      <div className="card">
        <h3>Peso (últimos dias)</h3>
        <div className="peso-line">
          {peso.map((p, i) => (
            <div key={i} className="dot" style={{ bottom: `${p * 0.8}px` }}></div>
          ))}
        </div>
      </div>

      {/* XP */}
      <div className="card">
        <h3>XP por Dia</h3>
        <div className="xp-bars">
          {xp.map((x) => (
            <div className="bar-wrapper" key={x.dia}>
              <div className="bar" style={{ height: `${x.valor}px` }}></div>
              <span>{x.dia}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
        Voltar
      </button>
    </div>

    
  );
}
