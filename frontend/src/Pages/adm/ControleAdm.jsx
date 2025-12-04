import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barguer from "../../components/barguers/Barguer";
// Certifique-se de importar o CSS criado acima
import './ControleAdm.css'; 
// Se estiver usando o CSS global do perfil, mude para './Perfil.css'

// --- ÍCONES SVG ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const TargetIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M22 2L18 6"></path>
  </svg>
);

const CardsIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="12" height="20" rx="2"></rect>
    <path d="M2 6h4"></path>
    <path d="M18 6h4"></path>
  </svg>
);

export default function ControleAdm() {
  const navigate = useNavigate();
  
  // Estados de navegação interna: 'menu', 'criar', 'listar'
  const [view, setView] = useState('menu'); 

  // Estado do formulário de missão
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    xp: ''
  });

  // Lista Mockada de Missões (Baseada no seu print)
  const [missoes] = useState([
    { id: 1, titulo: 'Treinar 20 minutos', descricao: 'Finalize uma sessão de treino hoje', xp: 50, concluidos: 210 },
    { id: 2, titulo: 'Beba 3L de água', descricao: 'Finalize uma sessão de treino hoje', xp: 80, concluidos: 79 },
    { id: 3, titulo: 'Treinar 30 minutos', descricao: 'Finalize uma sessão de treino hoje', xp: 100, concluidos: 500 },
    { id: 4, titulo: 'Beba 3L de água', descricao: 'Finalize uma sessão de treino hoje', xp: 80, concluidos: 50 },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Missão salva com sucesso!");
    // Lógica de salvar no backend viria aqui
  };

  // --- RENDERS ---

  // 1. TELA MENU PRINCIPAL
  const renderMenu = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-menu">
        {/* Título Azul centralizado ou alinhado conforme o CSS global */}
        <h2 className="title" style={{color: '#6C5CE7'}}>Controle ADM</h2>
        <Barguer />
      </header>

      <div className="menu-cards" style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        
        <button className="adm-card" onClick={() => setView('criar')}>
          <TargetIcon />
          <h3>Criar missões</h3>
        </button>

        <button className="adm-card" onClick={() => setView('listar')}>
          <CardsIcon />
          <h3>Ver missões</h3>
        </button>

      </div>
    </div>
  );

  // 2. TELA CRIAR/EDITAR MISSÃO
  const renderCriar = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <div style={{flex: 1, textAlign: 'center'}}>
            <h2 className="subtitle" style={{color: '#6C5CE7', margin: 0}}>Controle de<br/>Missões</h2>
        </div>
        <div style={{width: 24}}></div> {/* Espaçador para centralizar o título */}
        <div style={{position:'absolute', right: 20, top: 20}}><Barguer/></div>
      </header>

      <div className="form-container">
        <label className="label-field">Título</label>
        <input className="input-field" name="titulo" value={form.titulo} onChange={handleChange} />

        <label className="label-field">Descrição</label>
        <input className="input-field" name="descricao" value={form.descricao} onChange={handleChange} />

        <label className="label-field">Quantidade de XP</label>
        <input className="input-field" name="xp" type="number" value={form.xp} onChange={handleChange} />

        <div className="action-buttons">
          <button className="btn-edit">Editar dados</button>
          <button className="btn-save" style={{backgroundColor: '#FF7675'}} onClick={handleSave}>
            Salvar alterações
          </button>
        </div>

        <span className="text-link" onClick={() => setView('listar')}>
            <strong>Clique aqui</strong> para ver as missões!
        </span>
      </div>
    </div>
  );

  // 3. TELA VER MISSÕES
  const renderListar = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('criar')} className="btn-back"><ArrowLeft /></button>
        <div style={{flex: 1, textAlign: 'center'}}>
            <h2 className="subtitle" style={{color: '#6C5CE7', margin: 0}}>Missões</h2>
            <p style={{fontSize: '0.75rem', color: '#6C5CE7', margin: 0}}>Numero de pessoas por missão</p>
        </div>
        <div style={{position:'absolute', right: 20, top: 20}}><Barguer/></div>
      </header>

      <div className="form-container">
        <div className="missions-list">
            {missoes.map((item) => (
                <div key={item.id} className="mission-card">
                    <div className="mission-header-row">
                        <h4 className="mission-title">Missão: {item.titulo}</h4>
                        <span className="xp-badge">{item.xp} XP</span>
                    </div>
                    <span className="mission-desc">{item.descricao}</span>
                    
                    {/* Barra de progresso visual */}
                    <div className="progress-bar"></div>
                    
                    <div className="mission-footer">
                        Concluido por {item.concluidos} pessoas
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="perfil-container">
      {view === 'menu' && renderMenu()}
      {view === 'criar' && renderCriar()}
      {view === 'listar' && renderListar()}
    </div>
  );
}