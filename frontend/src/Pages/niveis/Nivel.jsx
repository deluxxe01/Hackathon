import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nivel.css";

export default function Level() {
  const navigate = useNavigate();

  const nivel = 7;
  const xpAtual = 520;
  const xpProximo = 700;
  const porcentagem = (xpAtual / xpProximo) * 100;

  return (
    <div className="level-container">
      <h2 className="level-title">Seu Nível</h2>

      <div className="level-box">
        <h3 className="level-number">Nível {nivel}</h3>
        <p className="level-title-sub">Título: <span>⚔️ Guerreiro</span></p>

        <div className="xp-bar">
          <div className="xp-progress" style={{ width: `${porcentagem}%` }}></div>
        </div>

        <p className="xp-info">{xpAtual} XP / {xpProximo} XP</p>
      </div>

      <button className="btn-voltar" onClick={() => navigate("/dashboard")}>
        Voltar
      </button>
    </div>
  );
}
