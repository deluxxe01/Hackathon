import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rotina.css";

export default function Rotina() {
  const navigate = useNavigate();

  const dias = [
    { dia: "Seg", treino: "Peito + Tríceps", status: "feito" },
    { dia: "Ter", treino: "Costas + Bíceps", status: "pendente" },
    { dia: "Qua", treino: "Pernas", status: "faltou" },
    { dia: "Qui", treino: "Abdômen", status: "pendente" },
    { dia: "Sex", treino: "Cardio 25 min", status: "pendente" },
    { dia: "Sáb", treino: "Livre", status: "livre" },
    { dia: "Dom", treino: "Descanso", status: "livre" },
  ];

  return (
    <div className="rotina-container">
      <h2 className="rotina-title">Rotina da Semana</h2>

      <div className="rotina-list">
        {dias.map((d) => (
          <div key={d.dia} className={`rotina-card ${d.status}`}>
            <h3>{d.dia}</h3>
            <p>{d.treino}</p>
            <span className="status">{d.status}</span>
          </div>
        ))}
      </div>

      <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
        Voltar
      </button>
    </div>
  );
}
