import React from "react";
import { useNavigate } from "react-router-dom";
import Barguer from "../../components/barguers/Barguer";
import "./Ranking.css";

// --- Ícone da Seta de Voltar ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default function Ranking() {
  const navigate = useNavigate();

  // --- Dados Mockados do Ranking (Conforme a imagem) ---
  const rankingData = [
    { pos: 1, nome: "Lucas da Silva" },
    { pos: 2, nome: "Maria Eduarda" },
    { pos: 3, nome: "Vithor Lorram" },
    { pos: 4, nome: "Caio Lorram" },
    { pos: 5, nome: "Guilherme" },
  ];

  return (
    <div className="ranking-container fade-in">
      {/* --- CABEÇALHO --- */}
      <header className="perfil-header-back">
        <button onClick={() => navigate("/perfil")} className="btn-back">
          <ArrowLeft />
        </button>
        
        {/* Espaçador para centralizar se necessário, ou remove se quiser o menu no canto */}
        <div style={{flex: 1}}></div> 

        <Barguer />
      </header>

      {/* --- TÍTULOS --- */}
      <div className="ranking-titles">
        <h2 className="title-ranking">Ranking Global</h2>
        <p className="subtitle-ranking">Suba posições ganhando XP!</p>
      </div>

      {/* --- LISTA DE CLASSIFICAÇÃO --- */}
      <div className="ranking-list">
        {rankingData.map((user) => (
          <div key={user.pos} className="ranking-row">
            {/* Número da Posição (Ex: 1) */}
            <span className="rank-pos-number">{user.pos}</span>
            {/* Nome do Usuário */}
            <span className="rank-user-name">{user.nome}</span>
          </div>
        ))}
      </div>

      {/* --- ILUSTRAÇÃO DO RODAPÉ --- */}
      {/* Substitua o src pelo caminho correto da sua imagem no public */}
      <img 
        src="./img-vitta/ranks.svg" alt="Ilustração Ranking" className="ranking-illustration" 
      />

    </div>
  );
}