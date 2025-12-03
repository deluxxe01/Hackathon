import React from "react";
import { useNavigate } from "react-router-dom";
import "./Liga.css";

export default function Ligas() {
  const navigate = useNavigate();

  const ligas = [
    { nome: "Clã Titãs", membros: 18, progresso: 82 },
    { nome: "Força Suprema", membros: 20, progresso: 64 },
    { nome: "Elite Sombria", membros: 12, progresso: 45 }
  ];

  return (
    <div className="ligas-container">
      <h2 className="ligas-title">Ligas / Clãs</h2>

      <div className="ligas-list">
        {ligas.map((l, i) => (
          <div key={i} className="liga-card">
            <h3>{l.nome}</h3>
            <p>{l.membros} membros</p>

            <div className="liga-bar">
              <div className="liga-progress" style={{ width: `${l.progresso}%` }} />
            </div>
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
        Voltar
      </button>
    </div>
  );
}
