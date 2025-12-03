import React from 'react';
import { useNavigate } from 'react-router-dom'; // Não é mais necessário aqui se só era usado no menu
import Barguer from "../../components/barguers/Barguer";
import './Conquista.css';

export default function Conquistas() {
  // Nota: Se você não tiver outros botões de navegação nesta tela, 
  // pode até remover o 'useNavigate' deste arquivo.

  // --- Dados dos Badges (Mock) ---
  const badges = [
    { id: 1, name: 'Primeiros Passos', desc: 'Completou 1 missão', icon: '🦶', unlocked: true },
    { id: 2, name: 'Hidratado', desc: 'Bebeu 2L de água', icon: '💧', unlocked: true },
    { id: 3, name: 'Chama Eterna', desc: '7 dias de ofensiva', icon: '🔥', unlocked: false },
    { id: 4, name: 'Máquina', desc: 'Chegou ao Nível 10', icon: '🤖', unlocked: false },
    { id: 5, name: 'Social', desc: 'Entrou em uma Liga', icon: '🤝', unlocked: true },
    { id: 6, name: 'Lendário', desc: 'Top 1 no Ranking', icon: '👑', unlocked: false },
  ];

  return (
    <div className="badges-container">
      
      {/* --- CABEÇALHO (Header) --- */}
      <header className="page-header">
        <h1 className="page-title">Suas <span>Conquistas</span></h1>
        
        {/* Componente Burguer substitui o botão antigo e o menu lateral */}
        <Barguer />
      </header>

      {/* --- GRID DE BADGES --- */}
      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">
                {badge.icon}
            </div>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-desc">
                {badge.unlocked ? badge.desc : 'Bloqueado'}
            </div>
            {/* Se quiser um cadeado visual extra */}
            {!badge.unlocked && <div style={{fontSize:'10px', marginTop:'5px'}}>🔒</div>}
          </div>
        ))}
      </div>

    </div>
  );
}