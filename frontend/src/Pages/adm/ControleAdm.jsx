import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barguer from "../../components/barguers/Barguer";

export default function ControleAdm() {
    const navigate = useNavigate();
    const [view, setView] = useState('menu'); 
  
    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      alert("Alterações salvas com sucesso!");
      setView('menu');
    };
  
    // --- TELAS ---
  
    const renderMenu = () => (
      <div className="perfil-content fade-in">
        
        <header className="perfil-header-menu">
          <h2 className="title">controle ADM</h2>
          <Barguer />
        </header>
  
        <div className="menu-cards">
          <div className="menu-card" onClick={() => setView('criaçao_missoes')}>
            <h3>criar missao</h3>
          </div>
  
          <div className="menu-card" onClick={() => setView('ver_missoes')}>
            <h3>ver missoes</h3>
          </div>
        </div>
      </div>
    );
  
    const rendercriaçao_missoes = () => (
      <div className="perfil-content fade-in">
        <header className="perfil-header-back">
          <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
          <h2 className="subtitle">missoes</h2>
        </header>
  
        <div className="form-container">
          <input className="input-field" name="nome" placeholder="Nome Completo" value={userData.nome} onChange={handleChange} />
          <input className="input-field" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
          <input className="input-field" name="genero" placeholder="Gênero" value={userData.genero} onChange={handleChange} />
          <input className="input-field" name="senha" type="password" placeholder="Senha" value={userData.senha} onChange={handleChange} />
  
          <div className="action-buttons">
            <button className="btn-edit">Editar dados</button>
            <button className="btn-save" onClick={handleSave}>Salvar alterações</button>
          </div>
        </div>
      </div>
    );
  
    const renderver_missoes = () => (
      <div className="perfil-content fade-in">
        <header className="perfil-header-back">
          <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
          <h2 className="subtitle">Medidas Pessoais</h2>
        </header>
  
        <div className="form-container">
          <input className="input-field" name="altura" placeholder="Altura" value={userData.altura} onChange={handleChange} />
          <input className="input-field" name="peso" placeholder="Peso" value={userData.peso} onChange={handleChange} />
          <input className="input-field" name="abdomen" placeholder="Largura do abdômen" value={userData.abdomen} onChange={handleChange} />
  
          <div className="action-buttons">
            <button className="btn-edit">Editar dados</button>
            <button className="btn-save" onClick={handleSave}>Salvar alterações</button>
          </div>
        </div>
      </div>
    );
  
    return (
      <div className="perfil-container">
   
        {view === 'menu' && renderMenu()}
        {view === 'missoes' && rendercriaçao_missoes()}
        {view === 'vermissoes' && renderver_missoes()}
      </div>
    );
}