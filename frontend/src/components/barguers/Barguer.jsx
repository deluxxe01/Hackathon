import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Barguer.css';

// ==========================================
// 1. GRUPO: ÍCONES ROXOS (Para o Menu Lateral)
// ==========================================
export const IconsRoxa = {
  Home: () => (
    <img src="./icons/home-r.png" className='icon-burguer-r' alt="Home" />
  ),
  Medal: () => ( 
    <img src="./icons/medalha-r.png" className='icon-burguer-r' alt="Medalha" />
  ),
  Mission: () => ( 
    <img src="./icons/missao-r.png" className='icon-burguer-r' alt="Missão" />
  ),
  Ranking: () => ( 
    <img src="./icons/ranking-r.png" className='icon-burguer-r' alt="Ranking" />
  ),
  User: () => (
    <img src="./icons/user-r.png" className='icon-burguer-r' alt="User" />
  ),
  // Caso precise de um ícone de status roxo
  Status: () => (
    <img src="./icons/statistic-r.png" className='icon-burguer-r' alt="Status" />
  ),

  Adm: () => (
    <img src="./icons/image-16.png" className='icon-burguer-r' alt="Status" />
  )
};

// ==========================================
// 2. GRUPO: ÍCONES BRANCOS/AZUIS (Geral)
// ==========================================
export const IconsBranca = {
  Home: () => (
    <img src="./icons/home-b.png" className='icon-home-b' alt="Home" />
  ),
  User: () => (
    <img src="./icons/user-b.png" className='icon-user' alt="User" />
  ),
  Medal: () => ( 
    <img src="./icons/medalha-b.png" className='icon-medalha-b' alt="Medalha" />
  ),
  Mission: () => (
    <img src="./icons/missao-b.png" className='icon-missao-b' alt="Missão" />
  ),
  Ranking: () => ( 
    <img src="./icons/ranking-b.png" className='icon-ranking-b' alt="Ranking" />
  ),
  // Utilitários
  Ruler: () => (
    <img src="./icons/regua.png" className='icon-regua' alt="Régua" />
  ),
  Kg: () => (
    <img src="./icons/KG.png" className='icon-kg' alt="KG" />
  ),
  Clipboard: () => (
    <img src="./icons/prancheta.png" className='icon-prancheta' alt="Prancheta" />
  ),
  Tape: () => (
    <img src="./icons/trena.png" className='icon-trena' alt="Trena" />
  )
};

// Ícone solto (Gatilho do Menu)
const MenuIcon = () => (
  <img src="./icons/lista.png" className='icon-lista' alt="Menu" />
);

const AdmIcon = () => (
  <img src="./icons/image-16.png" className='icon-lista' alt="Menu" />
);


// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function Burguer() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* 1. BOTÃO GATILHO */}
      <button className="btn-burguer-trigger" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>

      {/* 2. OVERLAY */}
      <div 
        className={`burguer-overlay ${isOpen ? "show" : ""}`} 
        onClick={() => setIsOpen(false)}
      />

      {/* 3. MENU LATERAL (Usa IconsRoxa) */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <h3 className="side-title">Menu</h3>

        <button className="side-item" onClick={() => handleNavigate('/')}>
          <IconsRoxa.Home /> Home
        </button>
        
        <button className="side-item" onClick={() => handleNavigate('/Perfil')}>
          <IconsRoxa.User /> Perfil
        </button>
        
        <button className="side-item" onClick={() => handleNavigate('/Conquista')}>
          <IconsRoxa.Medal /> Conquistas
        </button>
        
        <button className="side-item" onClick={() => handleNavigate('/Ranking')}>
          <IconsRoxa.Ranking /> Ranking
        </button>
        
        <button className="side-item" onClick={() => handleNavigate('/Missao')}>
          <IconsRoxa.Mission /> Missões
        </button>

        <button className="side-item" onClick={() => handleNavigate('/Estatistica')}>
          <IconsRoxa.Status /> Estatisticas
        </button>

        <button className="side-item" onClick={() => handleNavigate('/ControleAdm')}>
          <IconsRoxa.Adm /> ADM
        </button>
      </div>
    </>
  );
}